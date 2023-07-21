import { configureStore } from "@reduxjs/toolkit"
import InfoSlice from "./infoSlice/InfoSlice"
import LoginSlice from "./loginSlice/LoginSlice"
import HistorySlice from "./historySlice/HistorySlice"
import PageSlice from "./pageSlice/PageSlice"

export const store = configureStore({
  reducer: {
    info: InfoSlice,
    login: LoginSlice,
    history: HistorySlice,
    page:PageSlice,
  }
})

