import React from "react";

export default function FeatureCard() {
  return (
    <div className="bg-white w-75 md:w-68 rounded-xl p-5 py-7 shadow-lg flex flex-col border-1 border-black/30">
      {/* icon */}
      <div className="h-12 w-12 bg-blue-100 rounded-full mb-10"></div>

      {/* heading */}
      <h3 className="capitalize text-black-secondary mb-5 font-semibold text-2xl ">
        Course prediction engine
      </h3>

      {/* paragraph */}
      <p className="text-black-tertiary font-light">
        Accurately predicts the most suitable course for students based on their
        inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and preferences).
      </p>
    </div>
  );
}
