import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addUserRequests: (state, action) => {
      return (state = action.payload);
    },
    removeUserRequest: (state, action) => {
      const newArry = state.filter((r) => r._id !== action.payload);
      return newArry;
    },
  },
});

export const { addUserRequests, removeUserRequest } = requestsSlice.actions;

export default requestsSlice.reducer;
