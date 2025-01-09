import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import brand icons

import cla from "../public/images/cla-1.png";
import aboutme from "../public/images/about-me.png";

import { Coiny, Poppins } from "next/font/google";

const coiny = Coiny({
  subsets: ["latin"], // Or other subsets as needed
  weight: "400", // Or other weights like '700', 'regular', etc.
  display: "swap", // Important for performance
});

const poppins = Poppins({
  subsets: ["latin"], // Or other subsets as needed
  weight: "400", // Or other weights like '700', 'regular', etc.
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // Important for performance
});

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <div
        className={`${poppins.className} header min-h-screen flex flex-col `}
      >
        {/* NAVIGATOR */}
        <nav className="container p-5 shadow-sm shadow-black ">
          {/* NAVIGATOR - CONTAINER */}
          <div className="nav-container flex justify-between items-center">
            {/* LOGO */}
            <div className="logo ">
              <h1 className={`${coiny.className} text-lg tracking-wider`}>
                CourseMatch
              </h1>
            </div>
            {/* BURGER */}
            <FontAwesomeIcon icon={faBars} className=" w-8"></FontAwesomeIcon>
          </div>
        </nav>

        {/* content */}
        <div className="header-container p-5 text-center flex-grow flex justify-center items-center">
          <div className="bg-black py-10 px-5 rounded-xl">
            {/* main heading */}
            <div className="main-heading mb-8">
              <h1 className="text-3xl font-bold	tracking-wider">CourseMatch</h1>
              <p className="capitalize font-light text-sm">
                Personalized course prediction system
              </p>
            </div>

            <p className="text-left font-extralight mb-10">
              Discover your ideal academic path with CourseMatch, an intelligent
              system designed for Western Mindanao State University to predict
              the perfect course for you based on your unique answers and
              preferences.
            </p>

            <div className="">
              <div className="inline-block px-6 py-3 rounded-3xl font-bold uppercase tracking-wider secondary-color">
                Get started
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className={`${poppins.className} container px-5 py-10 text-black`}>
        {/* Heading */}
        <div className="heading text-center my-10">
          <div className="inline-block px-6 py-3 rounded-3xl capitalize mb-3 primary-color-light primary-text-color">
            Our main features
          </div>
          <h2 className="capitalize  font-bold text-2xl">
            Our breakthrough features
          </h2>
        </div>

        {/* list */}
        <div className="flex flex-wrap gap-10">
          {/* item */}
          <div className="flex flex-col gap-3">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faBook}
                className=" w-4 secondary-text-color"
              ></FontAwesomeIcon>
            </div>
            <h3 className="capitalize text-xl font-medium">
              Course Prediction Engine
            </h3>
            <p className="font-light">
              Accurately predicts the most suitable course for students based on
              their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and
              preferences).
            </p>
          </div>

          {/* item */}
          <div className="flex flex-col gap-3 secondary-color p-5 rounded-2xl text-white">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faBook}
                className=" w-4 secondary-text-color"
              ></FontAwesomeIcon>
            </div>
            <h3 className="capitalize text-xl font-medium">
              Downloadable Results{" "}
            </h3>
            <p className="font-extralight">
              Accurately predicts the most suitable course for students based on
              their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and
              preferences).
            </p>
          </div>

          {/* item */}
          <div className="flex flex-col gap-3">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faBook}
                className=" w-4 secondary-text-color"
              ></FontAwesomeIcon>
            </div>
            <h3 className="capitalize text-xl font-medium">
              Course Prediction Engine
            </h3>
            <p className="font-light">
              Accurately predicts the most suitable course for students based on
              their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and
              preferences).
            </p>
          </div>
        </div>
      </div>

      {/* COURSES */}
      <div
        className={`${poppins.className} container px-5 py-10 secondary-color`}
      >
        {/* Heading */}
        <div className="heading text-center my-10">
          <div className="inline-block px-6 py-3 rounded-3xl capitalize mb-3 primary-color-light primary-text-color">
            Our main features
          </div>
          <h2 className="capitalize  font-bold text-2xl">
            Our breakthrough features
          </h2>
        </div>

        {/* list */}
        <div className="flex flex-wrap  gap-10 items-center justify-center">
          {/* item */}
          <div className="bg-white p-5 rounded-xl w-52 h-52 flex items-center justify-center">
            <Image src={cla} alt="My Image" />
          </div>

          {/* item */}
          <div className="bg-white p-5 rounded-xl w-52 h-52 flex items-center justify-center">
            <Image src={cla} alt="My Image" />
          </div>

          {/* item */}
          <div className="bg-white p-5 rounded-xl w-52 h-52 flex items-center justify-center">
            <Image src={cla} alt="My Image" />
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className={`${poppins.className} container px-5 py-10 text-black`}>
        {/* Heading */}
        <div className="heading text-center my-10">
          <div className="inline-block px-6 py-3 rounded-3xl capitalize mb-3 primary-color-light primary-text-color">
            Who we are
          </div>
          <h2 className="capitalize  font-bold text-2xl">What Drives Us</h2>
        </div>

        <div className="flex flex-col gap-10">
          <div className="">
            <Image src={aboutme} alt="My Image" className="rounded-lg" />
          </div>

          <div className="">
            <h3 className="capitalize text-xl font-medium">About me</h3>
            <p className="font-light	leading-relaxed		">
              Wilhelmus is a passionate full-stack web developer and designer
              with a background in Computer Science. With expertise in Laravel,
              the MERN stack, and a knack for creating intuitive user
              interfaces, Wilhelmus brings innovative ideas to life. Known for
              their dedication to crafting efficient and impactful digital
              solutions, they thrive on building projects that solve real-world
              problems, including personalized systems like course prediction
              platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {/* item */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-gray-200 p-3 secondary-text-color">
                <FontAwesomeIcon icon={faLinkedin} /> {/* GitHub */}
              </div>
              <p>linkedin.com/wilhelmus</p>
            </div>

            {/* item */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-gray-200 p-3 secondary-text-color">
                <FontAwesomeIcon icon={faGlobe} /> {/* GitHub */}
              </div>
              <p>wilhelmus.vercel.app</p>
            </div>
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div
        className={`${poppins.className} container px-5 py-20 secondary-color`}
      >
        <div className="text-center">
          <h2 className="capitalize font-bold text-2xl mb-5">
            Are you ready to know your course?
          </h2>
          <div className="inline-block px-6 py-3 rounded-3xl font-bold uppercase tracking-wider primary-color">
            Get started
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
