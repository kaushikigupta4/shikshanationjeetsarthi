import React from "react";

import Image from "next/image";

const Results = () => {
  return (
    <div className="m-2 pt-[64px] pb-[32px]  bg-gradient-to-r from-[#0268b6] to-[#63b750]">
      <div className="text-white [font-family:'Poppins',sans-serif] text-[clamp(50px,5vw,60px)] font-extrabold text-center mb-10 ">
        Our Experience = Your Results
      </div>
      {/* Middle section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-[60px] m-6 bg-white py-25 px-10">
          <div className="mb-10">
            <Image
              src="/image-10.svg"
              height={100}
              alt="Icon"
              width={100}
            ></Image>
          </div>
          <div className="font-bold text-xl">
            100+ Years of combined Mentorship Expertise
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col items-center justify-center rounded-[60px] m-6 px-10 bg-white py-25 ">
          <div className="mb-10">
            <Image
              src="/image-11.svg"
              height={100}
              alt="Icon"
              width={100}
            ></Image>
          </div>
          <div className="font-bold text-xl">
            Thousands of Aspirants Guided by Rankers
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center justify-center rounded-[60px] m-6 bg-white py-25 px-10">
          <div className="mb-10">
            <Image
              src="/image-12.svg"
              height={100}
              alt="Icon"
              width={100}
            ></Image>
          </div>
          <div className="font-bold text-xl">
            One-on-One Daily Support to Keep You Disciplined
          </div>
        </div>

        {/* 4 */}
        <div className="flex flex-col items-center justify-center rounded-[60px] m-6 bg-white py-25 px-10">
          <div className="mb-10">
            <Image
              src="/image-13.svg"
              height={100}
              alt="Icon"
              width={100}
            ></Image>
          </div>
          <div className="font-bold text-xl">
            Tailored Plans That Save Time & Maximize Practice
          </div>
        </div>
      </div>

      <div className="">
        <button className="block mx-auto mt-20 px-20 py-5 font-bold text-xl rounded-lg bg-white text[#63b750] hover:text-[#0268b6]  text-[#63b750] ">
          Enroll for Mentorship
        </button>
      </div>
    </div>
  );
};

export default Results;
