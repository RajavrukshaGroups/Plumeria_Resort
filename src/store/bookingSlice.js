// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   selectedPlan: {}, // Store plans for multiple rooms
// };

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
    
//     setRoom: (state, action) => {
//       const { roomId, roomType, roomPrice, extraAdultPrice, persons, adults, children, planName } = action.payload;

//       // Check if room already exists
//       const existingRoomIndex = state.rooms.findIndex((room) => room.roomId === roomId);

//       if (existingRoomIndex !== -1) {
//         // Update existing room details
//         state.rooms[existingRoomIndex] = {
//           ...state.rooms[existingRoomIndex],
//           roomType,
//           roomPrice,
//           extraAdultPrice,
//           persons,
//           adults,
//           children,
//           planName,
//         };
//       } else {
//         // Add a new room
//         state.rooms.push({
//           roomId,
//           roomType,
//           roomPrice,
//           extraAdultPrice,
//           persons,
//           adults,
//           children,
//           planName,
//         });
//       }

//       // Recalculate total price
//       state.totalPrice = state.rooms.reduce((total, room) => total + (room.roomPrice || 0) + (room.extraAdultPrice || 0), 0);
//     },
    

    
//     setPlan: (state, action) => {
//       const { roomId, plan } = action.payload;
//       state.selectedPlan = { [roomId]: plan }; // ✅ Always replace the previous selection
//     },  
//   },
// });

// export const { setPlan ,setRoom} = bookingSlice.actions;
// export default bookingSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   selectedPlan: {}, // Store plans for multiple rooms
//   rooms: [], // Initialize rooms array
//   totalPrice: 0,
// };

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     setRoom: (state, action) => {
//       const { roomId, roomType, roomPrice, extraAdultPrice, persons, adults, children, planName } = action.payload;

//       // Check if room already exists
//       const existingRoomIndex = state.rooms.findIndex((room) => room.roomId === roomId);

//       if (existingRoomIndex !== -1) {
//         // Update existing room details
//         state.rooms[existingRoomIndex] = {
//           ...state.rooms[existingRoomIndex],
//           roomType,
//           roomPrice,
//           extraAdultPrice,
//           persons,
//           adults,
//           children,
//           planName,
//         };
//       } else {
//         // Add a new room
//         state.rooms.push({
//           roomId,
//           roomType,
//           roomPrice,
//           extraAdultPrice,
//           persons,
//           adults,
//           children,
//           planName,
//         });
//       }

//       // Recalculate total price
//       state.totalPrice = state.rooms.reduce((total, room) => total + (room.roomPrice || 0) + (room.extraAdultPrice || 0), 0);
//     },
//     removeRoom: (state, action) => {
//       const roomId = action.payload;
//       state.rooms = state.rooms.filter((room) => room.roomId !== roomId);

//       // Recalculate total price
//       state.totalPrice = state.rooms.reduce((total, room) => total + (room.roomPrice || 0) + (room.extraAdultPrice || 0), 0);
//     },

//     setPlan: (state, action) => {
//       const { roomId, plan } = action.payload;
//       state.selectedPlan = { [roomId]: plan }; // ✅ Always replace the previous selection
//     },
//   },
// });

// export const { setPlan, setRoom } = bookingSlice.actions;
// export default bookingSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlan: {}, // Store plans for multiple rooms
  rooms: [], // Initialize rooms array
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setRoom: (state, action) => {
      const { roomId, roomType, roomPrice, extraAdultPrice, persons, adults, children, planName } = action.payload;

      // Check if room already exists
      const existingRoomIndex = state.rooms.findIndex((room) => room.roomId === roomId);

      if (existingRoomIndex !== -1) {
        // Update existing room details
        state.rooms[existingRoomIndex] = {
          ...state.rooms[existingRoomIndex],
          roomType,
          roomPrice,
          extraAdultPrice,
          persons,
          adults,
          children,
          planName,
        };
      } else {
        // Add a new room
        state.rooms.push({
          roomId,
          roomType,
          roomPrice,
          extraAdultPrice,
          persons,
          adults,
          children,
          planName,
        });
      }
      // Recalculate total price
      state.totalPrice = state.rooms.reduce((total, room) => total + (room.roomPrice || 0) + (room.extraAdultPrice || 0), 0);
    },

    removeRoom: (state, action) => {
      const roomId = action.payload;
      state.rooms = state.rooms.filter((room) => room.roomId !== roomId);

      // Recalculate total price
      state.totalPrice = state.rooms.reduce((total, room) => total + (room.roomPrice || 0) + (room.extraAdultPrice || 0), 0);
    },

    // setPlan: (state, action) => {
    //   const { roomId, plan } = action.payload;
    //   state.selectedPlan = { [roomId]: plan }; // ✅ Always replace the previous selection
    // },
    // setPlan: (state, action) => {
    //   const { roomId, plan } = action.payload;
    //   state.selectedPlan[roomId] = plan; // ✅ Store full plan object
    // },
    setPlan: (state, action) => {
      const { roomId, plan } = action.payload;
      // Store plan correctly under the specific roomId
      state.selectedPlan[roomId] = plan;
    },
      resetRooms: (state) => {
        state.rooms = [];
        state.totalPrice = 0;
    },
  },
});

export const { setPlan, setRoom, removeRoom ,resetRooms} = bookingSlice.actions;
export default bookingSlice.reducer;