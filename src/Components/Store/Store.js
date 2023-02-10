import { configureStore } from "@reduxjs/toolkit";
import QuestionReducer from "../Store/QuestionSlice";

export const store = configureStore({
  reducer: {
    question: QuestionReducer,
  },
});
