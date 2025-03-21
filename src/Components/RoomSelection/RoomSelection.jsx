
// // export default RoomSelection;
// import React, { useState,useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaUsers, FaBed, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import YourStay from "../YourStay/YourStay";
// import RoomDetailsModal from "./RoomDetails";
// import { setPlan,updateRoomPrice,setRooms } from "../../store/bookingSlice";
// import { useLocation } from "react-router-dom";

// import VillaRoomImg1 from "../../assets/plumeriaresortimages/delRoom6.webp";
// import VillaRoomImg2 from "../../assets/plumeriaresortimages/deluxeRoomNew1.webp";
// import VillaRoomImg3 from "../../assets/plumeriaresortimages/deluxeRoom2.jpg";
// import DeluxeRoomImg1 from "../../assets/plumeriaresortimages/villaRoom2.jpg";
// import DeluxeRoomImg2 from "../../assets/plumeriaresortimages/delRoom1.jpg";
// import DeluxeRoomImg3 from "../../assets/plumeriaresortimages/delRoom10.jpg";

// const RoomSelection = ({ rooms }) => {


//   console.log("Rooms array:", rooms);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const currentStep = parseInt(queryParams.get("step")) || 1;
//   const currentRoomIndex = currentStep - 1;
//   // const selectedPlan = useSelector((state) => state.booking.selectedPlan);

//   if (
//     !rooms || rooms.length === 0 || currentRoomIndex < 0 ||
//     currentRoomIndex >= rooms.length
//   ) {
//     return null;
//   }

//   const currentRoom = rooms[currentRoomIndex] || {}; // Ensure it's an object
//   // console.log("Current Roomss:", currentRoomIndex);
//   console.log("Current Room nomber in room selection:", currentRoom.id);
//   if (!currentRoom) {
//     console.log("Current Room is undefined:", currentRoom);
//     return null;
//   }


//   console.log("Rooms Data: ", rooms);
//   // console.log("rooms-data", rooms);
//   const dispatch = useDispatch();
//   const selectedPlan = useSelector((state) => state.booking.selectedPlan);
//   console.log("Redux Selected Plan: ", selectedPlan);

//   const [selectedRoomType, setSelectedRoomType] = useState(null);
//   const [roomImageIndex, setRoomImageIndex] = useState({ Villa: 0, Deluxe: 0 });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   const roomImages = {
//     Villa: [VillaRoomImg1, VillaRoomImg2, VillaRoomImg3],
//     Deluxe: [DeluxeRoomImg1, DeluxeRoomImg2, DeluxeRoomImg3],
//   };


//   // const updatedRooms = rooms.map((room, index) => {
//   //   const roomKey = `${room.type}${room.id}`;
//   //   return {
//   //     ...room,
//   //     price: selectedPlan[roomKey]?.price || 0, // Assign the correct price
//   //   };
//   // });


//   const updatedRooms = rooms.map((room) => {
//     const roomKey = `${room.type}-${room.id}`; // Match with Redux key format
//     console.log("Room Key:", roomKey, "Selected Plan:", selectedPlan[roomKey]); 
  
//     return {
//       ...room,
//       price: selectedPlan[roomKey]?.price || 0, // Fetch price correctly
//     };
//   });
//   // console.log(updatedRooms,'updatedRooms');
  
  

//   const openModal = (roomType) => {
//     setSelectedRoom(roomType);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedRoom(null);
//   };

//   const handleImageChange = (roomType, direction) => {
//     setRoomImageIndex((prev) => {
//       const newIndex =
//         direction === "next"
//           ? (prev[roomType] + 1) % roomImages[roomType].length
//           : (prev[roomType] - 1 + roomImages[roomType].length) %
//             roomImages[roomType].length;
//       return { ...prev, [roomType]: newIndex };
//     });
//   };

// // const handleRoomSelect = (roomType, plan, roomId, storedRooms) => {
// //   console.log("Current Room Index:", currentRoomIndex);
// //   console.log("Room ID:", roomId);
// //   console.log("Plan Selected:", plan);

