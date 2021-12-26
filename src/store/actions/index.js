export const activateAuthAction = (payload) => ({
  type: "ACTIVATE_AUTH",
  payload,
});

export const inactivateAuthAction = (payload) => ({
  type: "INACTIVATE_AUTH",
  payload,
});

export const signUpAction = (payload) => ({
  type: "SIGN_UP",
  payload,
});

export const signInAction = (payload) => ({
  type: "SIGN_IN",
  payload,
});

export const addDogInfoAction = (payload) => ({
  type: "ADD_DOG_INFO",
  payload,
});

export const addFavoriteAction = (payload) => ({
  type: "ADD_FAVORITE",
  payload,
});

export const removeFavoriteAction = (payload) => ({
  type: "REMOVE_FAVORITE",
  payload,
});

export const createChatAction = (payload) => ({
  type: "CREATE_CHAT",
  payload,
});

export const removeChatAction = (payload) => ({
  type: "REMOVE_CHAT",
  payload,
});

export const addMessageAction = (payload) => ({
  type: "ADD_MESSAGE",
  payload,
});
