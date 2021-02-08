import React, { useEffect, useContext } from "react";
import firebase from "../firebase";
import { Context } from "../context";
import { axiosAuth } from "../services/actions/axios";
import { useCookies } from "react-cookie";

const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        dispatch({
          type: "LOGOUT",
        });
        removeCookie('token');
        sessionStorage.clear();
      } else {
        const { token } = await user.getIdTokenResult();
        // set token to cookie
        removeCookie('token');
        setCookie('token', token, {});
        const currentUser = JSON.stringify(user)
        sessionStorage.setItem("currentUser", currentUser);
        // console.log("TOKEN", token);
        // send this token to backend
        // backend will check if thie token is valid (using firebase admin tool)
        // if it is verified, the same user information is available in the backend too
        // then can either save this user in database or update the existing user
        // then send the user information back to client
        axiosAuth.post("/current-user", {}).then((res) => {
          console.log("RES =====> ", res);
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
        });
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthState;
