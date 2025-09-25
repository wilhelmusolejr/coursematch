import React from "react";

export default function CourseImageCard() {
  return (
    <div className="w-[100px] h-[100px] bg-white rounded-lg">
      <img
        src="/images/department_logo.png"
        alt=""
        className="w-full h-full object-contain p-5"
      />
    </div>
  );
}
