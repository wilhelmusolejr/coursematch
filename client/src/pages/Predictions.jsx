import { React, useState } from "react";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import CoursePredictedItem from "../components/CoursePredictedItem";

export default function Predictions() {
  const [predictResult, setPredictResult] = useState(null);

  function submitForm() {
    // perform form validation here
    // if valid, call the API to get the prediction result
    setPredictResult(true);
  }

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
      {predictResult || (
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
                  {/* -- */}
                  <div className="">
                    <h3 className="mb-1">
                      Grade 12 GPA <span className="text-red-500">*</span>
                    </h3>
                    <input
                      type="text"
                      className="border-black/30 bg-white p-2 border-1 rounded-md w-full"
                    />
                  </div>

                  {/* -- */}
                  <div className="">
                    <h3 className="mb-1">
                      Overall percentille rank{" "}
                      <span className="text-red-500">*</span>
                    </h3>
                    <input
                      type="text"
                      className="border-black/30 bg-white p-2 border-1 rounded-md w-full"
                    />
                  </div>

                  {/* -- */}
                  <div className="">
                    <h3 className="mb-1">
                      Strand taken <span className="text-red-500">*</span>
                    </h3>
                    <input
                      type="text"
                      className="border-black/30 bg-white p-2 border-1 rounded-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            <div className=" text-white flex items-center justify-center mt-20">
              <div
                className="rounded-3xl cursor-pointer bg-blue-800 font-medium uppercase px-8 py-3 w-fit"
                onClick={submitForm}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result */}
      {predictResult && (
        <div className="container mx-auto px-10 mb-30">
          <div className="flex gap-7 flex-wrap flex-col lg:flex-row justify-center items-start">
            {/* card */}
            <CoursePredictedItem
              heading="Best fit with your strand"
              tagline="Aligned Choice"
              courseName="BS Computer Science"
              className="bg-slate-200/50"
              aboutCourse="Computer Science focuses on problem-solving using algorithms, programming, and advanced computing concepts. It prepares you for roles in software development, AI, and systems design."
              whyRecommended="This course aligns closely with your current academic strand, making it the most natural progression based on your strengths."
            />

            {/* card */}
            <CoursePredictedItem
              heading="Alternative outside your strand"
              tagline="Alternative Path"
              courseName="BS Information Technology"
              className="bg-slate-200/40 self-center lg:mt-10"
              aboutCourse="Information Technology emphasizes practical use of technology in business, networking, and systems management. It’s hands-on and industry-oriented."
              whyRecommended="Although not fully aligned with your strand, this program lets you explore a broader tech field with strong career opportunities."
            />

            {/* card */}
            <CoursePredictedItem
              heading="General top pick"
              tagline="Explore Everything"
              courseName="BS Psychology"
              className="bg-slate-200/30 self-end lg:mt-30"
              aboutCourse="Psychology studies human behavior and mental processes, with applications in education, healthcare, and organizational settings."
              whyRecommended="Chosen as a well-rounded fit from your overall profile, this course provides a unique direction if you want to explore beyond tech fields."
            />
          </div>
        </div>
      )}

      {/* footer */}
      <Footer />
    </>
  );
}
