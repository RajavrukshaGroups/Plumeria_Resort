// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./YourStay.css";
// import { useSelector } from "react-redux";

// const YourStay = ({ rooms }) => {
//   console.log("Rooms array:", rooms);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const currentStep = parseInt(queryParams.get("step")) || 1;
//   const currentRoomIndex = currentStep - 1;
//   const selectedPlan = useSelector((state) => state.booking.selectedPlan);

//   if (
//     !rooms ||
//     rooms.length === 0 ||
//     currentRoomIndex < 0 ||
//     currentRoomIndex >= rooms.length
//   ) {
//     return null;
//   }

//   const currentRoom = rooms[currentRoomIndex] || {}; // Ensure it's an object
//   console.log("Current Room:", currentRoom);
//   console.log("Current Room Type:", currentRoom?.type);
//   if (!currentRoom) {
//     console.log("Current Room is undefined:", currentRoom);
//     return null;
//   }

//     const roomKey = Object.keys(selectedPlan)[0] || null;
//     const currentRoomPlan = roomKey ? selectedPlan[roomKey] : null;

//   // const roomKey = `${currentRoom.type}${currentRoom.id}`;
//   // const currentRoomPlan = selectedPlan[roomKey] || null;

//   return (


// <>
// <div className="your-stay-summary">
//       <h2>Your Stay</h2>
//       {rooms.map((room, index) => (
//         <div key={index} className="room-summary">
//           <p>Room Type: {room.type}</p>
//           <p>Price: ₹ {room.price}</p>
//         </div>
//       ))}
//     </div>

    
//     <div className="your-stay-container shadow-lg rounded-lg p-5 bg-white">
//       <h3 className="your-stay-title text-lg font-bold text-[#a77a3a] border-b pb-2 mb-3">
//         YOUR STAY
//       </h3>

//       <div className="stay-details space-y-2">
//         <p className="text-gray-700 text-sm font-medium flex flex-wrap items-center gap-x-2">
//           <span>Room {currentRoom?.id}:</span>
//           <span className="font-semibold text-gray-900">
//             {currentRoom?.persons} Persons, {currentRoom?.adults} Extra Adults,{" "}
//             {currentRoom?.children} Children
//           </span>
//         </p>

//         {/* Corrected price selection */}
//         <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
//           <span className="text-gray-600">Price:</span>
//           <span className="text-[#a77a3a]">
//             ₹ {currentRoomPlan ? currentRoomPlan.price : "0.00"}
//           </span>
//         </div>

//         <div className="stay-taxes text-gray-800 text-base font-semibold flex justify-between items-center">
//           <span className="text-gray-600">Taxes and Fees:</span>
//           <span className="text-red-500">₹ 0.00</span>
//         </div>

//         <div className="stay-total text-lg font-bold flex justify-between items-center border-t pt-2">
//           <span className="text-gray-700">Total Amount:</span>
//           <span className="text-[#a77a3a]">
//             ₹ {currentRoomPlan ? currentRoomPlan.price : "0.00"}
//           </span>
//         </div>
//       </div>
//     </div>
// </>
//   );
// };

// export default YourStay;

// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./YourStay.css";
// import { useSelector } from "react-redux";

// const YourStay = ({totalPrice, rooms }) => {
//   const selectedRooms = useSelector((state) => state.booking.selectedRooms);
// console.log("Selected Rooms from Redux: ", selectedRooms);
//   console.log("Rooms array:", rooms);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const currentStep = parseInt(queryParams.get("step")) || 1;
//   const currentRoomIndex = currentStep - 1;
//   const selectedPlan = useSelector((state) => state.booking.selectedPlan);

//   if (
//     !rooms ||
//     rooms.length === 0 ||
//     currentRoomIndex < 0 ||
//     currentRoomIndex >= rooms.length
//   ) {
//     return null;
//   }

