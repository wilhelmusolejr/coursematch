import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import NavigatorLink from "./NavigatorLink";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Navigator() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {/* md size navigator  */}
      <nav className="w-full bg-red-primary z-50 h-[12vh] flex justify-center items-center fixed top-0 transition-all duration-300">
        <div className="flex justify-between items-center container xl:px-0 px-10">
          {/* logo */}
          <a href="/" className="flex items-center gap-3 ">
            <div className="w-10 h-10 border-1 rounded-lg hidden"></div>
            <img src="/images/logo.png" alt="" className="w-10 h-10" />
            <h2>FindMyCollege</h2>
          </a>

          <div className="hidden md:block">
            <ul className="flex gap-5 uppercase lg:flex ">
              <NavigatorLink link_path="/" link_name="Home" />
              <NavigatorLink link_path="#Features" link_name="Features" />
              <NavigatorLink link_path="#Courses" link_name="Courses" />
              <NavigatorLink link_path="#About" link_name="About us" />
              <NavigatorLink
                link_path="Recommendation"
                link_name="Recommendation"
              />
            </ul>
          </div>

          {/* hamburger */}
          <div className="md:hidden" onClick={() => setOpenNav(true)}>
            <FontAwesomeIcon icon={faBars} className=" text-3xl" />
          </div>
        </div>
      </nav>

      {/* FLOATING */}
      <AnimatePresence>
        {openNav && (
          <div
            key="nav-overlay"
            initial={{ opacity: 0, y: 30 }} // 👈 start from slightly below and transparent
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }} // 👈 when closing, move it down again
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-red-primary fixed inset-0 z-[100] p-10 flex justify-center items-center"
          >
            <div className="flex flex-col gap-10">
              {/* logo */}
              <a href="/" className=" hidden items-center gap-3 ">
                <div className="w-10 h-10 border-1 rounded-lg hidden"></div>
                <img src="/images/logo.png" alt="" className="w-10 h-10" />
                <h2>CourseMatch</h2>
              </a>

              <div className="text-center">
                <ul className="flex flex-col gap-5 uppercase  ">
                  <NavigatorLink link_path="/" link_name="Home" />
                  <NavigatorLink link_path="#Features" link_name="Features" />
                  <NavigatorLink link_path="#Courses" link_name="Courses" />
                  <NavigatorLink link_path="#About" link_name="About us" />
                  <NavigatorLink
                    link_path="Recommendation"
                    link_name="Recommendation"
                  />
                </ul>
              </div>

              {/* hamburger */}
              <div
                className="absolute top-10 right-10 "
                onClick={() => {
                  setOpenNav(false);
                }}
              >
                <FontAwesomeIcon icon={faClose} className=" text-3xl" />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
