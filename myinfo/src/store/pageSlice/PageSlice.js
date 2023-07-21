import { createSlice } from "@reduxjs/toolkit"

const PageSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: "HOME",
    previousPage: "",
    nextPage: "",
  },
  reducers: {
    setPage(state, action) {
      localStorage.setItem('page', action.payload)
      state.currentPage = action.payload;
    },
    setPreviousPage(state, action) {
      state.previousPage = action.payload;
    },
    setNextPage(state, action) {
      state.nextPage = action.payload;
    }
  }
});

export const { setPage, setPreviousPage, setNextPage } = PageSlice.actions
export default PageSlice.reducer