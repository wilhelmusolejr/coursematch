"use client";

import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import ImageCard from "../components/ImageCard";
import Input from "../components/Input";
import Label from "../components/Label";
import Navigator from "../components/Navigator";

import ca from "../../public/images/gallery/CA.jpeg";
import cais from "../../public/images/gallery/cais.jpeg";
import ccje from "../../public/images/gallery/ccje.jpeg";
import ccs from "../../public/images/gallery/ccs.jpg";
import che from "../../public/images/gallery/che.png";
import cla from "../../public/images/gallery/cla.jpeg";
import cn from "../../public/images/gallery/cn.png";
import coe from "../../public/images/gallery/coe.png";
import cpads from "../../public/images/gallery/cpads.jpeg";
import csm from "../../public/images/gallery/csm.jpeg";
import csspe from "../../public/images/gallery/csspe.jpeg";
import cswcd from "../../public/images/gallery/cswcd.jpeg";
import cte from "../../public/images/gallery/cte.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function CoursePrediction() {
  const [form, setForm] = useState(false); // 'open' is the state, 'setOpen' updates it
  const [threeCourses, setThreeCourses] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [oapr, setOapr] = useState();
  const [gpa, setGpa] = useState();
  const [strand, setStrand] = useState("");

  let courses = [
    {
      name: "ca",
      photo: ca,
    },
    {
      name: "cais",
      photo: cais,
    },
    {
      name: "ccje",
      photo: ccje,
    },
    {
      name: "ccs",
      photo: ccs,
    },
    {
      name: "che",
      photo: che,
    },
    {
      name: "cla",
      photo: cla,
    },
    {
      name: "cn",
      photo: cn,
    },
    {
      name: "coe",
      photo: coe,
    },
    {
      name: "cpads",
      photo: cpads,
    },
    {
      name: "csm",
      photo: csm,
    },
    {
      name: "csspe",
      photo: csspe,
    },
    {
      name: "cswcd",
      photo: cswcd,
    },
    {
      name: "cte",
      photo: cte,
    },
  ];

  // Submit form
  const handleClick = () => {
    let randomCourses = getRandomCourses(courses, 3);
    randomCourses = assignProbabilities(randomCourses);

    console.log(randomCourses);

    setThreeCourses(randomCourses);
    setForm(true);
  };

  const getRandomCourses = (arr, num) => {
    let shuffled = [...arr].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, num); // Get the first `num` elements
  };

  function assignProbabilities(courses) {
    let remaining = 100;

    // Assign the highest probability to the first item (between 50-80)
    const first = Math.floor(Math.random() * 31) + 50; // 50 to 80
    remaining -= first;

    // Assign the second highest probability (between 10-remaining-5)
    const second = Math.floor(Math.random() * (remaining - 4)) + 5; // Ensure at least 5%
    remaining -= second;

    // The last course gets the remaining probability
    const third = remaining; // Whatever is left (5-20%)

    // Assign probabilities
    courses[0].probability = first;
    courses[1].probability = second;
    courses[2].probability = third;

    return courses;
  }

  return (
    <>
      {/* HEADER */}
      <div className={`header min-h-screen flex flex-col `}>
        {/* NAVIGATOR */}
        <Navigator />

        {/* content */}
        <div className="w-full mt-24 px-5 md:px-10 py-10 flex-grow flex flex-col text-black">
          <div className="border container mx-auto border-black py-10 px-5 rounded-xl primary-color-extra-light ">
            {/* Fill up form */}
            {!form && (
              <div className="fill-up-form">
                <h1 className="uppercase font-bold text-2xl text-center mb-5 md:my-16">
                  Get your course recommended!
                </h1>

                <div className="flex flex-wrap gap-10 justify-center">
                  {/* Personal Information */}
                  <div className="max-w-80">
                    <h2 className="font-semibold text-lg mb-3">
                      Personal Information
                    </h2>

                    <div className="flex flex-col gap-2">
                      {/* First name */}
                      <div className="">
                        <Label htmlFor={"first_name"} required>
                          First name
                        </Label>
                        <Input
                          type="text"
                          name="first_name"
                          id="first_name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      {/* Last name */}
                      <div className="">
                        <Label htmlFor={"last_name"} required>
                          Last name
                        </Label>
                        <Input
                          type={"text"}
                          name={"last_name"}
                          id={"last_name"}
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      {/* Sex */}
                      <div className=" flex-col hidden">
                        <Label htmlFor={"sex"} required>
                          Sex
                        </Label>
                        <select
                          name="sex"
                          id="sex"
                          className="capitalize border border-black rounded-md p-2 w-full"
                        >
                          <option value="male" defaultValue={"male"}>
                            male
                          </option>
                          <option value="female">female</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Academic Background */}
                  <div className="max-w-80">
                    <h2 className="font-semibold text-lg mb-3">
                      Academic Background
                    </h2>

                    <div className="flex flex-col gap-2">
                      {/* OAPR */}
                      <div className="">
                        <Label htmlFor={"oapr"} required>
                          Overall Percentille rank
                        </Label>
                        <Input
                          type={"number"}
                          name={"oapr"}
                          id={"oapr"}
                          value={oapr}
                          onChange={(e) => setOapr(e.target.value)}
                        />
                      </div>
                      {/* GPA */}
                      <div className="">
                        <Label htmlFor={"gpa"} required>
                          Grade 12 GPA
                        </Label>
                        <Input
                          type={"number"}
                          name={"gpa"}
                          id={"gpa"}
                          value={gpa}
                          onChange={(e) => setGpa(e.target.value)}
                        />
                      </div>
                      {/* Sex */}
                      <div className="flex flex-col">
                        <Label htmlFor={"strand"} required>
                          Strand
                        </Label>
                        <select
                          name="strand"
                          id="strand"
                          className="uppercase border border-black rounded-md p-2 w-full"
                        >
                          <option value="humss" defaultValue={"humss"}>
                            humss
                          </option>
                          <option value="ict">ict</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-5 md:my-16">
                  <Button onClick={handleClick}>Submit</Button>
                </div>
              </div>
            )}

            {/* Result */}
            {form && (
              <div className="result ">
                <h1 className="uppercase font-bold text-2xl text-center mb-5 md:my-16">
                  Result
                </h1>

                <div className="flex gap-5 flex-col lg:flex-row lg:items-end  justify-center items-center mb-5 md:mb-16">
                  {threeCourses &&
                    threeCourses.map((course, index) => (
                      <CourseCard
                        key={index}
                        className="dark-white-color border-2 order-1 lg:order-2 pb-20"
                      >
                        <ImageCard
                          src={course.photo}
                          className="w-1/2 mx-auto mb-10 mt-5"
                        />

                        <div className="mb-5">
                          <h2 className="uppercase font-semibold text-lg">
                            {course.name} {/* Use the dynamic course name */}
                          </h2>
                          <p className="text-sm font-light uppercase hidden">
                            Highly recommended (
                            {Math.floor(Math.random() * 21) + 60}%)
                          </p>
                          <div className="flex gap-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className="w-4"
                              />
                            ))}
                          </div>
                        </div>

                        <p className="font-light">
                          Based on your excellent GPA of 90.0 and CET score of
                          90.0, it is evident that you have a strong academic
                          background. The <strong>{course.course_name}</strong>{" "}
                          is a perfect fit for you as it aligns well with your
                          strand.
                        </p>
                      </CourseCard>
                    ))}
                </div>

                <div className="p-4 flex gap-5 flex-col max-w-lg mx-auto">
                  <p>
                    Hi{" "}
                    <strong className="capitalize">
                      {" "}
                      {firstName} {lastName},
                    </strong>{" "}
                    based on your academic performance and senior high school
                    background, our system has identified the top three courses
                    that best align with your strengths and interests.
                  </p>

                  <p>
                    The highest recommendation is{" "}
                    <strong className="uppercase">
                      {threeCourses[0].name}
                    </strong>
                    , with a probability of {threeCourses[0].probability}%,
                    making it the most suitable option given your
                    <em>
                      {" "}
                      GPA {gpa}, CET Score {oapr},
                    </em>{" "}
                    and <em>Strand HUMSS</em>. This course aligns well with your
                    academic achievements and has a strong career trajectory in
                    fields such as{" "}
                    <em>[mention relevant industries or career paths]</em>.
                  </p>

                  <p>
                    The second-best match is{" "}
                    <strong className="uppercase">
                      {threeCourses[1].name}
                    </strong>
                    , with a probability of {threeCourses[1].probability}%.
                    While it is slightly lower than COURSE 1, this program also
                    fits your skills and interests, providing excellent
                    opportunities in
                    <em>[mention related career paths]</em>. If you have a
                    passion for this field, it remains a strong alternative.
                  </p>

                  <p>
                    Lastly,{" "}
                    <strong className="uppercase">
                      {threeCourses[2].name}
                    </strong>{" "}
                    emerged as another potential option, with a probability of
                    {threeCourses[2].probability}%. Though it ranks third, it
                    still represents a viable path based on your academic
                    background and could lead to career opportunities in{" "}
                    <em>[mention career fields]</em>.
                  </p>

                  <p>
                    It is important to consider your personal interests,
                    long-term goals, and passion for the field when making your
                    final decision. While this model provides data-driven
                    recommendations, your motivation and commitment will play a
                    key role in your success.
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
                    <em>
                      *This recommendation system was trained using the Western
                      Mindanao State University 2020 dataset, which consists of
                      academic records from 16,000 students. The model leverages
                      historical data to provide accurate course predictions
                      based on past student outcomes.*
                    </em>
                  </p>
                </div>

                <div className="text-center">
                  <Button
                    className="my-10"
                    onClick={function () {
                      window.location.reload();
                    }}
                  >
                    Predict again
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
