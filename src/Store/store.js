import myCoursesReducer from "./myCoursesSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    myCourses: myCoursesReducer,
  },
});

export default store;