//   const currentRoom = rooms[currentRoomIndex] || {}; // Ensure it's an object
//   console.log("Current Room:", currentRoom);
//   console.log("Current Room Type:", currentRoom.id);
//   if (!currentRoom) {
//     console.log("Current Room is undefined:", currentRoom);
//     return null;
//   }

//   const roomKey = `${currentRoom.type}${currentRoom.id}`;
//   const currentRoomPlan = selectedPlan[roomKey] || null;

//   return (
//     <div className="your-stay-container shadow-lg rounded-lg p-5 bg-white">
//       <h3 className="your-stay-title text-lg font-bold text-[#a77a3a] border-b pb-2 mb-3">
//         YOUR STAY
//       </h3>

//       <div>
//             <h2>Your Stay Summary</h2>
//             <p>Total Price: ${totalPrice}</p>
//         </div>

//       <div className="stay-details space-y-2">
//         <p className="text-gray-700 text-sm font-medium flex flex-wrap items-center gap-x-2">
//           <span>Room {currentRoom?.id}:</span>
//           <span className="font-semibold text-gray-900">
//             {currentRoom?.persons} Persons, {currentRoom?.adults} Extra Adults,{" "}
//             {currentRoom?.children} Children
//           </span>
//         </p>

//         {/* Corrected price selection */}
//         <div className="stay-price text-gray-800 text-base font-semibold flex justify-between items-center">
//           <span className="text-gray-600">Price:</span>
//           <span className="text-[#a77a3a]">
//             ₹ {currentRoomPlan ? currentRoomPlan.price : "0.00"}
//           </span>
//         </div>

//         <div className="stay-taxes text-gray-800 text-base font-semibold flex justify-between items-center">
//           <span className="text-gray-600">Taxes and Fees:</span>
//           <span className="text-red-500">₹ 0.00</span>
//         </div>

//         <div className="stay-total text-lg font-bold flex justify-between items-center border-t pt-2">
//           <span className="text-gray-700">Total Amount:</span>
//           <span className="text-[#a77a3a]">
//             ₹ {currentRoomPlan ? currentRoomPlan.price : "0.00"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourStay;

// import React,{useEffect} from "react";
// import { useSelector,useDispatch } from "react-redux";
// import {setRooms } from "../../store/bookingSlice"; // Import your Redux actions


// const YourStay = ({rooms}) => {
//   // Fetch selected rooms and total price from Redux store
// console.log(rooms, "rooms in your stay");
//   // Fetch selected rooms and total price from Redux store
//   const selectedRooms = useSelector((state) => state.booking.rooms);
//   // const totalPrice = useSelector((state) => state.booking.totalPrice);
//   const dispatch = useDispatch();
//   console.log(selectedRooms,'selectedrooms inside the your stay');

//   useEffect(() => {
//     console.log("Redux State Updateddddddd:", selectedRooms);
//   }, [selectedRooms]);

//   // Filter selected rooms to only include those present in the rooms prop
//   const filteredSelectedRooms = selectedRooms.filter((room) =>
//     rooms.some((r) => r.id === room.id)
//   );

//   const totalPrice = filteredSelectedRooms.reduce((sum, room) => sum + (room.price || 0), 0);

  
//   console.log(filteredSelectedRooms,'filtered rooms');
//   const filteredTotalPrice = filteredSelectedRooms.reduce(
//     (total, room) => total + (room.price || 0),
//     0
//   );

//         // dispatch(setRooms(filteredSelectedRooms));

// // useEffect(() => {
// //   console.log("Redux State Updated: Selected Rooms:", selectedRooms);
// //   console.log("Redux State Updated: Total Price:", totalPrice);
// // }, [selectedRooms, totalPrice]);


//   return (
//     <div className="your-stay-container shadow-lg rounded-lg p-5 bg-white">
//     <h3 className="your-stay-title text-lg font-bold text-[#a77a3a] border-b pb-2 mb-3">
//       YOUR STAY
//     </h3>

