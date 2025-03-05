import React from "react";
import AboutUsImg from "../../assets/plumeriaresortimages/aboutus_img.jpg"; // Ensure you have the correct image path
import SecondAbout from "../../assets/plumeriaresortimages/about_jpg.jpg"
import AboutThree from "../../assets/plumeriaresortimages/about.jpg"
// import AboutFour from "../../assets/plumeriaresortimages/aboutFour.jpg"
// const AboutUs = () => {
//   return (
//     <section style={{backgroundImage:'',background:' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(255,253,210,1) 0%, rgba(255,255,255,1) 65%)'}} className=" py-32 relative xl:mr-0 lg:mr-5 mr-0 bg-gray-50">
//       <div className="w-full max-w-7xl px-6 md:px-8 mx-auto">
//         <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
//           {/* Left Content */}
//           <div className="flex flex-col justify-center lg:items-start items-center gap-8">
//             <h6 className="text-gray-800 font-semibold text-5xl leading-tight text-center lg:text-left">
//               About Us
//             </h6>
//             <p className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-3xl p-8 text-gray-700 text-lg leading-relaxed transition-all duration-700 ease-in-out text-center lg:text-left">
//               At our resort, we believe in providing a perfect blend of comfort,
//               luxury, and nature. Nestled amidst the breathtaking landscapes of
//               Coorg, we offer an idyllic retreat for those seeking tranquility,
//               adventure, and rejuvenation. Our thoughtfully designed
//               accommodations let you unwind and connect with nature, while our
//               personalized services ensure every moment of your stay is
//               exceptional. Whether you’re here to explore, indulge, or simply
//               relax, we are committed to offering an unforgettable experience.
//               Come, escape the ordinary, and immerse yourself in the
//               extraordinary at our resort.
//             </p>

//             {/* Contact Button */}
//             <button className="flex items-center gap-2 bg-sky-400 hover:bg-sky-700 ml-10 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-all duration-500 ease-in-out transform hover:scale-105">
//               Contact Us
//               <svg
//                 className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 18 18"
//                 fill="none"
//               >
//                 <path
//                   d="M6.75 4.5L11.25 9L6.75 13.5"
//                   stroke="white"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//           {/* Right Image Section */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative sm:w-[450px] sm:h-[400px] w-full h-full rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                 src={AboutUsImg}
//                 alt="About Us"
//               />
//             </div>
         
//           </div>
//         </div>
//         {/* <img src="" alt="" />
//            <img
//                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                 src={AboutUsImg}
//                 alt="About Us"
//               /> */}
//       </div>
//     </section>
//   );
// };

// import Image from "next/image"
// import Link from "next/link"

const   AboutUs=()=> {
  return (
    <>
      <div className='w-screen h-[460px] bg-slate-800 relative'>
        <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-6xl font-bold text-white">ABOUT US</h1>
        </div>
        <img 
            className="w-full h-full object-cover" 
            src="https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="" 
          />    
        </div>


    <div  style={{background: ' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,248,142,1) 0%, rgba(255,251,173,1) 1%, rgba(227,227,227,1) 95%)'}} className="relative bg-[#276472] px-4 py-16 md:px-8 lg:px-16 overflow-hidden ">
      {/* Background map outline */}
      <div className=" absolute inset-0 opacity-10 pointer-events-none">
        <img src="/placeholder.svg?height=800&width=1200" alt="Map outline" fill className="object-cover" />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          {/* Left content */}
          <div className="space-y-6">
            {/* <h3 className="text-Black text-5xl font-bold">ABOUT US</h3> */}

            {/* <h2 className="text-5xl font-bold leading-tight text-black">We can help you feel more comfortable !</h2> */}

            <div className="flex items-start gap-4 mt-8">
              {/* <div className="text-4xl font-serif text-gray-700">M</div> */}
              <div className="text-gray-700">
                <p className="mb-4 text-2xl">
                At our resort, we believe in providing a perfect blend of comfort, luxury, and nature. Nestled 
                  amidst the breathtaking landscapes of Coorg, we offer an idyllic retreat for those seeking 
                  tranquility, adventure, and rejuvenation. Our resort features thoughtfully designed 
                  accommodations that allow you to unwind and connect with nature, while our personalized 
                  services ensure every moment of your stay is exceptional. Whether you’re here to explore the
                </p>
                {/* <p className="mb-4">
                  Ut enim ad minima Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur.
                  </p>
                <p className="mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab
                  </p> */}
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-[#3EB7B7] text-white px-8 py-3 rounded-md font-medium hover:bg-[#35a0a0] transition-colors"
                >
                Contact Us
              </a>
            </div>

            <div className="mt-12 border-t border-gray-300"></div>
          </div>

          {/* Right image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-2 border-2 border-white bg-white p-2">
              <div className="col-span-2">
                <img
                  src={AboutUsImg}
                  alt="Sunset with palm trees"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                  />
              </div>
              <div>
                <img
                  src={SecondAbout}
                  alt="Hotel facility"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                  />
              </div>
              <div>
                <img
                  src={AboutThree}
                  alt="Swimming pool"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                  />
              </div>
              {/* <div className="col-span-2">
                <img
                  src={AboutFour}
                  alt="Person floating in pool"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                  />
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
                  </>
  )
}

export default AboutUs;
