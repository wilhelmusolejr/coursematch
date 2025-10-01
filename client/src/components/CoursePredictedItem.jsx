import React from "react";

export default function CoursePredictedItem({ className = "" }) {
  return (
    <div
      className={`px-5 py-16 rounded-lg border-1 border-black/20 bg-white-primary max-w-100 xl:flex-1 ${className}`}
    >
      {/* heading */}
      <div className="flex justify-center items-center gap-5 flex-col text-center">
        {/* tagline */}
        <div className="rounded-3xl bg-red-200 text-red-800 font-medium px-8 py-3 w-fit">
          Alligned choice
        </div>
        {/* heading text */}
        <h2 className="capitalize font-semibold text-2xl">
          Best fit with your strand
        </h2>
      </div>

      {/* image */}
      <div className="h-60 bg-slate-300 rounded-md my-7"></div>

      {/* Information */}
      <h3 className="uppercase font-semibold text-xl my-10">
        Institute of computer studies
      </h3>

      {/* parent */}
      <div className="flex flex-col gap-10">
        {/* about */}
        <div className="">
          <h4 className="font-medium text-lg mb-1">About the department</h4>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            molestias.
          </p>
        </div>

        {/* Why */}
        <div className="">
          <h4 className="font-medium text-lg mb-1">Why recommended</h4>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
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
