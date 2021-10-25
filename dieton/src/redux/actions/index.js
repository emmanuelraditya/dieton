import { signUp } from "../../services";

export const getSignUpAsync = ({
  fullName,
  email,
  password,
  calorieSize,
  weight,
  height,
  waistline,
  thigh,
  next,
}) => {
  return async (dispatch) => {
    // console.log(
    //   fullName,
    //   email,
    //   password,
    //   calorieSize,
    //   weight,
    //   height,
    //   waistline,
    //   thigh
    // );
    dispatch({ type: "signUp/get-start" });
    try {
      const response = await signUp({
        fullName,
        email,
        password,
        calorieSize,
        weight,
        height,
        waistline,
        thigh,
      });
      console.log(response, "start");
      if (response.status === 200) {
        dispatch(getSignUpSuccess(response.data));
        next();
      }
      //   return response;
    } catch (error) {
      console.log(error);
      dispatch(getSignUpFailed(error.message));
      //   return error;
    }
  };
};
export const getSignUpSuccess = (signUp) => ({
  type: "signUp/get-success",
  payload: {
    signUp,
  },
});

export const getSignUpFailed = (error) => ({
  type: "signUp/get-failed",
  payload: {
    error,
  },
});

// export const getLoginAsync = (email, password) => {
//     return async (dispatch) => {
//         dispatch({type: "login/get-start"});
//         try {
//             const response = await login(email, password)
//             console.log(response,"start")
//             if(response.data) {
//                 dispatch(getLoginSuccess(response.data));
//             }
//             return response
//         } catch (error) {
//             console.log(error);
//         dispatch(getLoginFailed(error.message));
//         return error
//         }
//     }
// };
