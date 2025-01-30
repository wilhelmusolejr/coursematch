"use client";

import { jsPDF } from "jspdf";

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
import { faStar, faDownload } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function CoursePrediction() {
  const [form, setForm] = useState(false); // 'open' is the state, 'setOpen' updates it
  const [threeCourses, setThreeCourses] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [oapr, setOapr] = useState();
  const [gpa, setGpa] = useState();
  const [strand, setStrand] = useState("");

  const [errors, setErrors] = useState({
    firstName: false,
    oapr: false,
    gpa: false,
    strand: false,
  });

  let courses = [
    {
      name: "ca",
      full_name: "College of Agriculture",
      related_work: "Agricultural Scientist",
      photo: ca,
    },
    {
      name: "cais",
      full_name: "College of Asian and Islamic Studies",
      related_work: "Cultural Analyst",
      photo: cais,
    },
    {
      name: "ccje",
      full_name: "College of Criminal Justice Education",
      related_work: "Police Officer",
      photo: ccje,
    },
    {
      name: "ccs",
      full_name: "College of Computing Studies",
      related_work: "Software Engineer",
      photo: ccs,
    },
    {
      name: "che",
      full_name: "College of Home Economics",
      related_work: "Nutritionist",
      photo: che,
    },
    {
      name: "cla",
      full_name: "College of Liberal Arts",
      related_work: "Journalist",
      photo: cla,
    },
    {
      name: "cn",
      full_name: "College of Nursing",
      related_work: "Registered Nurse",
      photo: cn,
    },
    {
      name: "coe",
      full_name: "College of Engineering",
      related_work: "Civil Engineer",
      photo: coe,
    },
    {
      name: "cpads",
      full_name: "College of Public Administration and Development Studies",
      related_work: "Public Administrator",
      photo: cpads,
    },
    {
      name: "csm",
      full_name: "College of Science and Mathematics",
      related_work: "Data Analyst",
      photo: csm,
    },
    {
      name: "csspe",
      full_name: "College of Sports Science and Physical Education",
      related_work: "Sports Coach",
      photo: csspe,
    },
    {
      name: "cswcd",
      full_name: "College of Social Work and Community Development",
      related_work: "Social Worker",
      photo: cswcd,
    },
    {
      name: "cte",
      full_name: "College of Teacher Education",
      related_work: "High School Teacher",
      photo: cte,
    },
  ];

  // Submit form
  const handleClick = () => {
    let formIsValid = true;
    const updatedErrors = { ...errors };

    if (!gpa) {
      updatedErrors.gpa = true;
      formIsValid = false;
    } else {
      updatedErrors.gpa = false;
    }

    if (!oapr) {
      updatedErrors.oapr = true;
      formIsValid = false;
    } else {
      updatedErrors.oapr = false;
    }

    if (!firstName) {
      updatedErrors.firstName = true;
      formIsValid = false;
    } else {
      updatedErrors.firstName = false;
    }

    if (!strand) {
      updatedErrors.strand = true;
      formIsValid = false;
    } else {
      updatedErrors.strand = false;
    }

    if (!formIsValid) {
      setErrors(updatedErrors);
      return; // Exit if form is invalid
    }

    let randomCourses = getRandomCourses(courses, 3);
    randomCourses = assignProbabilities(randomCourses);

    randomCourses[0].description = `<p>
                    The highest recommendation is
                    <strong className="uppercase">
                      ${randomCourses[0].name.toUpperCase()}
                    </strong>
                    , with a probability of ${randomCourses[0].probability}%,
                    making it the most suitable option given your
                    <em>
                      GPA ${gpa}, CET Score ${oapr},
                    </em>
                    and <em>Strand HUMSS</em>. This course aligns well with your
                    academic achievements and has a strong career trajectory in
                    fields such as <em>${randomCourses[0].related_work}</em>.
                  </p>`;

    randomCourses[1].description = `<p>
                    The second-best match is 
                    <strong className="uppercase">
                      ${randomCourses[1].name.toUpperCase()}
                    </strong>, with a probability of ${
                      randomCourses[1].probability
                    }%.
                    While it is slightly lower than first course, this program
                    also fits your skills and interests, providing excellent
                    opportunities in <em>${
                      randomCourses[1].related_work
                    }</em>. If
                    you have a passion for this field, it remains a strong
                    alternative.
                  </p>`;

    randomCourses[2].description = `<p>
                    Lastly,
                    <strong className="uppercase">
                      ${randomCourses[2].name.toUpperCase()}
                    </strong>
                    emerged as another potential option, with a probability of 
                    ${randomCourses[2].probability}%. Though it ranks third, it
                    still represents a viable path based on your academic
                    background and could lead to career opportunities in 
                    <em>${randomCourses[2].related_work}</em>.
                  </p>`;

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

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text("Course Recommendation Result", 105, 15, { align: "center" });

    // Greeting
    doc.setFontSize(12);
    doc.text(`Hi ${firstName},`, 15, 30);
    const introText = `Based on your academic performance and senior high school background, our system has identified the top three courses that best align with your strengths and interests.`;
    const wrappedIntro = doc.splitTextToSize(introText, 180);
    doc.text(wrappedIntro, 15, 40);

    let yOffset = 60;

    // Sort courses by probability (highest first)
    threeCourses.sort((a, b) => b.probability - a.probability);

    threeCourses.forEach((course, index) => {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold"); // Default bold font
      doc.text(`${index + 1}. ${course.full_name}`, 15, yOffset);
      yOffset += 8;

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal"); // Default regular font

      // Determine ranking label
      let rank = "";
      if (index === 0) rank = "1st Choice (Highly Recommended)";
      else if (index === 1) rank = "2nd Choice";
      else if (index === 2) rank = "3rd Choice";

      // General description combining probability, ranking, and related work
      const description = `
    This course has been identified with a probability of ${course.probability}%.
    It is categorized as your ${rank}.
    Related career paths include: ${course.related_work.join}.
  `;

      const wrappedText = doc.splitTextToSize(description.trim(), 180);
      doc.text(wrappedText, 15, yOffset);

      yOffset += wrappedText.length * 6 + 10; // Adjust space for next item
    });

    // Additional Notes
    doc.setFontSize(10);
    const disclaimerText =
      "*This recommendation system was trained using the Western Mindanao State University 2020 dataset, which consists of academic records from 16,000 students. The model leverages historical data to provide accurate course predictions based on past student outcomes.*";
    const wrappedDisclaimer = doc.splitTextToSize(disclaimerText, 180);
    doc.text(wrappedDisclaimer, 15, yOffset);

    // Save PDF
    doc.save("course-recommendation.pdf");
  };

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
                          className={
                            errors.firstName ? "bg-red-300 border-red-500" : ""
                          }
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      {/* Last name */}
                      <div className=" hidden">
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
                          className={
                            errors.oapr ? "bg-red-300 border-red-500" : ""
                          }
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
                          className={
                            errors.gpa ? "bg-red-300 border-red-500" : ""
                          }
                          onChange={(e) => setGpa(e.target.value)}
                        />
                      </div>
                      {/* strand */}
                      <div className="flex flex-col">
                        <Label htmlFor={"strand"} required>
                          Strand
                        </Label>
                        <select
                          name="strand"
                          id="strand"
                          className={`uppercase border border-black rounded-md p-2 w-full ${
                            errors.strand ? "bg-red-300 border-red-500" : ""
                          }`}
                          value={strand}
                          onChange={function (e) {
                            setStrand(e.target.value);
                          }}
                        >
                          <option value="" defaultValue={"-"}>
                            -
                          </option>
                          <option value="abm">
                            ABM (Accountancy, Business, and Management)
                          </option>
                          <option value="humss">
                            HUMSS (Humanities and Social Sciences)
                          </option>
                          <option value="stem">
                            STEM (Science, Technology, Engineering, and
                            Mathematics)
                          </option>
                          <option value="ict">
                            ICT (Information and Communications Technology)
                          </option>
                          <option value="gas">
                            GAS (General Academic Strand)
                          </option>
                          <option value="tvl">
                            TVL (Technical-Vocational-Livelihood)
                          </option>
                          <option value="arts-design">Arts and Design</option>
                          <option value="sports">Sports</option>
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

                {/* paragraph */}
                <div className=" flex gap-5 flex-col w-full md:w-9/12 mx-auto">
                  <p>
                    Hi <strong className="capitalize"> {firstName},</strong>{" "}
                    based on your academic performance and senior high school
                    background, our system has identified the top three courses
                    that best align with your strengths and interests.
                  </p>
                </div>

                <div className="flex gap-5 flex-col lg:flex-row lg:items-end  justify-center items-center my-10 md:my-16">
                  {threeCourses && (
                    <>
                      {/* item */}
                      <CourseCard
                        className={
                          "dark-white-color border-2 order-1 lg:order-2  pb-20"
                        }
                      >
                        <ImageCard
                          src={cais}
                          className="w-1/2 mx-auto mb-10 mt-5"
                        />

                        <div className="mb-5">
                          <h2 className="uppercase font-semibold text-lg">
                            College of liberal arts
                          </h2>
                          <p className="text-sm font-light uppercase hidden">
                            highly recommended (63%)
                          </p>
                          <div className="flex gap-1 text-yellow-500">
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                          </div>
                        </div>

                        <p
                          className="font-light"
                          dangerouslySetInnerHTML={{
                            __html: threeCourses[0].description,
                          }}
                        ></p>
                      </CourseCard>

                      {/* item */}
                      <CourseCard
                        className={"dark-white-color order-2 lg:order-1 pb-12"}
                      >
                        <ImageCard
                          src={csspe}
                          className="w-1/2 mx-auto mb-10 mt-5"
                        />

                        <div className="mb-5">
                          <h2 className="uppercase font-semibold text-lg">
                            College of liberal arts
                          </h2>
                          <p className="text-sm font-light uppercase hidden">
                            highly recommended (63%)
                          </p>
                          <div className="flex gap-1 text-yellow-500">
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4 "
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4 "
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4 "
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4 "
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4 "
                            ></FontAwesomeIcon>
                          </div>
                        </div>

                        <p
                          className="font-light"
                          dangerouslySetInnerHTML={{
                            __html: threeCourses[1].description,
                          }}
                        ></p>
                      </CourseCard>

                      {/* item */}
                      <CourseCard className={"dark-white-color order-3"}>
                        <ImageCard
                          src={cn}
                          className="w-1/2 mx-auto mb-10 mt-5"
                        />

                        <div className="mb-5">
                          <h2 className="uppercase font-semibold text-lg">
                            College of liberal arts
                          </h2>
                          <p className="text-sm font-light uppercase hidden">
                            highly recommended (63%)
                          </p>
                          <div className="flex gap-1 text-yellow-500">
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className=" w-4"
                            ></FontAwesomeIcon>
                          </div>
                        </div>

                        <p
                          className="font-light"
                          dangerouslySetInnerHTML={{
                            __html: threeCourses[2].description,
                          }}
                        ></p>
                      </CourseCard>
                    </>
                  )}
                </div>

                {/* paragraph */}
                <div className=" flex gap-5 flex-col w-full md:w-9/12 mx-auto">
                  <p>
                    It is important to consider your personal interests,
                    long-term goals, and passion for the field when making your
                    final decision. While this model provides data-driven
                    recommendations, your motivation and commitment will play a
                    key role in your success.
                  </p>

                  <p className="mt-4 text-sm max-w-lg mx-auto text-gray-500">
                    <em>
                      *This recommendation system was trained using the Western
                      Mindanao State University 2020 dataset, which consists of
                      academic records from 16,000 students. The model leverages
                      historical data to provide accurate course predictions
                      based on past student outcomes.*
                    </em>
                  </p>
                </div>

                <div className="text-center flex justify-center items-center gap-5">
                  <div
                    className="hover:underline cursor-pointer"
                    onClick={function () {
                      window.location.reload();
                    }}
                  >
                    Predict again
                  </div>

                  <Button className="my-10 flex gap-2" onClick={generatePDF}>
                    <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
                    Download
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
