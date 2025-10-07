import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faBrain,
  faFileDownload,
  faNetworkWired,
  faChartLine,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "../App.css";

import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import CourseImageCard from "../components/CourseImageCard";
import BoxLinkItem from "../components/BoxLinkItem";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

import { getAllCourse } from "../api/getAllCourse";
import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState({ colleges: {} });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getAllCourse();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  let features = [
    {
      heading: "Course Prediction Engine",
      description:
        "Accurately recommends the most suitable college course based on your CET score, GPA, and senior high school strand — ensuring a data-driven and personalized guidance experience.",
      icon: faBrain,
    },
    {
      heading: "Downloadable Results",
      description:
        "Instantly download your prediction results as a report for easy sharing with parents, teachers, or guidance counselors — helping you make informed academic decisions anytime, anywhere.",
      icon: faFileDownload,
    },
    {
      heading: "Multi-Model Prediction System",
      description:
        "Utilizes three specialized machine learning models to cover all scenarios — aligned, not aligned, and mixed — ensuring fair and accurate predictions regardless of your academic background.",
      icon: faNetworkWired,
    },
    {
      heading: "High-Accuracy Predictions",
      description:
        "Built with advanced machine learning algorithms, each model achieves up to 80% accuracy, providing reliable results that guide you confidently toward your ideal college path.",
      icon: faChartLine,
    },
    {
      heading: "Smart Career Guidance",
      description:
        "Beyond predictions, our system offers insights on why certain courses fit your strengths — helping you explore future career paths aligned with your interests and academic performance.",
      icon: faCompass,
    },
  ];

  return (
    <>
      {/* HEADER */}
      <div className="text-white">
        {/* Navigator */}
        <Navigator />

        {/* Content */}
        <div className="container mx-auto flex justify-center items-center w-full xl:px-0 px-10 h-[85vh] py-10">
          <div className="w-full h-full px-5 lg:px-0 header-background py-20 md:pt-30 rounded-lg md:text-center">
            {/* 1 */}
            <div className="flex  flex-col gap-2 mb-10 ">
              <h2 className="text-4xl font-bold">CourseMatch</h2>
              <p className="font-medium text-xl tracking-wide">
                Personalized course prediction system
              </p>
            </div>

            {/* 2 */}
            <p className="mb-16 leading-relaxed font-extralight lg:w-5/12 md:w-10/12 m-auto ">
              Discover your ideal academic path with CourseMatch, an intelligent
              system designed for Western Mindanao State University to predict
              the perfect course for you based on your unique answers and
              preferences.
            </p>

            {/* button */}
            <div className="flex md:items-center md:justify-center">
              <div className="rounded-3xl bg-blue-800 font-medium uppercase px-8 py-3 w-fit">
                get started
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="bg-white-primary py-30 px-10">
        <div className="container mx-auto">
          {/* heading */}
          <SectionHeading
            tagline="Our main features"
            heading="Our breakthrough features"
          />

          {/* parent */}
          <div className="flex flex-wrap gap-5 justify-center ">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                heading={feature.heading}
                icon={feature.icon}
                description={feature.description}
              />
            ))}

            {/* highlight */}
            {/* card */}
            <div className="hidden bg-blue-900 max-w-80 text-white rounded-xl p-5 py-15 shadow-lg  flex-col ">
              {/* icon */}
              <div className="h-12 w-12 bg-blue-100 rounded-full mb-10"></div>

              {/* heading */}
              <h3 className="capitalize mb-5 text-white-secondary font-semibold text-2xl w-10/12">
                Course prediction engine
              </h3>

              {/* paragraph */}
              <p className="text-white-tertiary font-light">
                Accurately predicts the most suitable course for students based
                on their inputs (e.g., GPA, Cumulative Exam Test [CET] scores,
                and preferences).
              </p>
            </div>

            <div className="bg-white hidden flex opacity-0 w-75 md:w-68 rounded-xl p-5 py-7 shadow-lg  flex-col border-1 border-black/30"></div>
          </div>
        </div>
      </div>

      {/* album of courses */}
      <div className="py-30 px-10 courses-background">
        <div className="container mx-auto">
          {/* heading */}
          <div className="capitalize mb-20 flex justify-center items-center flex-col gap-5">
            <div className="rounded-3xl bg-white text-red-500 font-medium  px-8 py-3 w-fit">
              Our main courses
            </div>
            <h2 className="font-bold text-white text-3xl text-center text-secondary">
              Our breakthrough courses
            </h2>
          </div>

          <div
            className="
            grid 
            gap-5 
            justify-center
            grid-cols-[repeat(2,120px)]      
            sm:grid-cols-[repeat(2,120px)]  
            md:grid-cols-[repeat(3,150px)]  
            lg:grid-cols-[repeat(4,150px)]  
            xl:grid-cols-[repeat(4,200px)]
          "
          >
            {Object.entries(courses.colleges).map(([key, value]) => (
              <CourseImageCard key={key} img_url={value["image"]} />
            ))}
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="py-30 lg:px-10">
        <div className="container mx-auto">
          {/* heading */}
          <SectionHeading tagline="About us" heading="What drives us" />

          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center ">
            {/* image */}
            <div className="bg-gray-200 py-10 mb-15 lg:rounded-lg lg:mb-0 lg:w-5/12 xl:w-4/12 ">
              <div className="h-[50vh] flex items-center justify-center px-10 rounded-lg overflow-hidden ">
                <img
                  src="/images/about_me.png"
                  alt=""
                  className="rounded-lg h-full object-contain object-center"
                />
              </div>
            </div>

            <div className="lg:w-6/12 flex flex-col gap-10 items-center justify-center  ">
              {/* about me */}
              <div className="px-10 mb-10 md:w-10/12 lg:w-full md:m-auto lg:m-0 ">
                <h3 className="text-2xl mb-2 font-semibold ">About me</h3>
                <p className="text-secondary font-light leading-relaxed ">
                  Wilhelmus is a passionate full-stack web developer and
                  designer with a background in Computer Science. With expertise
                  in Laravel, the MERN stack, and a knack for creating intuitive
                  user interfaces, Wilhelmus brings innovative ideas to life.
                  Known for their dedication to crafting efficient and impactful
                  digital solutions, they thrive on building projects that solve
                  real-world problems, including personalized systems like
                  course prediction platforms.
                </p>
              </div>

              {/* parent */}
              <div className="px-10 w-full flex gap-5 md:w-10/12 lg:w-full lg:m-0 md:m-auto flex-col uppercase">
                {/*  */}
                <BoxLinkItem
                  faIcon={faLinkedinIn}
                  pathUrl="linkedin.com/wilhelmus"
                  pathName="linkedin.com/wilhelmus"
                  className="md:w-10/12"
                />

                {/*  */}
                <BoxLinkItem
                  faIcon={faLaptopCode}
                  pathUrl="linkedin.com/wilhelmus"
                  pathName="wilhelmus.vercel.app"
                  className="md:w-10/12 xl:w-9/12"
                />
              </div>
            </div>
          </div>

          <div className="hidden">
            <p className="text-secondary font-light leading-relaxed text-center w-8/12 mx-auto">
              At CourseMatch, we are passionate about empowering students to
              discover their true potential and make informed decisions about
              their academic journey. Our mission is to provide a personalized
              course prediction system that leverages advanced algorithms and
              data-driven insights to help students find the perfect course that
              aligns with their skills, interests, and career aspirations. We
              believe that every student deserves the opportunity to thrive in
              an academic environment that suits them best, and we are committed
              to making that a reality through our innovative platform.
            </p>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className="container banner-background py-20 md:py-20 mb-30 md:mt-20 md:my-50 md:w-10/12 lg:w-11/12 m-auto md:rounded-xl text-white bg-blue-200 text-center flex flex-col justify-center items-center gap-5 px-10">
        {/* heading */}
        <h2 className="font-bold text-3xl md:w-6/12">
          Ready to find your perfect course?
        </h2>

        {/* button */}
        <div className="rounded-3xl bg-red-800 font-medium uppercase px-8 py-3 w-fit">
          get started
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
