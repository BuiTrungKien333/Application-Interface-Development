import { combineReducers } from "redux";
import counterReducer from "./counter";
import todosReducer from "./todos";

const allReducers = combineReducers({
  counterReducer,
  todosReducer,
  // Thêm các reducer khác ở đây
});

export default allReducers;
