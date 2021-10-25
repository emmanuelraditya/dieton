const storage = window.localStorage;
const token = storage.getItem("token") || "";
const initialState = {
  token
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case "signUp/get-success":
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
  }
}

export default userReducer;
