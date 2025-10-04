import React from "react";

export default function CoursePredictedItem({
  courseName = "",
  aboutCourse = "",
  whyRecommended = "",
  programs = [],
  careerPath = [],
  college_type = "",
}) {
  let classname, heading, tagline;

  switch (college_type) {
    case "aligned":
      classname = "bg-slate-200/50 order-1";
      heading = "Best fit with your strand";
      tagline = "Aligned Choice";
      break;
    case "not_aligned":
      classname = "bg-slate-200/40 self-center lg:mt-10 order-2";
      heading = "Alternative outside your strand";
      tagline = "Alternative Path";
      break;
    case "mixed":
      classname = "bg-slate-200/30 self-end lg:mt-30 order-3";
      heading = "General top pick";
      tagline = "Explore Everything";
      break;
  }

  return (
    <div
      className={`px-5 py-16 rounded-lg border-1 border-black/10  max-w-100 xl:flex-1 ${classname}`}
    >
      {/* heading */}
      <div className="flex justify-center items-center gap-5 flex-col text-center">
        {/* tagline */}
        <div className="capitalize rounded-3xl bg-red-200 text-red-800 font-medium px-8 py-3 w-fit">
          {tagline}
        </div>
        {/* heading text */}
        <h2 className="capitalize font-semibold text-2xl text-[#1a1a1a]">
          {heading}
        </h2>
      </div>

      {/* image */}
      <div className="h-60 bg-slate-300 rounded-md my-7"></div>

      {/* Information */}
      <h3 className="uppercase text-[#111] font-medium text-xl my-10">
        {courseName}
      </h3>

      {/* parent */}
      <div className="flex flex-col gap-10">
        {/* about */}
        <div className="">
          <h4 className="font-medium   text-lg mb-1">About the department</h4>
          <p className="font-light ">{aboutCourse}</p>
        </div>

        {/* Why */}
        <div className="">
          <h4 className="font-medium text-lg mb-1">Why recommended</h4>
          <p className="font-light">{whyRecommended}</p>
        </div>

        {/* Programs */}
        <div className="">
          <h4 className="font-medium text-lg mb-1">Programs</h4>
          <ul className="font-light ms-2 list-disc list-inside">
            {programs.map((prog, index) => (
              <li key={index}>{prog}</li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div className="">
          <h4 className="font-medium text-lg mb-1">Career path</h4>
          <ul className="font-light ms-2 list-disc list-inside">
            {careerPath.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
