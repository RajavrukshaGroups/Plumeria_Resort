import React from "react";

function Services() {
    return (
      <>
        <div className="w-screen h-[400px] bg-slate-800 relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-6xl font-bold text-white">services</h1>
          </div>
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
  
        <div className="relative w-full min-h- bg-sky-50 p-4 md:p-8 lg:px-32 lg:py-12 flex flex-col md:flex-row items-start justify-between overflow-hidden">
          <div className="px-4 sm:px-24 pt-[100px] relative z-10 max-w-5xl w-full lg:w-3/4 xl:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <div className="h-[233px] w-[340px] md:col-span-6 md:col-start-2 md:-mt-32 relative z-20 overflow-hidden rounded-lg border-4 border-white shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1654760/pexels-photo-1654760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Person floating in a tropical pool surrounded by palm trees"
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
  
              <div className="h-[233px] w-[340px] md:col-span-6 md:-mt-16 relative z-20 overflow-hidden rounded-lg border-4 border-white shadow-lg">
                <img
                  src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Infinity pool with ocean view at dusk"
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto mt-8 md:mt-0">
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,248,142,1) 0%, rgba(255,251,173,1) 1%, rgba(227,227,227,1) 95%)",
              }}
              className="flex p-5 flex-col rounded-3xl items-center h-auto md:h-[350px] w-full md:w-1/2"
            >
              <h1 className="font-bold text-4xl mx-[1px] pb-5">Deluxe Rooms</h1>
              <ul className="list-disc pl-8">
                <li className="text-1xl font-bold">
                  Our Spacious Deluxe Rooms offer an elevated experience with
                  generous space,
                </li>
                <li className="text-1xl font-bold">
                  designed to provide ultimate comfort and relaxation.
                </li>
                <li className="text-1xl font-bold">
                  These rooms feature larger living areas
                </li>
                <li className="text-1xl font-bold">
                  luxurious furnishings, and stunning views, making them the
                  perfect choice
                </li>
              </ul>
            </div>


            {/* <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,248,142,1) 0%, rgba(255,251,173,1) 1%, rgba(227,227,227,1) 95%)",
              }}
              className="flex p-5 flex-col w-[400px] rounded-3xl items-center h-auto md:h-[350px] md:w-1/2"
            > */}
            <div
                style={{
                    background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,248,142,1) 0%, rgba(255,251,173,1) 1%, rgba(227,227,227,1) 95%)",
                }}
                className="flex p-5 flex-col rounded-3xl items-center h-auto md:h-[350px] w-full md:w-1/2"
                >
              <h1 className="font-bold text-4xl mx-[1px] pb-5">Villa Rooms</h1>
              <ul className="list-disc pl-8">
                <li className="text-1xl font-bold">
                  The Individual Villa Rooms provide a more private and intimate
                  experience,
                </li>
                <li className="text-1xl font-bold">
                  nestled within beautifully landscaped surroundings.
                </li>
                <li className="text-1xl font-bold">
                  Each villa is designed with its own unique charm
                </li>
                <li className="text-1xl font-bold">
                  Our Individual Villa Rooms feature a charming portico,
                </li>
              </ul>
            </div>
          </div>
        </div>
  
      
      
      </>
    );
  }
  
  export default Services;
