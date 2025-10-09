import React from "react";

import { motion } from "framer-motion";

export default function CourseImageCard({ img_url = "", variantItem }) {
  return (
    <motion.div
      variants={variantItem}
      className="h-[120px] md:h-[150px] xl:h-[200px] bg-white rounded-lg"
    >
      <img src={img_url} alt="" className="w-full h-full object-contain p-5" />
    </motion.div>
  );
}
