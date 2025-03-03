import React from "react";
import AboutUsImg from "../../assets/plumeriaresortimages/aboutus_img.jpg"; // Ensure you have the correct image path

const AboutUs = () => {
  return (
    <section style={{backgroundImage:'',background:' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(255,253,210,1) 0%, rgba(255,255,255,1) 65%)'}} className=" py-32 relative xl:mr-0 lg:mr-5 mr-0 bg-gray-50">
      <div className="w-full max-w-7xl px-6 md:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center lg:items-start items-center gap-8">
            <h6 className="text-gray-800 font-semibold text-5xl leading-tight text-center lg:text-left">
              About Us
            </h6>
            <p className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-3xl p-8 text-gray-700 text-lg leading-relaxed transition-all duration-700 ease-in-out text-center lg:text-left">
              At our resort, we believe in providing a perfect blend of comfort,
              luxury, and nature. Nestled amidst the breathtaking landscapes of
              Coorg, we offer an idyllic retreat for those seeking tranquility,
              adventure, and rejuvenation. Our thoughtfully designed
              accommodations let you unwind and connect with nature, while our
              personalized services ensure every moment of your stay is
              exceptional. Whether you’re here to explore, indulge, or simply
              relax, we are committed to offering an unforgettable experience.
              Come, escape the ordinary, and immerse yourself in the
              extraordinary at our resort.
            </p>

            {/* Contact Button */}
            <button className="flex items-center gap-2 bg-sky-400 hover:bg-sky-700 ml-10 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-all duration-500 ease-in-out transform hover:scale-105">
              Contact Us
              <svg
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75 4.5L11.25 9L6.75 13.5"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* Right Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative sm:w-[450px] sm:h-[400px] w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={AboutUsImg}
                alt="About Us"
              />
            </div>
         
          </div>
        </div>
        {/* <img src="" alt="" />
           <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={AboutUsImg}
                alt="About Us"
              /> */}
      </div>
    </section>
  );
};

export default AboutUs;