// //    if (!roomType || roomId === undefined) {
// //      console.error("Invalid room type or ID:", roomType, roomId );
// //      return;
// //    }

// //   const roomKey = `${roomType}-${roomId}`;
// //   console.log("Generated Room Key:", roomKey);
// //   // ✅ Retrieve previously stored rooms from localStorage if not provided
// //   let existingRooms = storedRooms || JSON.parse(localStorage.getItem("selectedRooms")) || [];
// //   console.log("🔹 Existing Selected Rooms:", existingRooms);
// //   // ✅ Update or add the selected room in the local storage array
// //   let updatedRooms = existingRooms.map((room) =>
// //     room.id === roomId ? { ...room, price: plan.price } : room
// //   );
// //   if (!updatedRooms.some((room) => room.id === roomId)) {
// //     updatedRooms.push({ id: roomId, price: plan.price });
// //   }
// //   console.log("✅ Updated Rooms Data:", updatedRooms);
// //   // ✅ Save updated rooms in localStorage
// //   localStorage.setItem("selectedRooms", JSON.stringify(updatedRooms));
// //   // ✅ Dispatch updated room details to Redux
// //   dispatch(setPlan({ roomId: roomKey, plan }));
// //   dispatch(updateRoomPrice({ roomId, price: plan.price }));
// //   // ✅ Calculate and store the total price
// //   const totalStoredPrice = updatedRooms.reduce((total, room) => total + room.price, 0);
// //   localStorage.setItem("totalPrice", JSON.stringify(totalStoredPrice));
// //   console.log("🛒 Updated Total Price in LocalStorage:", totalStoredPrice);
// //   // ✅ Store selected rooms in Redux as well
// //   dispatch(setRooms(updatedRooms));
// //   // ✅ Access the latest `selectedRooms` inside the function
// //   console.log("🔹 Final Selected Rooms inside function:", JSON.parse(localStorage.getItem("selectedRooms")));
// // };


// const saveSelectedRooms = (updatedRooms) => {
//   localStorage.setItem("selectedRooms", JSON.stringify(updatedRooms));
// };

// const handleRoomSelect = (roomType, plan, roomId) => {
//   if (!roomType || roomId === undefined) return;

//   const roomKey = `${roomType}-${roomId}`;
//   let existingRooms = JSON.parse(localStorage.getItem("selectedRooms")) || [];
  
//   // Update or insert room price
//   let updatedRooms = existingRooms.map((room) =>
//     room.id === roomId ? { ...room, price: plan.price } : room
//   );

//   if (!updatedRooms.some((room) => room.id === roomId)) {
//     updatedRooms.push({ id: roomId, price: plan.price });
//   }

//   // Save updates
//   saveSelectedRooms(updatedRooms);
//   localStorage.setItem("totalPrice", JSON.stringify(updatedRooms.reduce((total, room) => total + room.price, 0)));

//   // Dispatch Redux updates
//   dispatch(setPlan({ roomId: roomKey, plan }));
//   dispatch(updateRoomPrice({ roomId, price: plan.price }));
//   dispatch(setRooms(updatedRooms));
// };

// useEffect(() => {
//   console.log("Redux State Updated:", selectedPlan);
// }, [selectedPlan]);

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 w-full p-4">
//       <div className="flex flex-col gap-6 w-full lg:w-3/4">
//         {["Villa", "Deluxe"].map((roomType, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
//           >
//             <div className="relative w-full md:w-1/3 bg-white p-3 rounded-lg shadow-md">
//               <div className="relative">
//                 <img
//                   src={roomImages[roomType][roomImageIndex[roomType]]}
//                   alt={`${roomType} Room`}
//                   className="w-full h-[250px] md:h-[280px] rounded-lg object-cover transition-transform duration-300 ease-in-out"
//                 />
//                 <button
//                   onClick={() => handleImageChange(roomType, "prev")}
//                   className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80"
//                 >
//                   <FaChevronLeft />
//                 </button>
//                 <button
//                   onClick={() => handleImageChange(roomType, "next")}
//                   className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80"
//                 >
//                   <FaChevronRight />
//                 </button>
//               </div>

