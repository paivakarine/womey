import { createSlice } from "@reduxjs/toolkit";
import http from "../../config/http.js";
import { getStorageItem } from "../../config/storage.js";

const user = JSON.parse(getStorageItem("user"));
if (user?.token) {
  http.defaults.headers["Authorization"] = `Bearer ${user?.token}`;
}
const initialState = {
  userLoggedIn: !!user,
  user: user ? user : {},
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userLoggedIn = true;
      state.user = action.payload;
    },
    
  },
});

export const { updateUser } = slice.actions;
export default slice.reducer;
