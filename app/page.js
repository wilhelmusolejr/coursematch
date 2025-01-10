import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import brand icons

import cla from "../public/images/cla-1.png";
import aboutme from "../public/images/about-me.png";

import Logo from "./components/Logo";
import SectionHeading from "./components/SectionHeading";
import Button from "./components/Button";
import FeatureItem from "./components/FeatureItem";
import SectionContainer from "./components/SectionContainer";
import IconWithBg from "./components/IconWithBg";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <div className={` header min-h-screen flex flex-col `}>
        {/* NAVIGATOR */}
        <nav className="container px-5 py-7 shadow-sm shadow-black ">
          {/* NAVIGATOR - CONTAINER */}
          <div className="nav-container flex justify-between items-center">
            {/* LOGO */}
            <Logo />
            {/* BURGER */}
            <FontAwesomeIcon icon={faBars} className=" w-5"></FontAwesomeIcon>
          </div>
        </nav>

        {/* content */}
        <div className="header-container p-5 text-center flex-grow flex justify-center items-center">
          <div className="container py-10 px-5 rounded-xl">
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
              <Button>Get started</Button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <SectionContainer className={"text-black"}>
        {/* Heading */}
        <SectionHeading
          overlineText="Our main features"
          headingText="Our breakthrough features"
        />

        {/* list */}
        <div className="flex flex-wrap gap-10">
          {/* item */}
          <FeatureItem
            headingText="Course Prediction Engine"
            descriptionText="Accurately predicts the most suitable course for students based on
              their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and
              preferences)."
            icon={faBook}
          />

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
          <FeatureItem
            headingText="Course Prediction Engine"
            descriptionText="Accurately predicts the most suitable course for students based on
              their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and
              preferences)."
            icon={faBook}
          />
        </div>
      </SectionContainer>

      {/* COURSES */}
      <SectionContainer className={"secondary-color"}>
        {/* Heading */}
        <SectionHeading
          overlineText="Our main features"
          headingText="Our breakthrough features"
        />

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
      </SectionContainer>

      {/* ABOUT */}
      <SectionContainer className={"text-black"}>
        {/* Heading */}
        <SectionHeading
          overlineText="Who we are"
          headingText="What drives us"
        />

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
              <IconWithBg icon={faLinkedin} />
              <a href="https://linkedin.com/wilhelmus" target="blank">
                linkedin.com/wilhelmus
              </a>
            </div>

            {/* item */}
            <div className="flex items-center gap-3">
              <IconWithBg icon={faGlobe} />
              <a href="https://wilhelmus.vercel.app" target="blank">
                wilhelmus.vercel.app
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* BANNER */}
      <SectionContainer className={"banner"}>
        <div className="text-center">
          <h2 className="capitalize font-bold text-2xl mb-5">
            Are you ready to know your course?
          </h2>
          <Button color="primary-color">Get Started</Button>
        </div>
      </SectionContainer>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* FOOTER */}
      <footer className={` primary-color`}>
        <div className="container px-5 py-10 flex flex-col gap-10">
          {/*  */}
          <div className="flex gap-5 flex-wrap">
            {/* LOGO */}
            <Logo />

            <p className="font-light">
              CourseMatch: Personalized Course Prediction System is designed to
              help students at Western Mindanao State University discover their
              ideal academic paths with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="uppercase text-2xl font-semibold mb-5">
              Quick links
            </h3>
            <ul className="flex gap-3 flex-col tracking-wider font-light">
              <li>Home</li>
              <li>Features</li>
              <li>Courses</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="">
            <h3 className="uppercase text-2xl font-semibold mb-5">
              Contact Information
            </h3>
            <div className="flex flex-wrap gap-5">
              {/* item */}
              <div className="flex items-center gap-3">
                <IconWithBg icon={faLinkedin} />
                <p>linkedin.com/wilhelmus</p>
              </div>

              {/* item */}
              <div className="flex items-center gap-3">
                <IconWithBg icon={faLinkedin} />
                <p>wilhelmus.vercel.app</p>
              </div>
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
                <IconWithBg icon={faLinkedin} />
              </div>
              {/* item */}
              <div className="flex items-center gap-3">
                <IconWithBg icon={faLinkedin} />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 text-center secondary-color">
          <p>Discover your future today with CourseMatch!</p>
        </div>
      </footer>
    </>
  );
}