//               <div className="mt-4 bg-gray-100 p-3 rounded-lg text-center">
//                 <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800">
//                   <FaUsers className="text-[#a77a3a]" />
//                   <span>Up to 3 Guests</span>
//                 </div>
//                 <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800 mt-2">
//                   <FaBed className="text-[#a77a3a]" />
//                   <span>King Bed</span>
//                 </div>
//               </div>

//               <button
//                 onClick={() => openModal(roomType)}
//                 className="mt-3 w-full text-center text-[#a77a3a] font-bold text-sm border border-[#a77a3a] rounded-lg py-2 hover:bg-[#a77a3a] hover:text-white transition-all duration-300"
//               >
//                 VIEW ROOM DETAILS
//               </button>
//             </div>

//             <div className="w-full md:w-2/3">
//               <h2 className="text-lg font-bold text-[#a77a3a] mb-3">
//                 {roomType} Room
//               </h2>
//               {[
//                 {
//                   id: "lite",
//                   name: "Lite Plan",
//                   price: 17100,
//                   benefits: ["Room-only", "Wi-Fi included", "Taxes extra"],
//                 },
//                 {
//                   id: "plus",
//                   name: "Plus Plan",
//                   price: 18450,
//                   benefits: [
//                     "Buffet breakfast",
//                     "Wi-Fi included",
//                     "Taxes extra",
//                   ],
//                 },
//                 {
//                   id: "max",
//                   name: "Max Plan",
//                   price: 19999,
//                   benefits: ["All meals included", "Premium Wi-Fi", "Free Spa"],
//                 },
//               ].map((plan) => (
//                 <div
//                   key={plan.id}
//                   className="flex flex-col md:flex-row justify-between items-center border border-gray-300 p-3 rounded-lg bg-white shadow-sm mb-3"
//                 >
//                   <div className="w-full md:w-2/3">
//                     <h3 className="text-lg font-semibold text-[#a77a3a] bg-[#f8f1e3] px-3 py-1 rounded-md">
//                       {plan.name}
//                     </h3>
//                     <ul className="text-xs text-gray-700 mt-1">
//                       {plan.benefits.map((desc, i) => (
//                         <li
//                           key={i}
//                           className="text-base font-medium flex items-center gap-2"
//                         >
//                           <span className="text-[#a77a3a]">➤</span> {desc}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="w-full md:w-1/3 text-center mt-2 md:mt-0">
//                     <div className="text-sm font-bold mb-1 text-gray-900">
//                       ₹ {plan.price}
//                     </div>
//                     <button
//                       onClick={() => handleRoomSelect(roomType, plan, currentRoom.id)}
//                       className="bg-[#a77a3a] text-white py-2 px-4 rounded text-xs hover:bg-[#8c5f2a] transition-all duration-300"
//                     >
//                       Select
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pass updated selectedPlan to YourStay */}
//       <div className="w-full lg:w-1/4">
//         <YourStay rooms={updatedRooms} />
//       </div>

//       {isModalOpen && (
//         <RoomDetailsModal roomType={selectedRoom} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default RoomSelection;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { setPlan, updateRoomPrice, setRooms } from "../../store/bookingSlice"; // Import your Redux actions
// import { FaChevronLeft, FaChevronRight, FaUsers, FaBed } from "react-icons/fa";
// import YourStay from "../YourStay/YourStay";
// import RoomDetailsModal from "./RoomDetails";

// import VillaRoomImg1 from "../../assets/plumeriaresortimages/delRoom6.webp";
// import VillaRoomImg2 from "../../assets/plumeriaresortimages/deluxeRoomNew1.webp";
// import VillaRoomImg3 from "../../assets/plumeriaresortimages/deluxeRoom2.jpg";
// import DeluxeRoomImg1 from "../../assets/plumeriaresortimages/villaRoom2.jpg";
// import DeluxeRoomImg2 from "../../assets/plumeriaresortimages/delRoom1.jpg";
// import DeluxeRoomImg3 from "../../assets/plumeriaresortimages/delRoom10.jpg";

