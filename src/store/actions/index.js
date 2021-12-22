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
