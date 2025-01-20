"use client";

import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import ImageCard from "../components/ImageCard";
import Input from "../components/Input";
import Label from "../components/Label";
import Navigator from "../components/Navigator";

import cais from "../../public/images/gallery/cais.jpeg";
import cn from "../../public/images/gallery/cn.png";
import csspe from "../../public/images/gallery/csspe.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function CoursePrediction() {
  const [form, setForm] = useState(false); // 'open' is the state, 'setOpen' updates it

  // Submit form
  const handleClick = () => {
    setForm(true);
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
                          type={"text"}
                          name={"first_name"}
                          id={"first_name"}
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
                        />
                      </div>
                      {/* Sex */}
                      <div className="flex flex-col">
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
                        <Input type={"text"} name={"oapr"} id={"oapr"} />
                      </div>
                      {/* GPA */}
                      <div className="">
                        <Label htmlFor={"gpa"} required>
                          Grade 12 GPA
                        </Label>
                        <Input type={"text"} name={"gpa"} id={"gpa"} />
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

                    <p className="font-light">
                      Based on your excellent GPA of 90.0 and CET score of 90.0,
                      it is evident that you have strong academic background.
                      The College of Liberal Arts is a perfect fit for you as it
                      aligns well with your strand.
                    </p>
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

                    <p className="font-light">
                      Based on your excellent GPA of 90.0 and CET score of 90.0,
                      it is evident that you have strong academic background.
                      The College of Liberal Arts is a perfect fit for you as it
                      aligns well with your strand.
                    </p>
                  </CourseCard>

                  {/* item */}
                  <CourseCard className={"dark-white-color order-3"}>
                    <ImageCard src={cn} className="w-1/2 mx-auto mb-10 mt-5" />

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

                    <p className="font-light">
                      Based on your excellent GPA of 90.0 and CET score of 90.0,
                      it is evident that you have strong academic background.
                      The College of Liberal Arts is a perfect fit for you as it
                      aligns well with your strand.
                    </p>
                  </CourseCard>
                </div>

                <div className="p-4 flex gap-5 flex-col max-w-lg mx-auto">
                  <p>
                    Hi <strong>NAME,</strong> based on your academic performance
                    and senior high school background, our system has identified
                    the top three courses that best align with your strengths
                    and interests.
                  </p>

                  <p>
                    The highest recommendation is <strong>COURSE 1</strong>,
                    with a probability of XX%, making it the most suitable
                    option given your
                    <em> GPA (GPA 01), CET Score (CET 01),</em> and{" "}
                    <em>Strand (STRAND HUMSS/ABM/STEM/etc.)</em>. This course
                    aligns well with your academic achievements and has a strong
                    career trajectory in fields such as{" "}
                    <em>[mention relevant industries or career paths]</em>.
                  </p>

                  <p>
                    The second-best match is <strong>COURSE 2</strong>, with a
                    probability of XX%. While it is slightly lower than COURSE
                    1, this program also fits your skills and interests,
                    providing excellent opportunities in
                    <em>[mention related career paths]</em>. If you have a
                    passion for this field, it remains a strong alternative.
                  </p>

                  <p>
                    Lastly, <strong>COURSE 3</strong> emerged as another
                    potential option, with a probability of XX%. Though it ranks
                    third, it still represents a viable path based on your
                    academic background and could lead to career opportunities
                    in <em>[mention career fields]</em>.
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
