export function ComparePassword(password1, password2) {
  if (!password1 || !password2) {
    return "Password can't be empty.";
  }
  if (password1 !== password2) {
    return "Password not valid please try again";
  }
  return "";
}

export default function passwordValidator(password) {
  if (!password) return "Password can't be empty.";
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  if (password.search(/[a-z]/i) < 0) {
    return "Password must contain at least one letter.";
  }

  if (password.search(/[0-9]/) < 0) {
    return "Password must contain at least one digit.";
  }

  return "";
}
