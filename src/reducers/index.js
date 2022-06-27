import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import { sessionReducer } from "redux-react-session";

// reducer import
import customizationReducer from './customizationReducer';

export default combineReducers({
  auth,
  message,
  customization: customizationReducer,
  session: sessionReducer
});