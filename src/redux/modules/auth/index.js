// action types
export const AUTH_SIGN_UP = "AUTH_SIGN_UP";
export const AUTH_SIGN_IN = "AUTH_SIGN_IN";
export const AUTH_SIGN_OUT = "AUTH_SIGN_OUT";

// dummy authd state
export const dummyAuthState = {
  googleId: "123",
  _v: 0,
  _id: "123"
};

// initial state
export const initialState = null;
// action creators
export const authSignUp = payload => ({
  type: AUTH_SIGN_UP,
  payload
});
export const authSignIn = payload => ({
  type: AUTH_SIGN_IN,
  payload
});
export const authSignOut = () => ({
  type: AUTH_SIGN_OUT
});

// reducer
const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP:
      return action.payload;
    case AUTH_SIGN_IN:
      return action.payload;
    case AUTH_SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default auth;
