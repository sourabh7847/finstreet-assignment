import { authConstants } from "../actions/constants";

const initialState = {
  accessToken: "",
  uid: "",
  email: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SIGNIN:
      state = {
        ...state,
        accessToken: action.payload.accessToken,
        uid: action.payload.uid,
        email: action.payload.email,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default AuthReducer;
