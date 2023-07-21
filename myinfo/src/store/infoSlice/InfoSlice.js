import { createSlice } from "@reduxjs/toolkit"
// import axios from "axios";

const InfoSlice = createSlice({
  name: "info",
  initialState: {
    userInfo: "",
    infoList: [],
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload.username)
      localStorage.setItem('loginUser', action.payload.username)
      localStorage.setItem('loginUserId', action.payload.userid)
      state.userInfo = action.payload.username
    },
    delUser: (state, action) => {
      state.userInfo = action.payload
    }
  }
})

export const { setUser, delUser } = InfoSlice.actions
export default InfoSlice.reducer