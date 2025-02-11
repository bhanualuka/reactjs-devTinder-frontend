import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addUserRequests: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addUserRequests } = requestsSlice.actions;

export default requestsSlice.reducer;
