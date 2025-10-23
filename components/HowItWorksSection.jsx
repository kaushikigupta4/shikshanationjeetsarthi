"use client";
import React from "react";
import Image from "next/image";

const HowItWorksSection = () => {
  const circles = [1, 2, 3, 4, 5];
  return (
    <div className="pt-[64px] pb-[32px]">
      <div className="text-[#0268b6] [font-family:'Poppins',sans-serif] text-[clamp(45px,5vw,55px)] font-bold text-center mb-10">
        How J
        <span className="text-[#67ba4b] hover:text-[rgb(2,104,182)]">EET </span>
        SARTHI Mentorship Works?
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {/* 1 */}
        <div className="flex flex-col items-center text-center my-8">
          <Image src="onboarding.svg" alt="" width={150} height={150} />
          <div className="text-[#67ba4b] font-bold text-xl">Onboarding</div>
          <div className="text-xl">Understand your goals & challenges.</div>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center text-center">
          <Image src="support.svg" alt="" width={150} height={150} />
          <div className="text-[#67ba4b] font-bold text-xl">Daily Support</div>
          <div className="text-xl">Junior mentor checks in regularly..</div>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center text-center">
          <Image src="result.svg" alt="" width={150} height={150} />
          <div className="text-[#67ba4b] font-bold text-xl">Result</div>
          <div className="text-xl">Consistency + confidence = success.</div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between my-20">
        <div className="flex-1 h-[3px] bg-[#67ba4b] rounded-full mx-1 sm:mx-2"></div>
        {circles.map((_, index) => (
          <React.Fragment key={index}>
            {/* Circle */}
            <div className="flex flex-col items-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="min-w-[24px] min-h-[24px]"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="rgb(2,104,182)"
                  stroke="#67ba4b"
                  strokeWidth="4.5"
                />
              </svg>
            </div>
            <div className="flex-1 h-[3px] bg-[#67ba4b] rounded-full "></div>
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {/* 4 */}
        <div className="flex flex-col items-center text-center my-8">
          <Image src="roadmap.svg" alt="" width={150} height={150} />
          <div className="text-[#67ba4b] font-bold text-xl">Roadmap</div>
          <div className="text-xl">Senior mentor sets your plan.</div>
        </div>

        {/* 5 */}
        <div className="flex flex-col items-center text-center">
          <Image src="reviewAndAdjust.svg" alt="" width={150} height={150} />
          <div className="text-[#67ba4b] font-bold text-xl">Review & Adjust</div>
          <div className="text-xl">Senior mentor tracks performance weekly.</div>
        </div>
      </div>

      <div>
        <button className="block mx-auto mt-20 px-10 py-5 text-xl font-bold text-white rounded-lg bg-[#0268b6] hover:bg-[#63b750]">
          Enroll for Mentorship
        </button>
      </div>
    </div>
  );
};

export default HowItWorksSection;
