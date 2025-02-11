import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return (state = action.payload);
    },

    removeFeed: () => {
      return null;
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
