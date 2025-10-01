import React from "react";
import Navigator from "../components/Navigator";

export default function Predictions() {
  return (
    <>
      {/* HEADER */}
      <div className="text-white">
        {/* Navigator */}
        <Navigator />
      </div>

      <div className="container mx-auto px-10 mt-32 mb-20 text-center">
        <h1 className="text-3xl uppercase font-bold mb-5">
          Get your course recommended!
        </h1>
        <p className="w-10/12 lg:w-6/12 m-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quasi, velit in asperiores repellendus inventore suscipit et modi
          fugiat aspernatur?
        </p>
      </div>

      <div className="container mx-auto md:px-10">
        <div className="container mx-auto border-1  border-black/20 px-10 py-14 lg:py-20 rounded-xl bg-white-primary">
          <div className="flex md:flex-row flex-col gap-10 md:gap-5 md:justify-center">
            {/* Personal Info */}
            <div className="w-full max-w-80">
              <h2 className="text-xl font-semibold mb-5">
                Personal information
              </h2>
              <div className="">
                <h3 className="mb-1">
                  Name <span className="text-red-500">*</span>
                </h3>
                <input
                  type="text"
                  className="p-2 border-1 rounded-md w-full bg-white"
                />
              </div>
            </div>

            {/* Acadademic Background */}
            <div className="w-full max-w-80">
              <div className="">
                <h2 className="text-xl font-semibold mb-5">
                  Academic Background
                </h2>
              </div>
              <div className="flex gap-5 flex-col">
                {/* -- */}
                <div className="">
                  <h3 className="mb-1">
                    Grade 12 GPA <span className="text-red-500">*</span>
                  </h3>
                  <input
                    type="text"
                    className=" bg-white p-2 border-1 rounded-md w-full"
                  />
                </div>

                {/* -- */}
                <div className="">
                  <h3 className="mb-1">
                    Overall percentille rank{" "}
                    <span className="text-red-500">*</span>
                  </h3>
                  <input
                    type="text"
                    className=" bg-white p-2 border-1 rounded-md w-full"
                  />
                </div>

                {/* -- */}
                <div className="">
                  <h3 className="mb-1">
                    Strand taken <span className="text-red-500">*</span>
                  </h3>
                  <input
                    type="text"
                    className=" bg-white p-2 border-1 rounded-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* button */}
          <div className=" text-white flex items-center justify-center mt-20">
            <div className="rounded-3xl bg-blue-800 font-medium uppercase px-8 py-3 w-fit">
              Submit
            </div>
          </div>
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
    </>
  );
}