// const RoomSelection = ({ rooms }) => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const currentStep = parseInt(queryParams.get("step")) || 1;
//   const currentRoomIndex = currentStep - 1;
  
//   const selectedPlan = useSelector((state) => state.booking.selectedPlan);
//   const selectedRooms = useSelector((state) => state.booking.rooms);
  
//   if (!rooms || rooms.length === 0 || currentRoomIndex < 0 || currentRoomIndex >= rooms.length) {
//     return null;
//   }

//   const currentRoom = rooms[currentRoomIndex] || {};

//   const [roomImageIndex, setRoomImageIndex] = useState({ Villa: 0, Deluxe: 0 });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   const roomImages = {
//     Villa: [VillaRoomImg1, VillaRoomImg2, VillaRoomImg3],
//     Deluxe: [DeluxeRoomImg1, DeluxeRoomImg2, DeluxeRoomImg3],
//   };

//   const updatedRooms = rooms.map((room) => {
//     const roomKey = `${room.type}-${room.id}`;
//     return {
//       ...room,
//       price: selectedPlan[roomKey]?.price || 0,
//     };
//   });

//   const openModal = (roomType) => {
//     setSelectedRoom(roomType);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedRoom(null);
//   };

//   const handleImageChange = (roomType, direction) => {
//     setRoomImageIndex((prev) => {
//       const newIndex =
//         direction === "next"
//           ? (prev[roomType] + 1) % roomImages[roomType].length
//           : (prev[roomType] - 1 + roomImages[roomType].length) % roomImages[roomType].length;
//       return { ...prev, [roomType]: newIndex };
//     });
//   };

//   // const handleRoomSelect = (roomType, plan, roomId) => {
//   //   if (!roomType || roomId === undefined) return;

//   //   const roomKey = `${roomType}-${roomId}`;
//   //   let updatedRooms = selectedRooms.map((room) =>
//   //     room.id === roomId ? { ...room, price: plan.price } : room
//   //   );

//   //   if (!updatedRooms.some((room) => room.id === roomId)) {
//   //     updatedRooms.push({ id: roomId, price: plan.price });
//   //   }

//   //   dispatch(setPlan({ roomId: roomKey, plan }));
//   //   dispatch(updateRoomPrice({ roomId, price: plan.price }));
//   //   dispatch(setRooms(updatedRooms));
//   // };

//   const handleRoomSelect = (roomType, plan, roomId) => {
//     if (!roomType || roomId === undefined) return;
  
//     const roomKey = `${roomType}-${roomId}`;
  
//     // If the room is already selected, remove it; otherwise, add/update it
//     let updatedRooms = selectedRooms.filter((room) => room.id !== roomId);
  
//     if (!selectedRooms.some((room) => room.id === roomId)) {
//       updatedRooms.push({ id: roomId, price: plan.price });
//     }
  
//     dispatch(setPlan({ roomId: roomKey, plan: selectedRooms.some((room) => room.id === roomId) ? null : plan }));
//     dispatch(updateRoomPrice({ roomId, price: selectedRooms.some((room) => room.id === roomId) ? 0 : plan.price }));
//     dispatch(setRooms(updatedRooms));
//   };
  

//   useEffect(() => {
//     console.log("Redux State Updated:", selectedPlan);
//   }, [selectedPlan]);

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 w-full p-4">
//       <div className="flex flex-col gap-6 w-full lg:w-3/4">
//         {["Villa", "Deluxe"].map((roomType, index) => (
//           <div key={index} className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
//             <div className="relative w-full md:w-1/3 bg-white p-3 rounded-lg shadow-md">
//               <div className="relative">
//                 <img
//                   src={roomImages[roomType][roomImageIndex[roomType]]}
//                   alt={`${roomType} Room`}
//                   className="w-full h-[250px] md:h-[280px] rounded-lg object-cover transition-transform duration-300 ease-in-out"
//                 />
//                 <button onClick={() => handleImageChange(roomType, "prev")} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80">
//                   <FaChevronLeft />
//                 </button>
//                 <button onClick={() => handleImageChange(roomType, "next")} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80">
//                   <FaChevronRight />
//                 </button>
//               </div>

