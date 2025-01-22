"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import Button from "./Button";

export default function Navigator() {
  const pathname = usePathname(); // This will get the current path

  console.log(pathname);

  return (
    <nav className="w-full px-5 md:px-10 py-7 shadow-sm shadow-black fixed z-20">
      {/* NAVIGATOR - CONTAINER */}
      <div className=" flex justify-between items-center">
        {/* LOGO */}
        <Logo />

        <div className="lg:flex gap-10 items-center hidden">
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About Us</a>
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
        ></FontAwesomeIcon>
      </div>
    </nav>
  );
}
