import { React, useEffect, useState } from "react";

import { faClose, faWarning } from "@fortawesome/free-solid-svg-icons";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import CoursePredictedItem from "../components/CoursePredictedItem";
import { getPrediction } from "../api/predict";
import DownloadPdfButton from "../components/DownloadPdfButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import definitionData from "../data/definition.json";

export default function Predictions() {
  const [result, setResult] = useState({ predictions: {} });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [strandSelected, setStrandSelected] = useState("-");
  const [gpa, setGpa] = useState("");
  const [name, setName] = useState("");
  const [cet, setCet] = useState("");

  const [gpaError, setGpaError] = useState(false);
  const [cetError, setCetError] = useState(false);
  const [strandError, setStandError] = useState(false);
  const [nameError, setNameError] = useState("");

  const [isServerOffline, setIsServerOffline] = useState(false);

  const [pageHeading, setPageHeading] = useState(
    "Find the Course That Fits You Best!"
  );
  const [pageDescription, setPageDescription] = useState(
    "Take the first step toward your future! Provide your academic details, and our system will guide you to the college or department that aligns perfectly with your interests and potential."
  );

  let intro_paragraph = `Each model provided a unique recommendation, showcasing the diverse opportunities available based on your academic profile. This variety allows you to explore different paths and consider multiple options that align with your strengths and interests.`;

  const [summaryParagraph, setSummaryParagraph] = useState([]);

  // handle data submit
  const handleSubmit = async (e) => {
    // scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    const isGpaValid = gpa === "" || gpa < 0 || gpa > 100;
    const isCetInvalid = cet === "" || cet < 0 || cet > 100;
    const isStrandInvalid = strandSelected === "-" || strandSelected === "";
    const nameUser = name === "" ? "user" : name;

    setGpaError(isGpaValid);
    setCetError(isCetInvalid);
    setStandError(isStrandInvalid);

    if (isGpaValid || isCetInvalid || isStrandInvalid || nameError !== "") {
      return;
    }

    if (gpa < 70 || cet < 50) {
      setPageHeading("Uh oh, this is awkward...");
      setPageDescription(
        `It seems that your current academic data doesn’t match any existing college profiles in our system. Please review your inputs or try again with updated information.`
      );
      setHasSubmitted(true);
      return;
    }

    // DATA from from
    // DATA from from
    // DATA from from
    let formData = {
      CET: parseFloat(cet),
      GPA: parseFloat(gpa),
      STRAND: strandSelected,
    };

    e.preventDefault();
    try {
      const prediction = await getPrediction(formData);

      let duplicates_model_no = [];
      const paragraph_summary = [];

      // Loop each college if there is duplication in the result and store in duplicates_model_no array
      for (let college in prediction.predictions) {
        let firstObj = prediction.predictions[college];

        for (let inside_college in prediction.predictions) {
          let secondObj = prediction.predictions[inside_college];

          if (firstObj.model_no === secondObj.model_no) {
            continue;
          } else {
            if (firstObj.name === secondObj.name) {
              duplicates_model_no.push(firstObj.model_no);
            }
          }
        }
      }

      // Removes model_no duplication
      duplicates_model_no = [...new Set(duplicates_model_no)];

      // True if there is duplication
      if (duplicates_model_no.length > 0) {
        let duplicateParagraph = "";

        if (duplicates_model_no.length === 2) {
          let college_dup_name = "";
          let college_other_name = "";
          let college_other_modelno = "";

          for (let college in prediction.predictions) {
            let obj = prediction.predictions[college];

            // if this college model no exist in the duplicate model number array, save the college name to college duplicate name var
            if (duplicates_model_no.includes(obj.model_no)) {
              college_dup_name = obj.name;
            } else {
              // else if this college model no do not exist in the duplicate model number array, save the college name to other college name
              college_other_name = obj.name;
              college_other_modelno = obj.model_no;
            }
          }

          paragraph_summary.push(intro_paragraph);
          duplicateParagraph = `Model ${duplicates_model_no[0]} and Model ${duplicates_model_no[1]} both recommended the same college, ${college_dup_name}. This indicates a strong alignment between your academic background and the recommended department, suggesting that this option is particularly well-suited to your strengths and interests. Lastly, Model ${college_other_modelno} recommended ${college_other_name}.`;
        } else {
          duplicateParagraph = `All three models recommended the same college. This strong consensus across different predictive approaches highlights a significant alignment between your academic profile and the recommended department, suggesting that this option is exceptionally well-suited to your strengths and interests.`;
        }

        paragraph_summary.push(duplicateParagraph);
      } else {
        const keys = Object.keys(prediction.predictions);
        const lastKey = keys[keys.length - 1];

        let dump_paragraph = [];

        for (let college in prediction.predictions) {
          let obj = prediction.predictions[college];
          const isLast = college === lastKey;

          if (!isLast) {
            dump_paragraph.push(
              `Model ${obj.model_no} recommended ${obj.name},`
            );
          } else {
            dump_paragraph.push(
              `and Model ${obj.model_no} recommended ${obj.name}.`
            );
          }
        }

        paragraph_summary.push(intro_paragraph);
        paragraph_summary.push(dump_paragraph.join(" "));
      }

      setSummaryParagraph(paragraph_summary);
      setPageHeading(`Hi, ${nameUser}! Here are your course recommendations`);
      setName(nameUser);
      setPageDescription(
        `Our intelligent prediction system has processed your academic data — ${formData["CET"]} CET score, ${formData["GPA"]} GPA, and ${formData["STRAND"]} strand — to generate the most suitable department matches. Review your results below and discover where your strengths truly align.`
      );
      setResult(prediction);
      setHasSubmitted(true);
    } catch (e) {
      setResult("Error fetching prediction");
      if (e.message === "Network Error") {
        let chosenColleges = {};

        let college_count = Object.keys(definitionData).length;
        let random_id = [
          Math.floor(Math.random() * college_count),
          Math.floor(Math.random() * college_count),
          Math.floor(Math.random() * college_count),
        ];

        let college_type = ["MIXED", "ALIGNED", "NOT_ALIGNED"];

        let index = 1;
        for (let id of random_id) {
          for (let college in definitionData) {
            if (definitionData[college].id === id) {
              definitionData[college]["image"] =
                "/images/colleges/" + definitionData[college]["name"] + ".png";
              definitionData[college]["model_no"] = index;
              chosenColleges[college_type[index - 1].toLowerCase()] =
                definitionData[college];
            }
          }

          index++;
        }

        const keys = Object.keys(chosenColleges);
        const lastKey = keys[keys.length - 1];

        const paragraph_summary = [];
        let dump_paragraph = [];

        for (let college in chosenColleges) {
          let obj = chosenColleges[college];
          const isLast = college === lastKey;

          if (!isLast) {
            dump_paragraph.push(
              `Model ${obj.model_no} recommended ${obj.name},`
            );
          } else {
            dump_paragraph.push(
              `and Model ${obj.model_no} recommended ${obj.name}.`
            );
          }
        }

        paragraph_summary.push(intro_paragraph);
        paragraph_summary.push(dump_paragraph.join(" "));

        console.log({ predictions: chosenColleges });
        console.log(paragraph_summary);

        setResult({ predictions: chosenColleges });
        setSummaryParagraph(paragraph_summary);
        setHasSubmitted(true);
        setIsServerOffline(true);

        setPageHeading(`Hi, ${nameUser}! Here are your course recommendations`);
        setName(nameUser);
        setPageDescription(
          `Our intelligent prediction system has processed your academic data — ${formData["CET"]} CET score, ${formData["GPA"]} GPA, and ${formData["STRAND"]} strand — to generate the most suitable department matches. Review your results below and discover where your strengths truly align.`
        );
      }
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value && value.trim().length < 2) {
      setNameError("Name must be at least 2 characters.");
    } else if (value && !/^[a-zA-Z\s'-]+$/.test(value)) {
      setNameError(
        "Name can only contain letters, spaces, apostrophes, and hyphens."
      );
    } else if (value.length > 50) {
      setNameError("Name cannot exceed 50 characters.");
    } else {
      setNameError("");
    }
  };

  const strandOption = [
    { value: "-", label: "Select an option" },
    { value: "ABM", label: "ABM" },
    { value: "GAS", label: "GAS" },
    { value: "HUMSS", label: "HUMSS" },
    { value: "STEM", label: "STEM" },
    { value: "TVL", label: "TVL" },
  ];

  useEffect(() => {
    let college_count = Object.keys(result.predictions || {}).length;

    if (college_count === 0 && !hasSubmitted) {
      document.title = "Recommendation | CourseMatch";
    } else if (college_count > 0 && hasSubmitted) {
      document.title = `We found ${college_count} college${
        college_count > 1 ? "s" : ""
      } for you! | CourseMatch`;
    } else {
      document.title = "We Couldn’t Find a Match | CourseMatch";
    }
  }, [result.predictions, hasSubmitted]);

  return (
    <>
      {/* HEADER */}
      <div className="text-white">
        {/* Navigator */}
        <Navigator />
      </div>

      <div className="container mx-auto px-10 mt-60 mb-20 text-center">
        <h1 className="text-3xl uppercase font-bold mb-5">{pageHeading}</h1>
        <p className="md:w-10/12 lg:w-6/12 m-auto">{pageDescription}</p>
      </div>

      {isServerOffline && (
        <div className="fixed inset-0 w-full h-full flex justify-center items-center">
          <div className="max-w-xl p-10 rounded-lg border-1 border-black/20 md:mx-auto mx-10 shadow-lg relative z-10 bg-white">
            <div className="flex flex-col md:flex-row justify-start items-start gap-5 ">
              <div className="min-w-10 min-h-10 rounded-full bg-red-200 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faWarning}
                  className="text-red-600 h-6 w-6 "
                />
              </div>
              <div className="">
                <h2 className="font-semibold text-xl text-yellow-600 mb-2">
                  Server Offline
                </h2>
                <p className="text-[#111111] font-light">
                  It seems our server is currently offline. The results you see
                  below are <em className="font-semibold">demo data</em>{" "}
                  generated automatically for display purposes only. Please
                  check back later once the service is back online.
                </p>
              </div>
            </div>
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => setIsServerOffline(false)}
              className="absolute top-5 right-5 h-6 w-6 cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Form */}
      {Object.keys(result.predictions || {}).length === 0 && !hasSubmitted && (
        <div className="container mx-auto md:mb-40 lg:mb-60 md:px-10 ">
          <div className="container mx-auto border-1  border-black/20 px-10 py-14 lg:py-20 rounded-xl bg-white-primary">
            <div className="flex md:flex-row flex-col gap-10 md:gap-5 md:justify-center">
              {/* Personal Info */}
              <div className="w-full max-w-80">
                <h2 className="text-xl font-semibold mb-5">
                  Personal information
                </h2>
                <div className="">
                  <h3 className="mb-1">Name</h3>
                  <input
                    type="text"
                    className="p-2 border-1 border-black/30 rounded-md w-full bg-white"
                    onChange={(e) => handleNameChange(e)}
                  />
                  {nameError && (
                    <p className="text-red-500 text-sm mt-1">{nameError}</p>
                  )}
                </div>
              </div>

              {/* Acadademic Background */}
              <div className="w-full max-w-80">
                <div className="">
                  <h2 className="text-xl font-semibold mb-5">
                    Academic Background
                  </h2>
                </div>
                <div className="flex gap-5 flex-col">
                  {/* GPA */}
                  <div className="">
                    <h3 className="mb-1">
                      Grade 12 GPA <span className="text-red-500">*</span>
                    </h3>
                    <input
                      type="number"
                      className="border-black/30 bg-white p-2 border-1 rounded-md w-full"
                      onChange={(e) => {
                        const value = e.target.value;

                        // prevent negative or non-numeric
                        if (
                          value === "" ||
                          (Number(value) >= 0 && Number(value) <= 100)
                        ) {
                          setGpa(value);
                          setGpaError(false);
                        } else {
                          e.target.value = gpa;
                          setGpaError(true);
                        }
                      }}
                    />
                    {gpaError && (
                      <p className="text-red-500 text-sm mt-1">
                        GPA must be between 0 and 100.
                      </p>
                    )}
                  </div>

                  {/* CET */}
                  <div className="">
                    <h3 className="mb-1">
                      Overall percentille rank{" "}
                      <span className="text-red-500">*</span>
                    </h3>
                    <input
                      type="number"
                      className="border-black/30 bg-white p-2 border-1 rounded-md w-full"
                      onChange={(e) => {
                        let value = e.target.value;

                        // prevent negative or non-numeric
                        if (
                          value === "" ||
                          (Number(value) >= 0 && Number(value) <= 100)
                        ) {
                          setCet(value);
                          setCetError(false);
                        } else {
                          e.target.value = cet;
                          setCetError(true);
                        }
                      }}
                    />
                    {cetError && (
                      <p className="text-red-500 text-sm mt-1">
                        CET must be between 0 and 100.
                      </p>
                    )}
                  </div>

                  {/* STRAND */}
                  <div className="">
                    <h3 className="mb-1">
                      Strand taken <span className="text-red-500">*</span>
                    </h3>
                    <select
                      id="strand"
                      value={strandSelected}
                      onChange={(e) => {
                        let value = e.target.value;

                        if (value === "-") {
                          setStandError(true);
                        } else {
                          setStrandSelected(value);
                          setStandError(false);
                        }
                      }}
                      className="border-black/30 cursor-pointer bg-white p-2 border-1 rounded-md w-full"
                    >
                      {strandOption.map((opt) => (
                        <option
                          key={opt.value}
                          className="cursor-pointer"
                          value={opt.value}
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {strandError && (
                      <p className="text-red-500 text-sm mt-1">
                        Choose the strand correctly.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            <div className=" text-white flex items-center justify-center mt-20">
              <div
                className="rounded-3xl cursor-pointer bg-blue-800 font-medium uppercase px-8 py-3 w-fit"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result */}
      {Object.keys(result.predictions || {}).length > 0 && hasSubmitted && (
        <div className="container mx-auto px-10 mb-30">
          <div className="flex gap-7 flex-wrap flex-col lg:flex-row justify-center items-start">
            {result && result.predictions && (
              <>
                {Object.entries(result.predictions).map(
                  ([key, value], index) => (
                    <CoursePredictedItem
                      key={index}
                      courseName={value["name"]}
                      aboutCourse={value["about"]}
                      imgUrl={value["image"]}
                      whyRecommended="This course aligns closely with your current academic strand, making it the most natural progression based on your strengths."
                      programs={value["program"]}
                      careerPath={value["career_path"]}
                      college_type={key}
                    />
                  )
                )}
              </>
            )}
          </div>

          <div className="my-24 text-[#333] leading-relaxed max-w-3xl mx-auto flex flex-col gap-5">
            {summaryParagraph.map((paragraph, index) => (
              <p className="" key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <hr className="border-black/10" />

          <div class="flex items-center md:flex-row flex-col gap-5 justify-center mt-10 mb-20">
            <p
              className="cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.location.reload();
              }}
            >
              Try again
            </p>

            <div className="border-l h-6 hidden md:block border-gray-400"></div>
            <div className="border-b md:hidden w-10 border-gray-400"></div>

            {/* button */}
            <DownloadPdfButton
              name={name}
              CET={cet}
              GPA={gpa}
              STRAND={strandSelected}
              colleges={result.predictions}
            />
          </div>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* footer */}
      <Footer />
    </>
  );
}
