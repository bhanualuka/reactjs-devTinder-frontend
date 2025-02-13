import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: [],
  reducers: {
    /* addConnections: (state, action) => {
      return (state = action.payload);
    }, */
    addConnections: (state, action) => {
      return action.payload.filter((connection) => connection !== null);
    },

    removeConnections: () => {
      return [];
    },
  },
});

export const { addConnections, removeConnections } = connectionSlice.actions;
export default connectionSlice.reducer;
