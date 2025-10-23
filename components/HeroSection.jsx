"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full lg:p-20">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('hero-image-web.webp')" }}
      ></div>

  
      <div className="absolute inset-0 bg-[#0268b6] opacity-90"></div>

    
      <div className="relative flex flex-col md:flex-row text-white">
        {/* Left Section */}
        <div className="text-[55px] font-bold text-center w-full md:w-1/2 py-9">
          <div className="mt-6 [font-family:'Poppins',sans-serif] py-4 px-2 leading-none">
            Secure Your Dream Rank in NEET & JEE with JEET SARTHI
          </div>
          <div className="text-[20px] font-bold text-center my-1 mb-6 [font-family:'Poppins',sans-serif] py-4 px-2 leading-none">
            Powered by Shiksha Nation
          </div>
          <div className="w-[90%] h-[1px] bg-white mx-auto m-5"></div>
          <div className="text-[24px] px-7 py-3">
            Personalized One-on-One Mentorship from IITians & Doctors Who’ve
            Already Cracked It
          </div>
        </div>

        {/* Right Section */}
        <div className="text-white w-full md:w-1/2 md:px-7 p-4">
          <div className="pt-8 text-center text-[40px] font-bold">
            Book your FREE First Session
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Name */}
            <div className="relative">
              <label className="block mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-md text-black bg-white"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md text-black bg-white"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="+91"
                className="w-full p-2 rounded-sm text-black bg-white"
                required
              />
              <button className="text-[#cc3366] font-md hover:bg-[#cc3366] hover:text-white px-6 mt-2 p-2 rounded-md transition">
                Send OTP
              </button>
            </div>

            {/* Student Class */}
            <div className="relative">
              <label className="block mb-1">
                Student Class <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-2 rounded-md text-black bg-white"
                required
              >
                <option value="">Dropper</option>
                <option value="12th">12th</option>
                <option value="11th">11th</option>
                <option value="10th">10th</option>
                <option value="9th">9th</option>
              </select>
            </div>

            {/* Exam Type */}
            <div className="relative">
              <label className="block mb-1">
                Exam Type <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-2 rounded-md text-black bg-white"
                required
              >
                <option value="">NEET</option>
                <option value="NEET">NEET</option>
                <option value="Boards + NEET">Boards + NEET</option>
                <option value="Boards + IIT JEE">Boards + IIT JEE</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block mb-1">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 rounded-sm text-black bg-white"
              />
            </div>

            {/* How Can We Help */}
            <div className="md:col-span-2">
              <label className="block mb-1">How Can We Help?</label>
              <select className="w-full p-2 rounded-md text-black bg-white">
                <option value="">Backlog Management</option>
                <option value="Mentorship">Balancing Health and Study</option>
                <option value="Consistency">Consistency and Revision</option>
                <option value="Dropper">Dropper Issues</option>
                <option value="Doubt Solving">Doubt Solving</option>
                <option value="Study Material">Study Material</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

         
          <div className="mt-6 w-full">
            <button className="bg-[#67ba4b] hover:text-[#67ba4b] hover:bg-white font-bold p-3 rounded-md transition w-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
