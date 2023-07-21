import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/'
const token = localStorage.localJWT

export const fetchAsyncLogin = createAsyncThunk('login/post', async (auth) => {
  const res = await axios.post(`${API_URL}authen/jwt/create`, auth, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.data
})


const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    Auth: {
      username: '',
      password: '',
    },
    IsAuthenticated: false,
  },
  reducers: {
    editUsername: (state, action) => {
      state.Auth.username = action.payload
    },
    editPassward: (state, action) => {
      state.Auth.password = action.payload
    },
    isLogin: (state, action) => {
      state.IsAuthenticated = action.payload.info
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      localStorage.setItem('localJWT', action.payload.access)
      action.payload.access && (window.location.href = "/")
    })
  }
})

export const { editUsername, editPassward, isLogin } = LoginSlice.actions
export default LoginSlice.reducer