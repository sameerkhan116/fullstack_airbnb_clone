import * as yup from "yup";

export const emailNotLongEnough = "Email must be atleast 3 characters long.";
export const passwordNotLongEnough =
  "Password must be atleast 3 characters long.";
export const invalidEmail = "Please enter a valid email.";

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required("Password is a required field.");

export const validUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required("Email is a required field."),
  password: registerPasswordValidation,
});
