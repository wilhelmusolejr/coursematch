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
import ImageCard from "./components/ImageCard";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <div className={`header min-h-screen flex flex-col `}>
        {/* NAVIGATOR */}
        <nav className="w-full px-5 md:px-10 py-7 shadow-sm shadow-black ">
          {/* NAVIGATOR - CONTAINER */}
          <div className=" flex justify-between items-center">
            {/* LOGO */}
            <Logo />

            <div className="lg:flex gap-10 items-center hidden">
              <ul className="flex gap-5">
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
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Recommendation</a>
                </li>
              </ul>

              <Button>Account</Button>
            </div>
            {/* BURGER */}
            <FontAwesomeIcon
              icon={faBars}
              className=" w-5 lg:hidden"
            ></FontAwesomeIcon>
          </div>
        </nav>

        {/* content */}
        <div className="w-full px-5 md:px-10 py-10 flex-grow flex flex-col">
          <div className="header-container py-10 px-5 rounded-xl text-center flex-grow flex flex-col justify-center items-center ">
            {/* main heading */}
            <div className="main-heading mb-8 z-10">
              <h1 className="text-3xl lg:text-5xl font-bold	tracking-wider">
                CourseMatch
              </h1>
              <p className="capitalize font-light text-sm">
                Personalized course prediction system
              </p>
            </div>

            <p className="text-left font-extralight lg:text-lg lg:max-w-2xl lg:text-center mb-10 max-w-md z-10">
              Discover your ideal academic path with CourseMatch, an intelligent
              system designed for Western Mindanao State University to predict
              the perfect course for you based on your unique answers and
              preferences.
            </p>

            <div className="z-10">
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
        <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            headingText="Course Prediction Engine"
            descriptionText="Accurately predicts the most suitable course for students based on their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and preferences)."
            icon={faBook}
          />

          {/* {item} */}
          <div className="flex flex-col  mx-auto  gap-3 secondary-color p-5 rounded-2xl text-white">
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

          <FeatureItem
            headingText="Personalized Recommendations"
            descriptionText="Accurately predicts the most suitable course for students based on their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and preferences)."
            icon={faBook}
          />
          <FeatureItem
            headingText="Course Prediction Engine"
            descriptionText="Accurately predicts the most suitable course for students based on their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and preferences)."
            icon={faBook}
          />
          <FeatureItem
            headingText="Downloadable Results"
            descriptionText="Accurately predicts the most suitable course for students based on their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and preferences)."
            icon={faBook}
          />
          <FeatureItem
            headingText="Personalized Recommendations"
            descriptionText="Accurately predicts the most suitable course for students based on their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and preferences)."
            icon={faBook}
          />
        </div>
      </SectionContainer>

      {/* COURSES */}
      <div className="secondary-color">
        <SectionContainer>
          {/* Heading */}
          <SectionHeading
            overlineText="Our main features"
            headingText="Our breakthrough features"
          />

          {/* list */}
          <div className=" max-w-5xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ImageCard src={cla} />
            <ImageCard src={cla} />
            <ImageCard src={cla} />
            <ImageCard src={cla} />
            <ImageCard src={cla} />
          </div>
        </SectionContainer>
      </div>

      {/* ABOUT */}
      <SectionContainer className={"text-black"}>
        {/* Heading */}
        <SectionHeading
          overlineText="Who we are"
          headingText="What drives us"
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10">
          <div className="max-w-80 ">
            <Image src={aboutme} alt="My Image" className="rounded-lg" />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="capitalize text-xl font-medium">About me</h3>
            <p className="font-light leading-relaxed  ">
              Wilhelmus is a passionate full-stack web developer and designer
              with a background in Computer Science. With expertise in Laravel,
              the MERN stack, and a knack for creating intuitive user
              interfaces, Wilhelmus brings innovative ideas to life. Known for
              their dedication to crafting efficient and impactful digital
              solutions, they thrive on building projects that solve real-world
              problems, including personalized systems like course prediction
              platforms.
            </p>

            {/* LIST */}
            <div className="flex flex-col gap-5 py-5">
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
        </div>
      </SectionContainer>

      {/* BANNER */}
      <SectionContainer
        className={
          "banner md:w-11/12 h-80 m-auto md:rounded-3xl flex justify-center items-center"
        }
      >
        <div className="text-center relative">
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
      <footer>
        <div className="primary-color">
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

                  {/* LIST */}
                  <div className="flex flex-col gap-5">
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
