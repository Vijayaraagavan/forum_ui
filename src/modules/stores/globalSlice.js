import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    apiUrl: process.env.REACT_APP_API_URL
  },
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function
// export const { setId, setUser } = userSlice.actions;

export default globalSlice.reducer;
