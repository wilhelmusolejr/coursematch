import React from "react";
import IconWithBg from "./IconWithBg";

export default function AnchorItem({ icon, link, title }) {
  return (
    <div className="flex items-center gap-3">
      <IconWithBg icon={icon} />
      <a href={link} className="hover:text-red-600" target="blank">
        {title}
      </a>
    </div>
  );
}
