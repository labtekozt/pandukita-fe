import validator from "../helpers/validator";

export default function validate(data) {
  const { username, email, password, password2, phone } = data;
  const usernameError = validator.usernameValidator(username);
  const emailError = validator.emailValidator(email);
  const passwordError = validator.passwordValidator(password);
  const password2Error = validator.ComparePassword(password2, password);
  const phoneError = validator.phoneValidator(phone);

  if (usernameError) {
    return false;
  }
  if (emailError) {
    return false;
  }
  if (passwordError) {
    return false;
  }
  if (password2Error) {
    return false;
  }
  if (phoneError) {
    return false;
  }
  return true;
}
