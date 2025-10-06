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

  const handleSubmit = async (e) => {
    let formData = {
      CET: parseFloat(cet),
      GPA: parseFloat(gpa),
      STRAND: strandSelected,
    };

    e.preventDefault();
    try {
      const prediction = await getPrediction(formData);
      prediction.predictions.forEach;
      setResult(prediction);
      setHasSubmitted(true);
      console.log(prediction);
    } catch {
      setResult("Error fetching prediction");
    }
  };

  const strandOption = [
    { value: "", label: "Select an option" },
    { value: "ABM", label: "ABM" },
    { value: "ARTSDESIGN", label: "ARTSDESIGN" },
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
        <h1 className="text-3xl uppercase font-bold mb-5">
          Get your course recommended!
        </h1>
        <p className="md:w-10/12 lg:w-6/12 m-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quasi, velit in asperiores repellendus inventore suscipit et modi
          fugiat aspernatur?
        </p>
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
            {/* test */}
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
        </div>
      )}

      {/* footer */}
      <Footer />
    </>
  );
}
