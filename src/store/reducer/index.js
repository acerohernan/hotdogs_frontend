import { combineReducers } from "redux";

import userReducer from "./userReducer";
import favsReducer from "./favsReducer";
import chatReducer from "./chatReducer";
import dogReducer from "./dogReducer";

const reducer = combineReducers({
  user: userReducer,
  favs: favsReducer,
  chat: chatReducer,
  dog: dogReducer
});

export default reducer;
