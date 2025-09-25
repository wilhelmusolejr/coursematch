import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import FeatureCard from "./components/FeatureCard";
import SectionHeading from "./components/SectionHeading";

function App() {
  return (
    <>
      {/* HEADER */}
      <div className="text-white">
        {/* Navigator */}
        <nav className="bg-red-primary container flex justify-between h-[15vh] items-center px-10 ">
          {/* logo */}
          <div className="flex items-center gap-3 ">
            <div className="w-10 h-10 border-1 rounded-lg"></div>
            <h2>CourseMatch</h2>
          </div>

          {/* hamburger */}
          <div className="">
            <FontAwesomeIcon icon={faBars} className=" text-3xl" />
          </div>
        </nav>

        {/* Content */}
        <div className=" flex justify-center items-center h-[80vh] p-10">
          <div className="px-5 py-20 bg-black/75 h-full rounded-lg">
            {/* 1 */}
            <div className="flex  flex-col gap-2 mb-10">
              <h2 className="text-4xl font-bold">CourseMatch</h2>
              <p className="font-semibold tracking-wide">
                Personalized course prediction system
              </p>
            </div>

            {/* 2 */}
            <p className="mb-16 leading-relaxed font-extralight">
              Discover your ideal academic path with CourseMatch, an intelligent
              system designed for Western Mindanao State University to predict
              the perfect course for you based on your unique answers and
              preferences.
            </p>

            {/* button */}
            <div className="flex ">
              <div className="rounded-3xl bg-blue-800 font-medium uppercase px-8 py-3 w-fit">
                get started
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="bg-white-primary py-30 px-10">
        {/* heading */}
        <SectionHeading
          tagline="Our main features"
          heading="Our breakthrough features"
        />

        {/* parent */}
        <div className="flex flex-col gap-10">
          {/* card */}
          <FeatureCard />

          {/* card */}
          <FeatureCard />

          {/* highlight */}
          {/* card */}
          <div className="bg-blue-900 text-white rounded-xl p-5 py-15 shadow-lg flex flex-col ">
            {/* icon */}
            <div className="h-12 w-12 bg-blue-100 rounded-full mb-10"></div>

            {/* heading */}
            <h3 className="capitalize mb-5 text-white-secondary font-semibold text-2xl w-10/12">
              Course prediction engine
            </h3>

            {/* paragraph */}
            <p className="text-white-tertiary font-light">
              Accurately predicts the most suitable course for students based on
              their inputs (e.g., GPA, Cumulative Exam Test [CET] scores, and
              preferences).
            </p>
          </div>

          {/* card */}
          <FeatureCard />

          {/* card */}
          <FeatureCard />
        </div>
      </div>

      {/* album of courses */}
      <div className="py-30 px-10 bg-blue-900">
        {/* heading */}
        <div className="capitalize mb-20 flex justify-center items-center flex-col gap-5">
          <div className="rounded-3xl bg-white text-red-500 font-medium  px-8 py-3 w-fit">
            Our main courses
          </div>
          <h2 className="font-bold text-white text-3xl text-center text-secondary">
            Our breakthrough courses
          </h2>
        </div>

        {/* parent */}
        <div className="flex gap-5 items-center justify-center flex-wrap">
          {/* card */}
          <div className="w-[100px] h-[100px] bg-white rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-white rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-white rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-white rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-white rounded-lg"></div>
          <div className="w-[100px] h-[100px] bg-white rounded-lg"></div>
        </div>
      </div>

      {/* about us */}
      <div className="py-30 ">
        {/* heading */}
        <SectionHeading tagline="About us" heading="What drives us" />

        {/* image */}
        <div className="bg-gray-200 py-10 mb-15">
          <div className="bg-slate-900 h-[50vh]"></div>
        </div>

        <div className="px-10 mb-10">
          <h3 className="text-2xl mb-2 font-semibold ">About me</h3>
          <p>
            Wilhelmus is a passionate full-stack web developer and designer with
            a background in Computer Science. With expertise in Laravel, the
            MERN stack, and a knack for creating intuitive user interfaces,
            Wilhelmus brings innovative ideas to life. Known for their
            dedication to crafting efficient and impactful digital solutions,
            they thrive on building projects that solve real-world problems,
            including personalized systems like course prediction platforms.
          </p>
        </div>

        <div className="px-10 flex  gap-5 flex-col">
          {/* card */}
          <div className="flex gap-5 items-center">
            {/* icon */}
            <div className="w-10 h-10 rounded-md border-black border-1"></div>
            {/* paragraph */}
            <div className="">linkedin.com/wilhelmus</div>
          </div>

          {/* card */}
          <div className="flex gap-5 items-center">
            {/* icon */}
            <div className="w-10 h-10 rounded-md border-black border-1"></div>
            {/* paragraph */}
            <div className="">wilhelmus.vercel.app</div>
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
            believe that every student deserves the opportunity to thrive in an
            academic environment that suits them best, and we are committed to
            making that a reality through our innovative platform.
          </p>
        </div>
      </div>

      {/* banner */}
      <div className="py-30 mb-30 text-white bg-blue-200 text-center flex flex-col justify-center items-center gap-5 px-10">
        {/* heading */}
        <h2 className="font-bold text-3xl ">
          Ready to find your perfect course?
        </h2>

        {/* button */}
        <div className="rounded-3xl bg-red-800 font-medium uppercase px-8 py-3 w-fit">
          get started
        </div>
      </div>

      {/* footer */}
      <footer className="pt-30  bg-red-primary text-white">
        <div className="px-10 pb-30">
          {/* logo */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 border-1 rounded-lg"></div>
            <h2>CourseMatch</h2>
          </div>

          <p className="text-white-secondary font-light leading-relaxed mb-10">
            CourseMatch: Personalized Course Prediction System is designed to
            help students at Western Mindanao State University discover their
            ideal academic paths with ease
          </p>

          {/*  */}
          <div className="mb-10">
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
          <div className="mb-10">
            <h2 className="uppercase text-2xl mb-5">Contact information</h2>

            {/* parent */}
            <div className="flex flex-col gap-5">
              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 rounded-md bg-white"></div>
                {/* text */}
                <p>support@website.com</p>
              </div>

              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 rounded-md bg-white"></div>
                {/* text */}
                <p>(+63) 123-456-7890</p>
              </div>

              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="min-w-10 h-10 rounded-md bg-white"></div>
                {/* text */}
                <p>
                  Western Mindanao State University, Zamboanga City, Philippines
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mb-10">
            <h2 className="uppercase text-2xl mb-5">Social Links</h2>

            {/* parent */}
            <div className="flex flex-row gap-5">
              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 rounded-md bg-white"></div>
              </div>

              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 rounded-md bg-white"></div>
              </div>

              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 rounded-md bg-white"></div>
              </div>

              {/* card */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="w-10 h-10 rounded-md bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 py-16 text-center">
          <p className="w-10/12 m-auto">
            Discover your future today with coursematch.
          </p>
        </div>
      </footer>

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

export default App;
