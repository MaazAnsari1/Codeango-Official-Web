import { createSlice } from "@reduxjs/toolkit";

const myCoursesSlice = createSlice({
  name: "myCourses",
  initialState: [],
  isOpen: false,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, remove } = myCoursesSlice.actions;
export default myCoursesSlice.reducer;
