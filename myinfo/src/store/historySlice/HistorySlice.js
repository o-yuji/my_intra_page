import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const HistoryUrl = "http://127.0.0.1:8000/api/history/"
const token = localStorage.localJWT;

export const fetchAsynkHistory = createAsyncThunk("history/get", async () => {
  const res = await axios.get(HistoryUrl, {
    headers: {
      "Content-Type": "application-json",
      Authorization: `JWT ${token}`,
    },
  })
  return res.data
})

export const fetchAsynkHistoryPost = createAsyncThunk("history/post", async (info) => {
  const res = await axios.post(HistoryUrl, info, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    }
  })
  return res.data
})

export const fetchAsynkHistoryDelete = createAsyncThunk("history/delete",async(id) => {
  await axios.delete(`${HistoryUrl}${id}`,{
    headers:{
      Authorization:`JWT ${token}`,
    }
  })
  return id
})

const HistorySlice = createSlice({
  name: "history",
  initialState: {
    historyList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsynkHistory.fulfilled, (state, action) => {
      state.historyList = action.payload
    })
    builder.addCase(fetchAsynkHistoryPost.fulfilled, (state, action) => {
      console.log(action.payload)
      state.historyList = [...state.historyList, action.payload]
    })
    builder.addCase(fetchAsynkHistoryDelete.fulfilled,(state,action)=>{
      state.historyList = state.historyList.filter((history) => (
      history.id !== action.payload
      ))
    })
  },
})


export default HistorySlice.reducer