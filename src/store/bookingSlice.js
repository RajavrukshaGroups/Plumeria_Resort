import { createSlice } from "@reduxjs/toolkit";
// Load initial data from 

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("bookingState");
    return data ? JSON.parse(data) : { selectedPlan: {}, rooms: [], totalPrice: 0 };
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return { selectedPlan: {}, rooms: [], totalPrice: 0 } ;
  }
} ;

// Save data to localStorage
const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("bookingState", JSON.stringify(state));
  } catch (error) {
    console.error( "Error saving to localStorage", error) ;
  }
};

const initialState = loadFromLocalStorage();

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setPlan: (state, action) => {
      const { roomId, plan } = action.payload;
      state.selectedPlan[roomId] = plan;

      // Update total price based on selected plans
      state.totalPrice = Object.values(state.selectedPlan).reduce(
        (total, plan) => total + (plan.price || 0), 0
      );
      saveToLocalStorage(state);
    },

    updateRoomPrice: (state, action) => {
      const { roomId, price } = action.payload;
      const existingRoom = state.rooms.find((room) => room.id === roomId);

      if (existingRoom) {
        existingRoom.price = price;
      } else {
        state.rooms.push({ id: roomId, price });
      }

      // Recalculate total price
      state.totalPrice = state.rooms.reduce((total, room) => total + (room.price || 0), 0);
      saveToLocalStorage(state);
    },

    setRooms: (state, action) => {
      state.rooms = action.payload;

      // Ensure the total price is set when rooms are initialized
      state.totalPrice = action.payload.reduce((total, room) => total + (room.price || 0), 0);
      saveToLocalStorage(state);
    },

    resetBooking: (state) => {
      state.selectedPlan = {};
      state.rooms = [];
      state.totalPrice = 0;
      saveToLocalStorage(state);
    },
  },
});

export const { setPlan, updateRoomPrice, setRooms, resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
