"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import Button from "./Button";
import { useState } from "react";

export default function Navigator() {
  const pathname = usePathname(); // This will get the current path

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-5 md:px-10 py-7 shadow-sm shadow-black fixed z-20">
      {/* NAVIGATOR - CONTAINER */}
      <div className="flex justify-between items-center ">
        {/* LOGO */}
        <Logo />

        <div className="lg:flex gap-10 items-center hidden">
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href={`${pathname === "/" ? "" : "/"}#features`}>
                Features
              </Link>
            </li>
            <li>
              <Link href={`${pathname === "/" ? "" : "/"}#courses`}>
                Courses
              </Link>
            </li>
            <li>
              <Link href={`${pathname === "/" ? "" : "/"}#about-us`}>
                About Us
              </Link>
            </li>
          </ul>

          <Button
            type="link"
            href="/course-prediction"
            onClick={function () {
              if (pathname === "/course-prediction") {
                window.location.reload(); // Trigger page reload
              }
            }}
          >
            Recommendation
          </Button>
        </div>

        {/* BURGER */}
        <FontAwesomeIcon
          icon={faBars}
          className=" w-5 lg:hidden"
          onClick={toggleMenu}
        ></FontAwesomeIcon>
      </div>

      {/* NAVIGATOR - CONTAINER - MOBILE */}
      {isOpen && (
        <div className="fixed inset-0 bg-red-700 flex items-center justify-center flex-col">
          {/* LOGO */}
          <div className="flex items-center justify-center">
            <Logo />
          </div>

          <div className="lg:hidden flex flex-col items-center gap-10 pt-10 text-center">
            <ul className="flex flex-col gap-5" onClick={toggleMenu}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={`${pathname === "/" ? "" : "/"}#features`}>
                  Features
                </Link>
              </li>
              <li>
                <Link href={`${pathname === "/" ? "" : "/"}#courses`}>
                  Courses
                </Link>
              </li>
              <li>
                <Link href={`${pathname === "/" ? "" : "/"}#about-us`}>
                  About Us
                </Link>
              </li>
            </ul>

            <Button
              type="link"
              href="/course-prediction"
              onClick={function () {
                if (pathname === "/course-prediction") {
                  window.location.reload(); // Trigger page reload
                }
              }}
            >
              Recommendation
            </Button>
          </div>

          {/* BURGER */}
          <FontAwesomeIcon
            icon={faClose}
            className=" w-5 lg:hidden absolute top-5 right-5"
            onClick={toggleMenu}
          ></FontAwesomeIcon>
        </div>
      )}
    </nav>
  );
}
