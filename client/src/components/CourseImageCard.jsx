import React from "react";

export default function CourseImageCard() {
  return (
    <div className="h-[100px] md:h-[150px] lg:h-[200px] bg-white rounded-lg">
      <img
        src="/images/department_logo.png"
        alt=""
        className="w-full h-full object-contain p-5"
      />
    </div>
  );
}
