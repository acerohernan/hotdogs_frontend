/* eslint-disable no-unreachable */
const initialStore = [];

function favsReducer(state = initialStore, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
      break;
    case "REMOVE_FAVORITE":
      const { payload } = action;
      const newArr = state.filter((dog) => dog.id !== payload.id);
      return [...newArr];
    default:
      return state;
      break;
  }
}

export default favsReducer;
