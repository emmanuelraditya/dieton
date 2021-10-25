import axios from "axios";

export const signUp = ({
    fullName,
    email,
    password,
    calorieSize,
    weight,
    height,
    waistline,
    thigh
}
  
) => {
  const data = {
    fullName,
    email,
    password,
    calorieSize,
    weight,
    height,
    waistline,
    thigh,
  };

  const url = "https://test-diet.herokuapp.com/v1/users/register";
  return axios(
    {
      method: "POST",
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    },
    console.log(data)
  );
};
