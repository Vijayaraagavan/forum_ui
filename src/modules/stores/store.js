import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import globalReducer from "./globalSlice";
import communityReducer from "./communitySlice";
export default configureStore({
  reducer: {
    user: userReducer,
    app: globalReducer,
    community: communityReducer
  },
});
