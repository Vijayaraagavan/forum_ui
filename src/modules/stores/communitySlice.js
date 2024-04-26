import { createSlice } from "@reduxjs/toolkit";

export const communitySlice = createSlice({
  name: "community",
  initialState: {
    community: null,
    posts: []
  },
  reducers: {
    setCurrentCommunity(state, c) {
      state.community = c.community;
      state.posts = c.posts;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentCommunity } = communitySlice.actions;

export default communitySlice.reducer;
