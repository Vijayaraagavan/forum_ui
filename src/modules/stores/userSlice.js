import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    uid: "",
    email: "",
    emailVerified: false,
    displayName: "",
    createdAt: "",
    lastLoginAt: "",
    communities: [],
    communitiesin: [],
  },
  reducers: {
    setId: (state, id) => {
      state.id = id;
    },
    setUser: (state, {payload: user}) => {
      if (!user) {
        return;
      }
      state.id = user._id;
      state.uid = user.uid;
      state.email = user.email;
      state.emailVerified = user.emailVerified;
      state.displayName = user.displayName;
      state.createdAt = user.createdAt;
      state.lastLoginAt = user.lastLoginAt;
      state.communities = user.communities;
      state.communitiesin = user.communitiesin;
    },
    // increment: (state) => {
    //   state.value += 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setId, setUser } = userSlice.actions;

export default userSlice.reducer;
