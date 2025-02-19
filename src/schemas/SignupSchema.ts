import * as Yup from "yup";

export const SignupSchema = Yup.object({
  name: Yup.string(),
  email: Yup.string().matches(
    /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
    "Invalid Email !"
  ),
  password: Yup.string().matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must be at least 8 characters long and mixed with numbers !"
  ),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password wasn't matched !"
  ),
});
