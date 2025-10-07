import React from "react";

export default function CourseImageCard({ img_url = "" }) {
  return (
    <div className="h-[120px] md:h-[150px] xl:h-[200px] bg-white rounded-lg">
      <img src={img_url} alt="" className="w-full h-full object-contain p-5" />
    </div>
  );
}
