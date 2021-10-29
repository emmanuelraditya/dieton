import { signUp,signIn } from "../../services";

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


// SignIn

export const getSignInAsync = ({
  email,
  password,
  history
}) => {
  return async (dispatch) => {
    dispatch({ type: "signIn/get-start" });
    try {
      const response = await signIn({
        email,
        password,
      });
      console.log(response, "start");
      if (response.status === 200) {
        dispatch(getSignInSuccess(response.data));
        history.replace("/homepage");
      }
   
    } catch (error) {
      console.log(error);
      dispatch(getSignInFailed(error.message));
    
    }
  };
};
export const getSignInSuccess = (signIn) => ({
  type: "signIn/get-success",
  payload: {
    signIn,
  },
});

export const getSignInFailed = (error) => ({
  type: "signin/get-failed",
  payload: {
    error,
  },
});
