import React from "react";
import Image from "next/image";

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "One-on-One Guidance:",
      description: "Personalized strategies by top-ranking mentors.",
      Icon: "/image-1.svg",
    },
    {
      title: "Progress Tracking:",
      description: "Regular reviews with your senior mentor keep you aligned",
      Icon: "/image-2.svg",
    },
    {
      title: "Dual Support System",
      description:
        "Senior mentor sets your roadmap, junior mentor ensures you follow it daily.",
      Icon: "/image-3.svg",
    },
    {
      title: "Mock Tests & Feedback",
      description: "Real exam simulation + analysis = higher scores.",
      Icon: "/image-4.svg",
    },
    {
      title: "Time Mastery",
      description: "Practice managing every second in the exam hall.",
      Icon: "/image-5.svg",
    },
    {
      title: "Proven Shortcuts & Techniques",
      description: "Learn to solve smarter, faster, and with accuracy",
      Icon: "/image-6.svg",
    },
    {
      title: "Constant Doubt Support",
      description: "Get answers instantly from your junior mentor",
      Icon: "image-7.svg",
    },
    {
      title: "Stress-Free Prep",
      description: "Build confidence and mental resilience for exam day.",
      Icon: "image-8.svg",
    },
    {
      title: "Notes & Resources",
      description: "Expert-curated, precise, and effective study material.",
      Icon: "image-9.svg",
    },
  ];

  return (
    <div className="m-2 pt-[64px] pb-[32px]">
      <div className="text-[#0268b6] md:px-30 leading-18 [font-family:'Poppins',sans-serif] text-[clamp(40px,5vw,50px)] font-extrabold text-center mb-10">
        Why Choose J
        <span className="text-[#67ba4b] hover:text-[rgb(2,104,182)]">EET </span>
        SARTHI Mentorship?
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:px-20">
        {features.map(({ title, description, Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-start relative p-1"
          >
           
            <div className="absolute right-0 top-0 h-full w-[1px] bg-black rounded"></div>

            
            <div className="flex items-start py-7 mx-auto gap-4">
              {Icon && (
                <div className="flex-shrink-0">
                  <Image src={Icon} alt={title} width={70} height={70} />
                </div>
              )}
              <div>
                <div className="font-bold text-xl mb-1">{title}</div>
                <div className="text-gray-600 text-lg">{description}</div>
              </div>
            </div>

            
            <div className="w-full h-[1px] bg-black rounded mt-4"></div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="block mx-auto px-14 py-5 text-xl font-bold text-white rounded-lg bg-[#0268b6] hover:bg-[#63b750]">
          Enroll for Mentorship
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