//               <div className="mt-4 bg-gray-100 p-3 rounded-lg text-center">
//                 <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800">
//                   <FaUsers className="text-[#a77a3a]" />
//                   <span>Up to 3 Guests</span>
//                 </div>
//                 <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800 mt-2">
//                   <FaBed className="text-[#a77a3a]" />
//                   <span>King Bed</span>
//                 </div>
//               </div>

//               <button onClick={() => openModal(roomType)} className="mt-3 w-full text-center text-[#a77a3a] font-bold text-sm border border-[#a77a3a] rounded-lg py-2 hover:bg-[#a77a3a] hover:text-white transition-all duration-300">
//                 VIEW ROOM DETAILS
//               </button>
//             </div>

//             <div className="w-full md:w-2/3">
//               <h2 className="text-lg font-bold text-[#a77a3a] mb-3">{roomType} Room</h2>
//               {[
//                 { id: "lite", name: "Lite Plan", price: 17100, benefits: ["Room-only", "Wi-Fi included", "Taxes extra"] },
//                 { id: "plus", name: "Plus Plan", price: 18450, benefits: ["Buffet breakfast", "Wi-Fi included", "Taxes extra"] },
//                 { id: "max", name: "Max Plan", price: 19999, benefits: ["All meals included", "Premium Wi-Fi", "Free Spa"] },
//               ].map((plan) => (
//                 <div key={plan.id} className="flex flex-col md:flex-row justify-between items-center border border-gray-300 p-3 rounded-lg bg-white shadow-sm mb-3">
//                   <div className="w-full md:w-2/3">
//                     <h3 className="text-lg font-semibold text-[#a77a3a] bg-[#f8f1e3] px-3 py-1 rounded-md">{plan.name}</h3>
//                     <ul className="text-xs text-gray-700 mt-1">
//                       {plan.benefits.map((desc, i) => (
//                         <li key={i} className="text-base font-medium flex items-center gap-2">
//                           <span className="text-[#a77a3a]">➤</span> {desc}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="w-full md:w-1/3 text-center mt-2 md:mt-0">
//                     <div className="text-sm font-bold mb-1 text-gray-900">₹ {plan.price}</div>
//                     <button onClick={() => handleRoomSelect(roomType, plan, currentRoom.id)} className="bg-[#a77a3a] text-white py-2 px-4 rounded text-xs hover:bg-[#8c5f2a] transition-all duration-300">
//                       Select
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="w-full lg:w-1/4">
//         <YourStay rooms={updatedRooms} />
//       </div>

//       {isModalOpen && <RoomDetailsModal roomType={selectedRoom} onClose={closeModal} />}
//     </div>
//   );
// };

// export default RoomSelection;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setPlan, updateRoomPrice, setRooms ,deleteRoom} from "../../store/bookingSlice"; // Import your Redux actions
import { FaChevronLeft, FaChevronRight, FaUsers, FaBed } from "react-icons/fa";
import YourStay from "../YourStay/YourStay";
import RoomDetailsModal from "./RoomDetails";

import VillaRoomImg1 from "../../assets/plumeriaresortimages/delRoom6.webp";
import VillaRoomImg2 from "../../assets/plumeriaresortimages/deluxeRoomNew1.webp";
import VillaRoomImg3 from "../../assets/plumeriaresortimages/deluxeRoom2.jpg";
import DeluxeRoomImg1 from "../../assets/plumeriaresortimages/villaRoom2.jpg";
import DeluxeRoomImg2 from "../../assets/plumeriaresortimages/delRoom1.jpg";
import DeluxeRoomImg3 from "../../assets/plumeriaresortimages/delRoom10.jpg";

