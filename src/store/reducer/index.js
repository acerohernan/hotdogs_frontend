import { combineReducers } from "redux";

import userReducer from "./userReducer";
import favsReducer from "./favsReducer";

const reducer = combineReducers({
  user: userReducer,
  favs: favsReducer,
});

export default reducer;
