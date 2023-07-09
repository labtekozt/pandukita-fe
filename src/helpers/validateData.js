import validator from "../helpers/validator";

export default function validate(data) {
  const { username, email, password, password2, phone } = data;
  const usernameError = validator.usernameValidator(username);
  const emailError = validator.emailValidator(email);
  const passwordError = validator.passwordValidator(password);
  const password2Error = validator.ComparePassword(password2, password);
  const phoneError = validator.phoneValidator(phone);

  if (usernameError) {
    return usernameError;
  }
  if (emailError) {
    return emailError;
  }
  if (passwordError) {
    return passwordError;
  }
  if (password2Error) {
    return password2Error;
  }
  if (phoneError) {
    return phoneError;
  }
  return null;
}
