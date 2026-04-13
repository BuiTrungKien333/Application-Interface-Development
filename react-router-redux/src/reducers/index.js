import { combineReducers } from "redux";
import counterReducer from "./counter";

const allReducers = combineReducers({
  counterReducer,
  // Thêm các reducer khác ở đây
});

export default allReducers;
