"use client";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Daily Routine Guidance",
    description: "Stay disciplined and consistent.",
    Icon: "result.svg",
  },
  {
    title: "Tips & Tricks from Toppers",
    description: "Learn what actually works in the exam.",
    Icon: "tips-tricks.svg",
  },
  {
    title: "Interactive Sessions",
    description: "Insights on exam patterns and preparation hacks.",
    Icon: "interactive.svg",
  },
  {
    title: "Dedicated One-on-One Mentorship",
    description: "Personalized support at every step.",
    Icon: "one-one-one-3.svg",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:py-24 lg:px-20 overflow-hidden bg-white">
      {/* Left section */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-16 lg:mb-0">
       
        <div className="absolute flex justify-center items-center">
          <svg
            viewBox="0 0 24 24"
            className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px] opacity-20 z-0"
          >
            <circle cx="12" cy="12" r="10" fill="[#0268b6]" />
          </svg>
        </div>

     
        <div className="relative z-10 drop-shadow-lg">
          <Image
            src="/indian-student-web-716x1024.webp"
            alt="Student"
            width={500}
            height={700}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 className="text-[#0268b6] font-extrabold text-[clamp(32px,4vw,52px)] mb-10 [font-family:'Poppins',sans-serif]">
          Exclusive J<span className="text-[#67ba4b]">EET</span> SARTHI Benefits
        </h2>

        <div className="grid sm:grid-cols-2 gap-10 w-full max-w-lg">
          {features.map(({ title, description, Icon }, index) => (
            <div key={index} className="flex flex-col items-center lg:items-start">
              <Image
                src={`/${Icon}`}
                alt={title}
                width={70}
                height={70}
                className="mb-4"
              />
              <h3 className="font-bold text-xl text-[#0268b6] mb-1">
                {title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-12 px-10 py-4 text-lg font-semibold text-white bg-[#0268b6] rounded-xl shadow-md hover:bg-[#63b750] transition-all duration-300">
          Enrol for Mentorship
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;