//     <div className="stay-details space-y-2">
//       {filteredSelectedRooms.length > 0 ? (
//         filteredSelectedRooms.map((room) => (
//           <div key={room.id} className="border-b pb-2 mb-2">
//             <p className="text-gray-700 text-sm font-medium">
//               <span className="font-semibold text-gray-900">Room {room.id}:</span>
//               {room.persons} Persons, {room.adults} Adults, {room.children} Children
//             </p>

//             <div className="stay-price text-gray-800 text-base font-semibold flex justify-between">
//               <span className="text-gray-600">Room Price:</span>
//               <span className="text-[#a77a3a]">₹ {room.price ? room.price : "0.00"}</span>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-gray-500 text-sm">No rooms selected yet.</p>
//       )}

//       {/* Taxes & Total */}
//       <div className="stay-taxes text-gray-800 text-base font-semibold flex justify-between items-center">
//         <span className="text-gray-600">Taxes and Fees:</span>
//         <span className="text-red-500">₹ 0.00</span>
//       </div>

//       <div className="stay-total text-lg font-bold flex justify-between items-center border-t pt-2">
//         <span className="text-gray-700">Total Amount:</span>
//         <span className="text-[#a77a3a]">₹ {totalPrice ? totalPrice : "0.00"}</span>
//       </div>
//     </div>
//   </div>
//   );
// };


// export default YourStay;


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRoomss } from "../../store/bookingSlice"; // Import your Redux actions

const YourStay = ({ rooms }) => {
  console.log(rooms, "rooms in your stay");

  // Fetch selected rooms and total price from Redux store
  const selectedRooms = useSelector((state) => state.booking.rooms);
  const totalPrice = useSelector((state) => state.booking.totalPrice);
  const dispatch = useDispatch();

  console.log(selectedRooms, "selected rooms inside the your stay");

  useEffect(() => {
    console.log("Redux State Updated:", selectedRooms);
  }, [selectedRooms]);

  // Filter selected rooms to only include those present in the `rooms` prop
  const filteredSelectedRooms = selectedRooms.filter((room) =>
    rooms.some((r) => r.id === room.id)
  );

  console.log(filteredSelectedRooms, "filtered rooms");

  // Calculate the total price based on filtered rooms
  const filteredTotalPrice = filteredSelectedRooms.reduce(
    (total, room) => total + (room.price || 0),
    0
  );

  return (
    <div className="your-stay-container shadow-lg rounded-lg p-5 bg-white">
      <h3 className="your-stay-title text-lg font-bold text-[#a77a3a] border-b pb-2 mb-3">
        YOUR STAY
      </h3>

      <div className="stay-details space-y-2">
        {filteredSelectedRooms.length > 0 ? (
          filteredSelectedRooms.map((room) => (
            <div key={room.id} className="border-b pb-2 mb-2">
              <p className="text-gray-700 text-sm font-medium">
                <span className="font-semibold text-gray-900">Room {room.id}:</span>
                {room.persons} Persons, {room.adults} Adults, {room.children} Children
              </p>

              <div className="stay-price text-gray-800 text-base font-semibold flex justify-between">
                <span className="text-gray-600">Room Price:</span>
                <span className="text-[#a77a3a]">₹ {room.price ? room.price : "0.00"}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No rooms selected yet.</p>
        )}

        {/* Taxes & Total */}
        <div className="stay-taxes text-gray-800 text-base font-semibold flex justify-between items-center">
          <span className="text-gray-600">Taxes and Fees:</span>
          <span className="text-red-500">₹ 0.00</span>
        </div>

        <div className="stay-total text-lg font-bold flex justify-between items-center border-t pt-2">
          <span className="text-gray-700">Total Amount:</span>
          <span className="text-[#a77a3a]">₹ {filteredTotalPrice ? filteredTotalPrice : "0.00"}</span>
        </div>
      </div>
    </div>
  );
};

export default YourStay;
