import React from "react";

import { motion } from "framer-motion";

export default function CourseImageCard({ img_url = "", variantItem }) {
  return (
    <motion.div
      variants={variantItem}
      className="min-h-[120px] md:min-h-[150px] xl:min-h-[200px] bg-white rounded-lg"
    >
      <img src={img_url} alt="" className="w-full h-full object-contain p-5" />
    </motion.div>
  );
}
