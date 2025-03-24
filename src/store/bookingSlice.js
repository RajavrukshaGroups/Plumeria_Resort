// import { createSlice } from "@reduxjs/toolkit";
// // Load initial data from 

// const loadFromLocalStorage = () => {
//   try {
//     const data = localStorage.getItem("bookingState");
//     return data ? JSON.parse(data) : { selectedPlan: {}, rooms: [], totalPrice: 0 };
//   } catch (error) {
//     console.error("Error loading from localStorage", error);
//     return { selectedPlan: {}, rooms: [], totalPrice: 0 } ;
//   }
// } ;

// // Save data to localStorage
// const saveToLocalStorage = (state) => {
//   try {
//     localStorage.setItem("bookingState", JSON.stringify(state));
//   } catch (error) {
//     console.error( "Error saving to localStorage", error) ;
//   }
// };

// const initialState = loadFromLocalStorage();

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     setPlan: (state, action) => {
//       const { roomId, plan } = action.payload;
//       state.selectedPlan[roomId] = plan;

//       // Update total price based on selected plans
//       state.totalPrice = Object.values(state.selectedPlan).reduce(
//         (total, plan) => total + (plan.price || 0), 0
//       );
//       saveToLocalStorage(state);
//     },

//     updateRoomPrice: (state, action) => {
//       const { roomId, price } = action.payload;
//       const existingRoom = state.rooms.find((room) => room.id === roomId);

//       if (existingRoom) {
//         existingRoom.price = price;
//       } else {
//         state.rooms.push({ id: roomId, price });
//       }

//       // Recalculate total price
//       state.totalPrice = state.rooms.reduce((total, room) => total + (room.price || 0), 0);
//       saveToLocalStorage(state);
//     },

//     setRooms: (state, action) => {
//       state.rooms = action.payload;

//       // Ensure the total price is set when rooms are initialized
//       state.totalPrice = action.payload.reduce((total, room) => total + (room.price || 0), 0);
//       saveToLocalStorage(state);
//     },

//     resetBooking: (state) => {
//       state.selectedPlan = {};
//       state.rooms = [];
//       state.totalPrice = 0;
//       saveToLocalStorage(state);
//     },
//   },
// });

// export const { setPlan, updateRoomPrice, setRooms, resetBooking } = bookingSlice.actions;
// export default bookingSlice.reducer;


// import { createSlice} from "@reduxjs/toolkit";
// const initialState = {
//   selectedPlan: {},
//   rooms: [],
//   totalPrice: 0,
// };

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     setPlan: (state, action) => {
//       const { roomId, plan } = action.payload;
//       state.selectedPlan[roomId] = plan;

//       // Update total price based on selected plans
//       state.totalPrice = Object.values(state.selectedPlan).reduce(
//         (total, plan) => total + (plan.price || 0), 0
//       );
//     },

//     updateRoomPrice: (state, action) => {
//       const { roomId, price } = action.payload;
//       const existingRoom = state.rooms.find((room) => room.id === roomId);
//       if (existingRoom) {
//         existingRoom.price = price;
//       } else{
//         state.rooms.push({ id: roomId, price });
//       }

//       // Recalculate total price
//       state.totalPrice = state.rooms.reduce((total, room) => total + (room.price || 0), 0);
//     },

//     setRooms: (state, action) => {
//       state.rooms = action.payload;

//       // Ensure the total price is set when rooms are initialized
//       state.totalPrice = action.payload.reduce((total, room) => total + (room.price || 0), 0);
//     },

//     // deleteRoom: (state, action) => {
//     //   state.rooms = state.rooms.filter(room => room.id !== action.payload);
//     // },
    
//     deleteRoom: (state, action) => {
//       console.log("Before Deletion:", state.rooms);
//       console.log("Deleting Room ID:", action.payload);
    
//       state.rooms = state.rooms.filter(room => room.id !== action.payload);
    
//       console.log("After Deletion:", state.rooms);
//     },
    

//     resetBooking: (state) => {
//       state.selectedPlan = {};
//       state.rooms = [];
//       state.totalPrice = 0;
//     },
//   },
// });

// export const { setPlan, updateRoomPrice, setRooms, resetBooking,deleteRoom } = bookingSlice.actions;
// export default bookingSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   selectedPlan: {},
//   rooms: [],
//   totalPrice: 0,
// };

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     setPlan: (state, action) => {
//       const { roomId, plan } = action.payload;
//       state.selectedPlan[roomId] = plan;

//       // Update total price based on selected plans
//       state.totalPrice = Object.values(state.selectedPlan).reduce(
//         (total, plan) => total + (plan.price || 0), 0
//       );
//     },

//     updateRoomPrice: (state, action) => {
//       const { roomId, price } = action.payload;
//       const existingRoom = state.rooms.find((room) => room.id === roomId);
//       if (existingRoom) {
//         existingRoom.price = price;
//       } else {
//         state.rooms.push({ id: roomId, price });
//       }

//       // Recalculate total price
//       state.totalPrice = state.rooms.reduce((total, room) => total + (room.price || 0), 0);
//     },

//     setRooms: (state, action) => {
//       state.rooms = action.payload;

//       // Ensure the total price is set when rooms are initialized
//       state.totalPrice = action.payload.reduce((total, room) => total + (room.price || 0), 0);
//     },

//     deleteRoom: (state, action) => {
//       console.log("Before Deletion:", state.rooms);
//       console.log("Deleting Room ID:", action.payload);
    
//       state.rooms = state.rooms.filter(room => room.id !== action.payload);
    
//       console.log("After Deletion:", state.rooms);
//     },

//     resetBooking: (state) => {
//       state.selectedPlan = {};
//       state.rooms = [];
//       state.totalPrice = 0;
//     },
//   },
// });

// export const { setPlan, updateRoomPrice, setRooms, resetBooking, deleteRoom } = bookingSlice.actions;
// export default bookingSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlan: {},
  rooms: [],
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setPlan: (state, action) => {
      const { roomId, plan } = action.payload;
      state.selectedPlan[roomId] = plan;

      // Update total price based on selected plans
      state.totalPrice = Object.values(state.selectedPlan).reduce(
        (total, plan) => total + (plan.price || 0),
        0
      );
    },

    updateRoomPrice: (state, action) => {
      const { roomId, price, persons, adults, children } = action.payload;
      const existingRoomIndex = state.rooms.findIndex((room) => room.id === roomId);

      if (existingRoomIndex !== -1) {
        // Update existing room details without losing other data
        state.rooms[existingRoomIndex] = {
          ...state.rooms[existingRoomIndex],
          price,
          persons,
          adults,
          children,
        };
      } else {
        // Add new room with full details
        state.rooms.push({ id: roomId, price, persons, adults, children });
      }

      // Recalculate total price
      state.totalPrice = state.rooms.reduce((total, room) => total + (room.price || 0), 0);
    },

    setRooms: (state, action) => {
      action.payload.forEach((newRoom) => {
        const existingRoomIndex = state.rooms.findIndex((room) => room.id === newRoom.id);
        if (existingRoomIndex !== -1) {
          // Merge new room data with existing room data
          state.rooms[existingRoomIndex] = { ...state.rooms[existingRoomIndex], ...newRoom };
        } else {
          // Add new room
          state.rooms.push(newRoom);
        }
      });

      // Ensure the total price is recalculated
      state.totalPrice = state.rooms.reduce((total, room) => total + (room.price || 0), 0);
    },

    deleteRoom: (state, action) => {
      console.log("Before Deletion:", state.rooms);
      console.log("Deleting Room ID:", action.payload);

      state.rooms = state.rooms.filter((room) => room.id !== action.payload);

      console.log("After Deletion:", state.rooms);

      // Recalculate total price
      state.totalPrice = state.rooms.reduce((total, room) => total + (room.price || 0), 0);
    },

    resetBooking: (state) => {
      state.selectedPlan = {};
      state.rooms = [];
      state.totalPrice = 0;
    },
  },
});

export const { setPlan, updateRoomPrice, setRooms, resetBooking, deleteRoom } = bookingSlice.actions;
export default bookingSlice.reducer;
