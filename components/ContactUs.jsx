import React from "react";

const ContactUs = () => {
  return (
    <div className="relative w-full lg:p-20">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('insian-student-web-3-scaled.webp')" }}
      ></div>

    
      <div className="absolute inset-0 bg-[#2079b9] opacity-90"></div>

     
      <div className="relative flex flex-col md:flex-row text-white">
        <div className="w-full md:px-7 p-4">
          <div className="font-extrabold text-[clamp(40px,5vw,60px)] text-center mb-10 [font-family:'Poppins',sans-serif]">
            Start Your Success Journey With{" "}
            <span className="text-[#67ba4b]">JEET SARTHI</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Name */}
            <div>
              <label className="block mb-1 relative">
                Name <span className="absolute text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-md text-black bg-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 relative">
                Email <span className="absolute text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md text-black bg-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 relative">
                Phone Number <span className="absolute text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 rounded-sm text-black bg-white"
              />
              <button className="text-[#cc3366] font-medium hover:bg-[#cc3366] hover:text-white px-6 mt-2 p-2 rounded-md border border-[#cc3366] transition">
                Send OTP
              </button>
            </div>

            {/* Student Class */}
            <div>
              <label className="block mb-1 relative">
                Student Class <span className="absolute text-red-500 ml-1">*</span>
              </label>
              <select className="w-full p-2 rounded-md text-black bg-white">
                <option value="">Select Class</option>
                <option value="12th">12th</option>
                <option value="11th">11th</option>
                <option value="10th">10th</option>
                <option value="9th">9th</option>
              </select>
            </div>

            {/* Exam Type */}
            <div>
              <label className="block mb-1 relative">
                Exam Type <span className="absolute text-red-500 ml-1">*</span>
              </label>
              <select className="w-full p-2 rounded-md text-black bg-white">
                <option value="">Select Exam</option>
                <option value="NEET">NEET</option>
                <option value="JEE">Boards + NEET</option>
                <option value="KVPY">Boards + IIT JEE</option>
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

          
            <div className="md:col-span-2">
              <label className="block mb-1">How Can We Help?</label>
              <select className="w-full p-2 rounded-md text-black bg-white">
                <option value="">Backlog Management</option>
                <option value="Mentorship">Balancing Health and Study</option>
                <option value="Doubt Solving">Consistency and Revision</option>
                <option value="Study Material">Dropper Issues</option>
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

export default ContactUs;
