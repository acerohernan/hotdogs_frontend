/* eslint-disable no-unreachable */
const initialState = {
  isAuth: false,
  userInfo: {
    username: "",
    firstName: "",
    age: "",
    gender: "",
    height: "",
    birthday: "",
    preferences: "",
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ACTIVATE_AUTH":
      return { ...state, isAuth: true };
      break;
    case "INACTIVATE_AUTH":
      return { ...state, isAuth: false };
      break;
    case "SIGN_UP":
      return { ...state, userInfo: action.payload };
      break;
    case "SIGN_IN":
      return { ...state, userInfo: action.payload };
      break;
    case "ADD_DOG_INFO":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload,
        },
      };
    default:
      return state;
      break;
  }
}

export default userReducer;
