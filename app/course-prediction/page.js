"use client";

import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import Input from "../components/Input";
import Label from "../components/Label";
import Navigator from "../components/Navigator";

export default function CoursePrediction() {
  // Submit form
  const handleClick = () => {
    let formParent = document.querySelector(".fill-up-form");
    formParent.classList.add("hidden");

    let resultParent = document.querySelector(".result");
    resultParent.classList.remove("hidden");
  };

  return (
    <>
      {/* HEADER */}
      <div className={`header min-h-screen flex flex-col `}>
        {/* NAVIGATOR */}
        <Navigator />

        {/* content */}
        <div className="w-full px-5 md:px-10 py-10 flex-grow flex flex-col text-black">
          <div className="border container mx-auto border-black py-10 px-5 rounded-xl primary-color-extra-light ">
            {/* Fill up form */}
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

            {/* Result */}
            <div className="result hidden">
              <h1 className="uppercase font-bold text-2xl text-center mb-5 md:my-16">
                Result
              </h1>

              <div className="flex gap-5 flex-col lg:flex-row lg:items-end  justify-center items-center mb-5 md:mb-16">
                {/* item */}
                <CourseCard
                  className={
                    "lighter-secondary-color border-blue-700 border-1 order-1 lg:order-2 text-white pb-10"
                  }
                >
                  <div className="mb-5">
                    <h2 className="uppercase font-semibold text-lg">
                      College of liberal arts
                    </h2>
                    <p className="text-sm font-light uppercase">
                      highly recommended (63%)
                    </p>
                  </div>

                  <p className="font-light">
                    Based on your excellent GPA of 90.0 and CET score of 90.0,
                    it is evident that you have strong academic background. The
                    College of Liberal Arts is a perfect fit for you as it
                    aligns well with your strand.
                  </p>
                </CourseCard>

                {/* item */}
                <CourseCard className={"dark-white-color order-2 lg:order-1"}>
                  <div className="mb-5">
                    <h2 className="uppercase font-semibold text-lg">
                      College of liberal arts
                    </h2>
                    <p className="text-sm font-light uppercase">
                      highly recommended (63%)
                    </p>
                  </div>

                  <p className="font-light">
                    Based on your excellent GPA of 90.0 and CET score of 90.0,
                    it is evident that you have strong academic background. The
                    College of Liberal Arts is a perfect fit for you as it
                    aligns well with your strand.
                  </p>
                </CourseCard>

                {/* item */}
                <CourseCard className={"dark-white-color order-3"}>
                  <div className="mb-5">
                    <h2 className="uppercase font-semibold text-lg">
                      College of liberal arts
                    </h2>
                    <p className="text-sm font-light uppercase">
                      highly recommended (63%)
                    </p>
                  </div>

                  <p className="font-light">
                    Based on your excellent GPA of 90.0 and CET score of 90.0,
                    it is evident that you have strong academic background. The
                    College of Liberal Arts is a perfect fit for you as it
                    aligns well with your strand.
                  </p>
                </CourseCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
