import { combineReducers } from "redux";
import authReducer from "./auth.reducer";

const rootreducer = combineReducers({
  auth: authReducer,
});

export default rootreducer;
