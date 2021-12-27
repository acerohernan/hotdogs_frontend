/* eslint-disable no-unreachable */
const initialState = [];

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_CHAT":
      const { id, name, url } = action.payload;
      return [...state, { id, name, url, messages: [] }];

    case "REMOVE_CHAT":
      const newState = state.filter((chat) => chat.id !== action.payload.id);
      return [...newState];
      break;

    case "ADD_MESSAGE":
      const chat = state.find((chat) => chat.id === action.payload.id);
      const chatArr = state.filter((chat) => chat.id !== action.payload.id);

      return [
        ...chatArr,
        {
          ...chat,
          messages: [...chat.messages, action.payload.message],
        },
      ];

    default:
      return state;
      break;
  }
}

export default chatReducer;
