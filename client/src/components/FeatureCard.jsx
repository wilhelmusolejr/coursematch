import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { motion } from "framer-motion";

export default function FeatureCard({
  heading = "",
  description = "",
  icon = "",
  variantItem,
}) {
  return (
    <motion.div
      variants={variantItem}
      className="bg-white w-75 md:w-68 rounded-xl p-5 py-7 shadow-lg flex flex-col border-1 border-black/30"
    >
      {/* icon */}
      <div className="h-12 w-12 bg-blue-100 rounded-full mb-10 flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-blue-600 h-6 w-6 m-3" />
      </div>

      {/* heading */}
      <h3 className="capitalize text-black-secondary mb-5 font-semibold text-2xl ">
        {heading}
      </h3>

      {/* paragraph */}
      <p className="text-black-tertiary font-light">{description}</p>
    </motion.div>
  );
}
