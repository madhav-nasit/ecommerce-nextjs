import * as Yup from 'yup';
import { strings } from 'static';

// Destructure error messages from strings module
const {
  validation: { email, userName, password, name, acceptTerms },
} = strings;

// Define Yup schema for validation
export const schema = {
  userName: Yup.string().required(userName.required),
  email: Yup.string().required(email.required).email(email.invalid),
  password: Yup.string()
    .required(password.required)
    .min(8, password.length)
    .matches(/^(?=.*[a-z])/, password.lowercase)
    .matches(/^(?=.*[A-Z])/, password.uppercase)
    .matches(/^(?=.*[0-9])/, password.number)
    .matches(/^(?=.*[!@#\$%\^&\*])/, password.special),
  firstName: Yup.string().required(name.firstName),
  lastName: Yup.string().required(name.lastName),
  confirmPassword: Yup.string()
    .required(password.confirmPassword)
    .oneOf([Yup.ref('password')], password.doNotMatch),
  acceptTerms: Yup.boolean().isTrue(acceptTerms),
};
