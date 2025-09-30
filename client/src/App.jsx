import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGlobe,
  faLaptopCode,
  faArrowRight,
  faAt,
  faPhone,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faGithub,
  faFacebookF,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";
import FeatureCard from "./components/FeatureCard";
import SectionHeading from "./components/SectionHeading";
import CourseImageCard from "./components/CourseImageCard";
import NavigatorLink from "./components/NavigatorLink";

function App() {
  return (
    <>
      {/* HEADER */}
      <div className="text-white">
        {/* Navigator */}
        <nav className=" bg-red-primary h-[12vh] flex justify-center items-center sticky top-0">
          <div className="flex justify-between items-center container xl:px-0 px-10">
            {/* logo */}
            <div className="flex items-center gap-3 ">
              <div className="w-10 h-10 border-1 rounded-lg hidden"></div>
              <img src="/images/logo.png" alt="" className="w-10 h-10" />
              <h2>CourseMatch</h2>
            </div>

            <div className="hidden md:block">
              <ul className="flex gap-5 uppercase lg:flex ">
                <NavigatorLink link_path="Home" />
                <NavigatorLink link_path="Features" />
                <NavigatorLink link_path="Courses" />
                <NavigatorLink link_path="About us" />
                <NavigatorLink link_path="Recommendation" />
              </ul>
            </div>

            {/* hamburger */}
            <div className="md:hidden">
              <FontAwesomeIcon icon={faBars} className=" text-3xl" />
            </div>
          </div>
        </nav>

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
          <div className="flex flex-wrap gap-5 justify-center items-center">
            {/* card */}
            <FeatureCard />

            {/* card */}
            <FeatureCard />

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

            {/* card */}
            <FeatureCard />

            {/* card */}
            <FeatureCard />

            {/* card */}
            <FeatureCard />

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
            grid-cols-[repeat(2,100px)]      
            sm:grid-cols-[repeat(2,100px)]  
            md:grid-cols-[repeat(3,150px)]  
            lg:grid-cols-[repeat(4,150px)]  
            xl:grid-cols-[repeat(4,200px)]
          "
          >
            <CourseImageCard />
            <CourseImageCard />
            <CourseImageCard />
            <CourseImageCard />
            <CourseImageCard />
            <CourseImageCard />
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
                {/* card */}
                <div className=" gap-5 items-center hidden">
                  {/* icon */}
                  <div className="min-w-12 h-12 rounded-md  shadow-md flex justify-center items-center ">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="text-2xl text-blue-primary"
                    />
                  </div>

                  {/* paragraph */}
                  <div className="flex gap-2 items-center">
                    <a href="">linkedin.com/wilhelmus</a>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-xs rotate-325 text-blue-primary"
                    />
                  </div>
                </div>

                {/* card */}
                <div className=" gap-5 items-center hidden">
                  {/* icon */}
                  <div className="min-w-12 h-12 rounded-md  shadow-md flex justify-center items-center ">
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      className="text-2xl text-blue-primary"
                    />
                  </div>

                  {/* paragraph */}
                  <div className="flex gap-2 items-center">
                    <a href="">wilhelmus.vercel.app</a>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-xs rotate-325 text-blue-primary"
                    />
                  </div>
                </div>

                <div className="border-1 rounded-md py-3 px-3 lg:p-3 flex justify-between items-center md:w-9/12 border-black/10">
                  {/*  */}
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5 md:w-10 md:h-10 rounded-full  flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="text-xl"
                      />
                    </div>

                    <a href="">linkedin.com/wilhelmus</a>
                  </div>

                  {/*  */}
                  <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
                </div>

                <div className="border-1 rounded-md py-3 px-3 lg:p-3 flex justify-between items-center md:w-9/12 border-black/10">
                  {/*  */}
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5 md:w-10 md:h-10 rounded-full  flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="text-xl"
                      />
                    </div>

                    <a href="">wilhelmus.vercel.app</a>
                  </div>

                  {/*  */}
                  <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
                </div>
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
      <footer className="pt-30  bg-red-primary text-white border-t-10 border-red-500">
        <div className="container mx-auto flex justify-between flex-col lg:flex-row gap-10 xl:px-0 px-10 pb-30">
          {/* 1 */}
          <div className="lg:w-3/12 md:w-6/12">
            {/* logo */}
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo.png" alt="" className="w-10 h-10" />
              <h2>CourseMatch</h2>
            </div>

            <p className="text-white-secondary font-light leading-relaxed mb-16 ">
              CourseMatch: Personalized Course Prediction System is designed to
              help students at Western Mindanao State University discover their
              ideal academic paths with ease
            </p>
          </div>

          {/* 2 */}
          <div className="lg:w-8/12 flex flex-wrap  lg:justify-center xl:justify-end gap-15 lg:gap-10">
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
                    Western Mindanao State University, Zamboanga City,
                    Philippines
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
                <div className="flex items-center gap-3">
                  {/* icon */}
                  <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="text-xl text-blue-primary"
                    />
                  </div>
                </div>

                {/* card */}
                <div className="flex items-center gap-3">
                  {/* icon */}
                  <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      className="text-xl text-blue-primary"
                    />
                  </div>
                </div>

                {/* card */}
                <div className="flex items-center gap-3">
                  {/* icon */}
                  <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      className="text-xl text-blue-primary"
                    />
                  </div>
                </div>

                <div className="border-1 rounded-md py-3 px-3 lg:p-3 flex justify-between items-center border-black/10">
                  {/*  */}
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5 md:w-10 md:h-10 rounded-full  flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="text-xl"
                      />
                    </div>

                    <a href="">wilhelmus.vercel.app</a>
                  </div>

                  {/*  */}
                  <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
                </div>

                {/* card */}
                <div className="flex items-center gap-3">
                  {/* icon */}
                  <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-xl text-blue-primary"
                    />
                  </div>
                </div>
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
    </>
  );
}

export default App;