const RoomSelection = ({ rooms }) => {
  
  console.log("Rooms array inside roomselection:", rooms);
  
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentStep = parseInt(queryParams.get("step")) || 1;
  const currentRoomIndex = currentStep - 1;
  
  const selectedPlan = useSelector((state) => state.booking.selectedPlan);
  const selectedRooms = useSelector((state) => state.booking.rooms);
  
  if (!rooms || rooms.length === 0 || currentRoomIndex < 0 || currentRoomIndex >= rooms.length) {
    return null;
  }

  const currentRoom = rooms[currentRoomIndex] || {};

  const [roomImageIndex, setRoomImageIndex] = useState({ Villa: 0, Deluxe: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const roomImages = {
    Villa: [VillaRoomImg1, VillaRoomImg2, VillaRoomImg3],
    Deluxe: [DeluxeRoomImg1, DeluxeRoomImg2, DeluxeRoomImg3],
  };

  const updatedRooms = rooms.map((room) => {
    const roomKey = `${room.type}-${room.id}`;
    return {
      ...room,
      price: selectedPlan[roomKey]?.price || 0,
    };
  });
  
    console.log(updatedRooms,'updatedRooms');

  const openModal = (roomType) => {
    setSelectedRoom(roomType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  const handleImageChange = (roomType, direction) => {
    setRoomImageIndex((prev) => {
      const newIndex =
        direction === "next"
          ? (prev[roomType] + 1) % roomImages[roomType].length
          : (prev[roomType] - 1 + roomImages[roomType].length) % roomImages[roomType].length;
      return { ...prev, [roomType]: newIndex };
    });
  };

    // const handleRoomSelect = (roomType, plan, roomId) => {
    //   dispatch(deleteRoom(roomId)); // Remove from Redux state
    //   if (!roomType || roomId === undefined) return;

    //   const roomKey = `${roomType}-${roomId}`;
    //   let updatedRooms = selectedRooms.map((room) =>
    //     room.id === roomId ? { ...room, price: plan.price } : room
    //   );

    //   if (!updatedRooms.some((room) => room.id === roomId)) {
    //     updatedRooms.push({ id: roomId, price: plan.price });
    //   }

    //   dispatch(setPlan({ roomId: roomKey, plan }));
    //   dispatch(updateRoomPrice({ roomId, price: plan.price }));
    //   dispatch(setRooms(updatedRooms));
      
    // };

    // const handleRoomSelect = (roomType, plan, roomId) => {
    //   if (!roomType || roomId === undefined) return;
    
    //   const roomKey = `${roomType}-${roomId}`;
    
    //   // Remove the room from selectedRooms
    //   let updatedRooms = selectedRooms.filter((room) => room.id !== roomId);
    
    //   if (plan) {
    //     updatedRooms.push({ id: roomId, price: plan.price });
    //     dispatch(setPlan({ roomId, plan }));  // Use roomId directly here
    //     dispatch(updateRoomPrice({ roomId, price: plan.price }));
    //   } else {
    //     dispatch(deleteRoom(roomId));  // Remove room if plan is null
    //   }
    //   console.log("Updated Rooms before dispatch:", updatedRooms);
    //   dispatch(setRooms(updatedRooms));
    // };

    // const handleRoomSelect = (roomType, plan, roomId) => {

    //   if (!roomType || roomId === undefined) return;
    
    //   console.log("Before Selection: ", selectedRooms);
    //   console.log("Selected Room Type:", roomType);
    //   console.log("Selected Plan:", plan);
    //   console.log("Selected Room ID:", roomId);
    
    //   let updatedRooms = selectedRooms.filter((room) => room.id !== roomId);
    
    //   if (plan) {
    //     updatedRooms.push({ id: roomId, price: plan.price });
    //     dispatch(setPlan({ roomId, plan }));
    //     dispatch(updateRoomPrice({ roomId, price: plan.price }));
    //   } else {
    //     console.log("Dispatching deleteRoom for ID:", roomId);
    //     dispatch(deleteRoom(roomId));  
    //   }
    
    //   console.log("Updated Rooms before dispatch:", updatedRooms);
    //   dispatch(setRooms(updatedRooms));
    // };


    const handleRoomSelect = (roomType, plan, roomId) => {
      if (!roomType || roomId === undefined) return;
    
      const roomKey = `${roomType}-${roomId}`;
      
      // Remove the room from selectedRooms
      let updatedRooms = selectedRooms.filter((room) => room.id !== roomId);
      
      if (plan) {
        updatedRooms.push({ id: roomId, price: plan.price });
        dispatch(setPlan({ roomId, plan }));  // Use roomId directly here
        dispatch(updateRoomPrice({ roomId, price: plan.price }));
      } else {
        console.log("Dispatching deleteRoom for ID:", roomId);
        dispatch(deleteRoom(roomId));  // Remove room if plan is null
      }
      
      console.log("Updated Rooms before dispatch:", updatedRooms);
      dispatch(setRooms(updatedRooms));
    };
    
    

  useEffect(() => {
    console.log("Redux State Updated:", selectedPlan);
  }, [selectedPlan]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full p-4">
      <div className="flex flex-col gap-6 w-full lg:w-3/4">
        {["Villa", "Deluxe"].map((roomType, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="relative w-full md:w-1/3 bg-white p-3 rounded-lg shadow-md">
              <div className="relative">
                <img
                  src={roomImages[roomType][roomImageIndex[roomType]]}
                  alt={`${roomType} Room`}
                  className="w-full h-[250px] md:h-[280px] rounded-lg object-cover transition-transform duration-300 ease-in-out"
                />
                <button onClick={() => handleImageChange(roomType, "prev")} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80">
                  <FaChevronLeft />
                </button>
                <button onClick={() => handleImageChange(roomType, "next")} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white text-lg hover:bg-black/80">
                  <FaChevronRight />
                </button>
              </div>

              <div className="mt-4 bg-gray-100 p-3 rounded-lg text-center">
                <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800">
                  <FaUsers className="text-[#a77a3a]" />
                  <span>Up to 3 Guests</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg font-semibold text-gray-800 mt-2">
                  <FaBed className="text-[#a77a3a]" />
                  <span>King Bed</span>
                </div>
              </div>

              <button onClick={() => openModal(roomType)} className="mt-3 w-full text-center text-[#a77a3a] font-bold text-sm border border-[#a77a3a] rounded-lg py-2 hover:bg-[#a77a3a] hover:text-white transition-all duration-300">
                VIEW ROOM DETAILS
              </button>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-lg font-bold text-[#a77a3a] mb-3">{roomType} Room</h2>
              {[
                { id: "lite", name: "Lite Plan", price: 17100, benefits: ["Room-only", "Wi-Fi included", "Taxes extra"] },
                { id: "plus", name: "Plus Plan", price: 18450, benefits: ["Buffet breakfast", "Wi-Fi included", "Taxes extra"] },
                { id: "max", name: "Max Plan", price: 19999, benefits: ["All meals included", "Premium Wi-Fi", "Free Spa"] },
              ].map((plan) => (
                <div key={plan.id} className="flex flex-col md:flex-row justify-between items-center border border-gray-300 p-3 rounded-lg bg-white shadow-sm mb-3">
                  <div className="w-full md:w-2/3">
                    <h3 className="text-lg font-semibold text-[#a77a3a] bg-[#f8f1e3] px-3 py-1 rounded-md">{plan.name}</h3>
                    <ul className="text-xs text-gray-700 mt-1">
                      {plan.benefits.map((desc, i) => (
                        <li key={i} className="text-base font-medium flex items-center gap-2">
                          <span className="text-[#a77a3a]">➤</span> {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 text-center mt-2 md:mt-0">
                    <div className="text-sm font-bold mb-1 text-gray-900">₹ {plan.price}</div>
                    <button onClick={() => handleRoomSelect(roomType, plan, currentRoom.id)} className="bg-[#a77a3a] text-white py-2 px-4 rounded text-xs hover:bg-[#8c5f2a] transition-all duration-300">
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/4">
        <YourStay rooms={updatedRooms} />
      </div>

      {isModalOpen && <RoomDetailsModal roomType={selectedRoom} onClose={closeModal} />}
    </div>
  );
};

export default RoomSelection;

