import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDown,
  faBook,
  faGlobe,
  faRobot,
  faBookOpen,
  faMicrochip,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import brand icons

import ca from "../public/images/gallery/CA.jpeg";
import cais from "../public/images/gallery/cais.jpeg";
import ccje from "../public/images/gallery/ccje.jpeg";
import ccs from "../public/images/gallery/ccs.jpg";
import che from "../public/images/gallery/che.png";
import cla from "../public/images/gallery/cla.jpeg";
import cn from "../public/images/gallery/cn.png";
import coe from "../public/images/gallery/coe.png";
import cpads from "../public/images/gallery/cpads.jpeg";
import csm from "../public/images/gallery/csm.jpeg";
import csspe from "../public/images/gallery/csspe.jpeg";
import cswcd from "../public/images/gallery/cswcd.jpeg";
import cte from "../public/images/gallery/cte.jpeg";

import aboutme from "../public/images/about-me.png";

import Logo from "./components/Logo";
import SectionHeading from "./components/SectionHeading";
import Button from "./components/Button";
import FeatureItem from "./components/FeatureItem";
import SectionContainer from "./components/SectionContainer";
import IconWithBg from "./components/IconWithBg";
import ImageCard from "./components/ImageCard";
import Navigator from "./components/Navigator";
import Footer from "./components/sections/Footer";
import AnchorItem from "./components/AnchorItem";

export const metadata = {
  title: "Homepage | CourseMatch",
  description:
    "Discover your ideal academic path with CourseMatch, an intelligent system designed for Western Mindanao State University to predict the perfect course for you based on your unique answers and preferences.",
};

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <div className={`header min-h-screen flex flex-col `}>
        {/* NAVIGATOR */}
        <Navigator />

        {/* content */}
        <div className="w-full mt-24 px-5 md:px-10 py-10 flex-grow flex flex-col">
          <div className="header-container py-10 px-5 rounded-xl text-center flex-grow flex flex-col justify-center items-center ">
            {/* main heading */}
            <div className="main-heading mb-8 z-10">
              <h1 className="text-3xl md:text-5xl font-bold	tracking-wider">
                CourseMatch
              </h1>
              <p className="capitalize font-light text-sm">
                Personalized course prediction system
              </p>
            </div>

            <p className="text-left font-extralight lg:max-w-2xl lg:text-center mb-10 max-w-md z-10">
              Discover your ideal academic path with CourseMatch, an intelligent
              system designed for Western Mindanao State University to predict
              the perfect course for you based on your unique answers and
              preferences.
            </p>

            <div className="z-10">
              <Button type="link" href="/course-prediction">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <SectionContainer className={"text-black"} id="features">
        {/* Heading */}
        <SectionHeading
          overlineText="Our main features"
          headingText="Our breakthrough features"
        />

        {/* list */}
        <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* {item} */}
          <FeatureItem
            headingText="Downloadable Results"
            descriptionText="Allows users to download their course prediction results in PDF format for future reference."
            icon={faCircleDown}
          />

          {/* {item} */}
          <div className="flex flex-col  mx-auto  gap-3 secondary-color p-5 rounded-2xl text-white">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faBookOpen}
                className=" w-4 secondary-text-color"
              ></FontAwesomeIcon>
            </div>
            <h3 className="capitalize text-xl md:text-2xl font-medium">
              Course Prediction Engine
            </h3>
            <p className="font-extralight">
              Accurately predicts the most suitable course for students based on
              their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and
              preferences).
            </p>
          </div>

          <FeatureItem
            headingText="AI-Powered Course Insights"
            descriptionText="Uses machine learning algorithms to analyze trends in student choices."
            icon={faMicrochip}
          />
          <FeatureItem
            headingText="Free & Open for Everyone"
            descriptionText="Designed to be beginner-friendly and straightforward, making it accessible to all students."
            icon={faStar}
          />
          <FeatureItem
            headingText="Real-Time Prediction"
            descriptionText="Allows students to update their information and receive real-time refined predictions based on new data."
            icon={faRobot}
          />
        </div>
      </SectionContainer>

      {/* COURSES */}
      <div
        className="secondary-color courses border-blue-500 border-y-8"
        id="courses"
      >
        <SectionContainer>
          {/* Heading */}
          <SectionHeading
            overlineText="Our main features"
            headingText="Our breakthrough features"
          />

          {/* list */}
          <div className=" max-w-5xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ImageCard src={ca} />
            <ImageCard src={cais} />
            <ImageCard src={ccje} />
            <ImageCard src={ccs} />
            <ImageCard src={che} />
            <ImageCard src={cla} />
            <ImageCard src={cn} />
            <ImageCard src={coe} />
            <ImageCard src={cpads} />
            <ImageCard src={csm} />
            <ImageCard src={csspe} />
            <ImageCard src={cswcd} />
            <ImageCard src={cte} />
          </div>
        </SectionContainer>
      </div>

      {/* ABOUT */}
      <SectionContainer className={"text-black"} id="about-us">
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
            <h3 className="capitalize text-xl md:text-2xl font-medium">
              About me
            </h3>
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
            <div className="flex flex-col gap-5 py-5 uppercase">
              {/* item */}
              <AnchorItem
                icon={faLinkedin}
                link={"https://www.linkedin.com/in/wilhelmusolejr/"}
                title="linkedin.com"
              />

              {/* item */}
              <AnchorItem
                icon={faGlobe}
                link={"https://wilhelmus.vercel.app?ref=coursematch"}
                title="wilhelmus.vercel.app"
              />
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
          <h2 className="capitalize font-bold text-2xl lg:text-4xl md:text-3xl mb-5 w-11/12 mx-auto">
            Are you ready to know your course?
          </h2>
          <Button color="primary-color">Get Started</Button>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
}
