import React from "react";
import SectionContainer from "../SectionContainer";
import Logo from "../Logo";
import IconWithBg from "../IconWithBg";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import AnchorItem from "../AnchorItem";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* FOOTER */}
      <footer>
        <div className="primary-color border-red-500 border-t-8	">
          <SectionContainer>
            <div className="container flex flex-wrap gap-16">
              {/* ITEM 1 */}
              <div className="flex gap-5 flex-col w-full xl:w-auto">
                {/* LOGO */}
                <Logo />

                <p className="font-light max-w-md">
                  CourseMatch: Personalized Course Prediction System is designed
                  to help students at Western Mindanao State University discover
                  their ideal academic paths with ease.
                </p>
              </div>

              <div className="flex flex-grow gap-16 2xl:justify-end flex-wrap">
                {/* Quick Links */}
                <div className="">
                  <h3 className="uppercase text-2xl font-semibold mb-5">
                    Quick links
                  </h3>

                  {/* LIST */}
                  <ul className="flex gap-3 flex-col tracking-wider font-light">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="#features">Features</Link>
                    </li>
                    <li>
                      <Link href="#courses">Courses</Link>
                    </li>
                    <li>
                      <Link href="#about-us">About Us</Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="hidden">
                  <h3 className="uppercase text-2xl font-semibold mb-5">
                    Contact Information
                  </h3>

                  {/* LIST */}
                  <div className="flex flex-col gap-5 uppercase">
                    {/* item */}
                    <AnchorItem
                      icon={faLinkedin}
                      link={"https://www.linkedin.com/in/wilhelmusolejr/"}
                      title="linkedin.com/in/wilhelmusolejr"
                    />

                    {/* item */}
                    <AnchorItem
                      icon={faGlobe}
                      link={"https://wilhelmus.vercel.app"}
                      title="wilhelmus.vercel.app"
                    />
                  </div>
                </div>

                {/* Social Links */}
                <div className="">
                  <h3 className="uppercase text-2xl font-semibold mb-5">
                    Social Links
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {/* item */}
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/wilhelmusolejr/"
                        className="transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <IconWithBg icon={faLinkedin} />
                      </a>
                    </div>
                    {/* item */}
                    <div className="flex items-center gap-3">
                      <a
                        href="https://wilhelmus.vercel.app"
                        className="transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <IconWithBg icon={faGlobe} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </div>
        <div className="py-10 text-center darker-secondary-color">
          <p>Discover your future today with CourseMatch!</p>
        </div>
      </footer>
    </>
  );
}
