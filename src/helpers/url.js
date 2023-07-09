import { Domain } from "../tmp/config";
import { isDataURL } from "./base64";

export const srcImage = (str) => {
  if (!str) {
    return "https://drive.google.com/uc?id=1wGJLtZHyd9Bc_NfGgzEiajYYrymwGqIf&export=download";
  }
  if (str === "default.jpg") {
    return "https://drive.google.com/uc?id=1wGJLtZHyd9Bc_NfGgzEiajYYrymwGqIf&export=download";
  }
  if (str.substring(0, 4) === "http") {
    return str;
  }
  if (isDataURL(str)) {
    return str;
  }
  return Domain + str;
};
