import { auth } from "../../../firebase";
import { authConstants } from "./constants";

export const signup = (email, password) => {
  return async (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
};

export const signin = (email, password) => {
  return async (dispatch) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        const user = data.user._delegate;
        localStorage.setItem(
          "accessToken",
          user.accessToken
        );
        dispatch({
          type: authConstants.SIGNIN,
          payload: {
            accessToken: user.accessToken,
            email: user.email,
            uid: user.uid,
          },
        });
        window.location.reload();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
};
