
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
      const { roomId, ...updates } = action.payload;
      const existingRoomIndex = state.rooms.findIndex(
        (room) => room.roomId === roomId
      );
      if (existingRoomIndex !== -1) {
        state.rooms[existingRoomIndex] = {
          ...state.rooms[existingRoomIndex],
          ...updates, // Merge updates with existing room data
        };
      } else {
        state.rooms.push({ roomId, ...updates });
      }
      // Recalculate total price
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