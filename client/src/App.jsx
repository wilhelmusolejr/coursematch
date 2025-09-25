import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import FeatureCard from "./components/FeatureCard";

function App() {
  return (
    <>
      {/* HEADER */}
      <div className="text-white">
        {/* Navigator */}
        <nav className="bg-red-primary container  flex justify-between h-[15vh] items-center px-10 ">
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
        <div className="capitalize mb-20 flex justify-center items-center flex-col gap-5">
          <div className="rounded-3xl bg-red-200 text-red-800 font-medium  px-8 py-3 w-fit">
            get started
          </div>
          <h2 className="font-bold text-3xl text-center text-secondary">
            Our breakthrough features
          </h2>
        </div>

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
            <h3 className="capitalize mb-5 font-semibold text-2xl w-10/12">
              Course prediction engine
            </h3>

            {/* paragraph */}
            <p className="">
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
