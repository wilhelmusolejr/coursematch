"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ overlineText, headingText }) {
  return (
    <motion.div
      className="heading text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="inline-block px-6 py-3 rounded-3xl capitalize mb-3 primary-color-light primary-text-color"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {overlineText}
      </motion.div>
      <motion.h2
        className="capitalize font-bold text-2xl md:text-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {headingText}
      </motion.h2>
    </motion.div>
  );
}
