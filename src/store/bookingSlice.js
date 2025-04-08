import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedPlan: {}, // Store plans for multiple rooms
  rooms: [], // Initialize rooms array
  totalPrice: 0,
  advancePayment: 0,
  remainingPayment: 0,
  personalDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    agreeTerms: false,
    errors: {},
  },
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  
  reducers: {
    setRoom: (state, action) => {
      
      const { roomId, roomPrice, extraAdultPrice, ...updates } = action.payload;

      const existingRoom = state.rooms.find((room) => room.roomId === roomId);

      if (existingRoom) {
        // Preserve roomPrice if it's already set, otherwise use the new one
        existingRoom.roomPrice = roomPrice ?? existingRoom.roomPrice ?? 0;
        existingRoom.extraAdultPrice =
          extraAdultPrice ?? existingRoom.extraAdultPrice ?? 0;
        Object.assign(existingRoom, updates);
      } else {
        state.rooms.push({
          roomId,
          roomPrice: roomPrice ?? 0,
          extraAdultPrice: extraAdultPrice ?? 0,
          ...updates,
        });
      }

      state.totalPrice = state.rooms.reduce(
        (total, room) =>
          total + (room.roomPrice || 0) + (room.extraAdultPrice || 0),
        0
      );
    },

    // removeRoom: (state, action) => {
    //   const roomId = action.payload;
    //   state.rooms = state.rooms.filter((room) => room.roomId !== roomId);
    //   state.totalPrice = state.rooms.reduce((total, room) => total + (room.roomPrice || 0) + (room.extraAdultPrice || 0), 0);
    // },
    setPlan: (state, action) => {
      const { roomId, plan } = action.payload;
      state.selectedPlan[roomId] = plan;
    },
    setPersonalDetails: (state, action) => {
      state.personalDetails = {
        ...state.personalDetails,
        ...action.payload,
      };
    },
    setPaymentAmounts: (state, action) => {
      const { advance, remaining } = action.payload;
      state.advancePayment = advance;
      state.remainingPayment = remaining;
    },
    setErrors: (state, action) => {
      state.personalDetails.errors = action.payload;
    },
    resetRooms: (state) => {
      state.rooms = [];
      state.totalPrice = 0;
    },
    resetBooking: () => initialState,
    setDates: (state, action) => {
      state.checkInDate = action.payload.checkInDate;
      state.checkOutDate = action.payload.checkOutDate;
    },
    resetDates: (state) => {
      state.checkInDate = null;
      state.checkOutDate = null;
    },
  },
});

export const {
  setPlan,
  setRoom,
  removeRoom,
  resetRooms,
  resetBooking,
  setPersonalDetails,
  setPaymentAmounts,
  setErrors,
  setDates,
  resetDates
} = bookingSlice.actions;
export default bookingSlice.reducer;
