import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlan: {}, // Store plans for multiple rooms
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // setPlan: (state, action) => {
    //   const { roomId, plan } = action.payload;
    //   console.log("Updating plan for Room ID:", roomId, "Plan:", plan);
    //   state.selectedPlan = {
    //     ...state.selectedPlan,
    //     [roomId]: plan,
    //   };
    // },

    setPlan: (state, action) => {
      const { roomId, plan } = action.payload;
      state.selectedPlan = { [roomId]: plan }; // ✅ Always replace the previous selection
    },  
  },
});

export const { setPlan } = bookingSlice.actions;
export default bookingSlice.reducer;
