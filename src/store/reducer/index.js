import { combineReducers } from "redux";

import userReducer from "./userReducer";
import favsReducer from "./favsReducer";
import chatReducer from "./chatReducer";

const reducer = combineReducers({
  user: userReducer,
  favs: favsReducer,
  chat: chatReducer,
});

export default reducer;
