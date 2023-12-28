import { combineReducers } from "redux";
import { themeReducer } from "./slices/theme";

export const rootReducer = combineReducers({
  themeReducer,
});
