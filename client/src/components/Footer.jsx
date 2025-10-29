import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faPhone,
  faMapPin,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

import BoxLinkItem from "./BoxLinkItem";

export default function Footer() {
  return (
    <footer className="pt-30  bg-red-primary text-white border-t-10 border-red-500">
      <div className="container mx-auto flex justify-between flex-col lg:flex-row gap-10 xl:px-0 px-10 pb-30">
        {/* 1 */}
        <div className="lg:w-3/12 md:w-6/12">
          {/* logo */}
          {/* logo */}
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/logo.png" alt="" className="w-10 h-10" />
            <h2 className="text-xl lobster">FindMyCollege</h2>
          </div>

          <p className="text-white-secondary font-light leading-relaxed mb-16 ">
            CourseMatch: Personalized Course Prediction System is designed to
            help students at Western Mindanao State University discover their
            ideal academic paths with ease.
          </p>
        </div>

        {/* 2 */}
        <div className="lg:w-8/12 md:w-6/12 flex flex-wrap lg:justify-around xl:justify-end gap-15 lg:gap-10">
          {/*  */}
          <div className="">
            <h2 className="uppercase text-2xl mb-5">Quick links</h2>
            <ul className="capitalize flex gap-3 flex-col">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>

          {/*  */}
          <div className="max-w-80">
            <h2 className="uppercase text-2xl mb-5">Contact information</h2>

            {/* parent */}
            <div className="flex flex-col gap-5 ">
              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
                  <FontAwesomeIcon
                    icon={faAt}
                    className="text-xl text-blue-primary"
                  />
                </div>
                {/* text */}
                <p>support@website.com</p>
              </div>

              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-xl text-blue-primary"
                  />
                </div>
                {/* text */}
                <p>(+63) 123-456-7890</p>
              </div>

              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="text-xl text-blue-primary"
                  />
                </div>
                {/* text */}
                <p className="w-10/12">
                  Western Mindanao State University, Zamboanga City, Philippines
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="">
            <h2 className="uppercase text-2xl mb-5">Social Links</h2>

            {/* parent */}
            <div className="flex flex-col gap-5">
              {/* card */}
              <div className=" items-center gap-3 hidden">
                {/* icon */}
                <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-xl text-blue-primary"
                  />
                </div>
              </div>

              <BoxLinkItem
                faIcon={faLinkedinIn}
                pathUrl="https://www.linkedin.com/in/wilhelmusolejr/"
                pathName="Wilhelmus Ole"
                className="bg-black/10"
              />

              <BoxLinkItem
                faIcon={faLaptopCode}
                pathUrl="https://wilhelmus.vercel.app"
                pathName="wihelmus.vercel.app"
                className="bg-black/10"
              />

              <BoxLinkItem
                faIcon={faGithubAlt}
                pathUrl="https://github.com/wilhelmusolejr"
                pathName="wilhelmusolejr"
                className="bg-black/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-primary py-7 text-center">
        <p className="w-10/12 m-auto">
          Discover your future today with coursematch.
        </p>
      </div>
    </footer>
  );
}
