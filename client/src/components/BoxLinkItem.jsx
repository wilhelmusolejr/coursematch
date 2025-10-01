import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BoxLinkItem({
  faIcon,
  pathName,
  pathUrl,
  className = "",
}) {
  return (
    <div
      className={`border-1 rounded-md py-3 px-3 lg:p-3 flex justify-between items-center gap-5 border-black/10 ${className}`}
    >
      {/*  */}
      <div className="flex gap-3 items-center">
        <div className="w-5 h-5 md:w-10 md:h-10 rounded-full  flex items-center justify-center">
          <FontAwesomeIcon icon={faIcon} className="text-xl" />
        </div>

        <a href={pathUrl}>{pathName}</a>
      </div>

      {/*  */}
      <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
    </div>
  );
}
