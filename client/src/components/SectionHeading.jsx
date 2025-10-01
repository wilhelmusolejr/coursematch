import React from "react";

export default function SectionHeading({ tagline, heading }) {
  return (
    <div className="capitalize mb-20 flex justify-center items-center flex-col gap-5">
      <div className="rounded-3xl bg-red-200 text-red-800 font-medium px-8 py-3 w-fit">
        {tagline}
      </div>
      <h2 className="font-bold text-3xl text-center text-secondary">
        {heading}
      </h2>
    </div>
  );
}
