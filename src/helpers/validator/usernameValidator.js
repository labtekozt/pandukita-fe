export default function usernameValidator(username) {
  // format 08##########
  const re = /^[a-zA-Z0-9]{5,20}$/;
  if (!username) return "Username can't be empty.";
  if (!re.test(username))
    return "Ooops! We need a valid username. (5-20 characters)";
  return "";
}
