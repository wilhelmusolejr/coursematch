import React from "react";

export default function CoursePredictedItem({
  heading,
  tagline,
  courseName = "",
  className = "",
  aboutCourse = "",
  whyRecommended = "",
}) {
  return (
    <div
      className={`px-5 py-16 rounded-lg border-1 border-black/10  max-w-100 xl:flex-1 ${className}`}
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
            <li>Computer science</li>
            <li>Computer science</li>
            <li>Computer science</li>
            <li>Computer science</li>
          </ul>
        </div>

        {/* Programs */}
        <div className="">
          <h4 className="font-medium text-lg mb-1">Career path</h4>
          <ul className="font-light ms-2 list-disc list-inside">
            <li>Computer science</li>
            <li>Computer science</li>
            <li>Computer science</li>
            <li>Computer science</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
