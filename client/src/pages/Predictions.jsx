import { React, useState } from "react";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import CoursePredictedItem from "../components/CoursePredictedItem";
import { getPrediction } from "../api/predict";

export default function Predictions() {
  const [result, setResult] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [gpa, setGpa] = useState("");
  const [name, setName] = useState("");
  const [cet, setCet] = useState("");
  const [strandSelected, setStrandSelected] = useState(false);

  const [pageHeading, setPageHeading] = useState(
    "Find the Course That Fits You Best!"
  );
  const [pageDescription, setPageDescription] = useState(
    "Take the first step toward your future! Provide your academic details, and our system will guide you to the college or department that aligns perfectly with your interests and potential."
  );

  const [summaryParagraph, setSummaryParagraph] = useState([]);

  const handleSubmit = async (e) => {
    let formData = {
      CET: parseFloat(cet),
      GPA: parseFloat(gpa),
      STRAND: strandSelected,
    };

    e.preventDefault();
    try {
      const prediction = await getPrediction(formData);

      console.log(prediction);

      let duplicates = [];
      const paragraph_summary = [];

      for (let college in prediction.predictions) {
        let firstObj = prediction.predictions[college];

        for (let inside_college in prediction.predictions) {
          let secondObj = prediction.predictions[inside_college];

          if (firstObj.model_no === secondObj.model_no) {
            continue;
          } else {
            if (firstObj.name === secondObj.name) {
              duplicates.push(firstObj.model_no);
              duplicates.push(secondObj.model_no);
            }
          }
        }
      }

      duplicates = [...new Set(duplicates)];

      if (duplicates.length > 0) {
        let duplicateParagraph = "";

        if (duplicates.length === 2) {
          let college_dup_name = "";
          let college_other_name = "";
          let college_other_modelno = "";

          for (let college in prediction.predictions) {
            let obj = prediction.predictions[college];
            if (
              obj.model_no === duplicates[0] ||
              obj.model_no === duplicates[1]
            ) {
              college_dup_name = obj.name;
              college_other_modelno = obj.model_no;
              break;
            }
          }

          for (let college in prediction.predictions) {
            let obj = prediction.predictions[college];
            if (duplicates.includes(obj.model_no)) {
              continue;
            } else {
              college_other_name = obj.name;
              break;
            }
          }

          duplicateParagraph = `Model ${duplicates[0]} and Model ${duplicates[1]} both recommended the same college ${college_dup_name}. This indicates a strong alignment between your academic background and the recommended department, suggesting that this option is particularly well-suited to your strengths and interests. Lastly, Model ${college_other_modelno} recommended ${college_other_name}.`;
          paragraph_summary.push(duplicateParagraph);
        } else {
          duplicateParagraph = `All three models recommended the same college. This strong consensus across different predictive approaches highlights a significant alignment between your academic profile and the recommended department, suggesting that this option is exceptionally well-suited to your strengths and interests.`;
          paragraph_summary.push(duplicateParagraph);
        }
      } else {
        const keys = Object.keys(prediction.predictions);
        const lastKey = keys[keys.length - 1];

        let intro_paragraph = `Each model provided a unique recommendation, showcasing the diverse opportunities available based on your academic profile. This variety allows you to explore different paths and consider multiple options that align with your strengths and interests.`;

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
      setPageHeading(`Hi, ${name}! Here are your course recommendations`);
      setPageDescription(
        `Our intelligent prediction system has processed your academic data — ${formData["CET"]} CET score, ${formData["GPA"]} GPA, and ${formData["STRAND"]} strand — to generate the most suitable department matches. Review your results below and discover where your strengths truly align.`
      );
      setResult(prediction);
      setHasSubmitted(true);
    } catch {
      setResult("Error fetching prediction");
    }
  };

  const strandOption = [
    { value: "", label: "Select an option" },
    { value: "ABM", label: "ABM" },
    { value: "GAS", label: "GAS" },
    { value: "HUMSS", label: "HUMSS" },
    { value: "STEM", label: "STEM" },
    { value: "TVL", label: "TVL" },
  ];

  return (
    <>
      {/* HEADER */}
      <div className="text-white">
        {/* Navigator */}
        <Navigator />
      </div>

      <div className="container mx-auto px-10 mt-32 mb-20 text-center">
        <h1 className="text-3xl uppercase font-bold mb-5">{pageHeading}</h1>
        <p className="md:w-10/12 lg:w-6/12 m-auto">{pageDescription}</p>
      </div>

      {/* Form */}
      {hasSubmitted || (
        <div className="container mx-auto md:mb-40 lg:mb-60 md:px-10 ">
          <div className="container mx-auto border-1  border-black/20 px-10 py-14 lg:py-20 rounded-xl bg-white-primary">
            <div className="flex md:flex-row flex-col gap-10 md:gap-5 md:justify-center">
              {/* Personal Info */}
              <div className="w-full max-w-80">
                <h2 className="text-xl font-semibold mb-5">
                  Personal information
                </h2>
                <div className="">
                  <h3 className="mb-1">
                    Name <span className="text-red-500">*</span>
                  </h3>
                  <input
                    type="text"
                    className="p-2 border-1 border-black/30 rounded-md w-full bg-white"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
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
                        setGpa(e.target.value);
                      }}
                    />
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
                        setCet(e.target.value);
                      }}
                    />
                  </div>

                  {/* -- */}
                  <div className="">
                    <h3 className="mb-1">
                      Strand tak en <span className="text-red-500">*</span>
                    </h3>
                    <select
                      id="strand"
                      value={strandSelected}
                      onChange={(e) => setStrandSelected(e.target.value)}
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
      {hasSubmitted && (
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
