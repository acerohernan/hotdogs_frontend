/* eslint-disable no-unreachable */
const initialState = {
  isAuth: true,
  userInfo: {
    username: "demo",
    firstName: "Demo Account",
    age: "21",
    gender: "Male - Female",
    height: "1.80",
    birthday: "31/12",
    preferences: "I go to park with my person three times a week",
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
