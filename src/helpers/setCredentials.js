import axios from "../services/axios/index";
import isTokenExpired from "./jwt/isTokenExpired";
import { getCookie, setCookie } from "./cookies.js";
import decodeJwt from "./jwt/decodeJwt";

export const setCredentials = (value) => {
  try {
    setCookie("keys", JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async () => {
  try {
    const keys = await getCookie("keys");
   
    // parse the keys to get the user
    const user = decodeJwt(JSON.parse(keys).access);
    return user.user;
  } catch (e) {
    console.log(e);
    return {};
    // console.log(e,"user");
  }
};

async function getAccessUsingRefresh(refreshToken) {
  return axios
    .post("/refresh", { refreshToken })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

async function getVerifiedKeys(keys) {
  // console.log("Loading keys from storage");

  if (keys) {
    // console.log('checking access');
    if (!isTokenExpired(keys.access)) {
      // console.log('returning access');

      return keys;
    } else {
      // console.log('access expired');

      // console.log('checking refresh expiry');

      if (!isTokenExpired(keys.refresh)) {
        // console.log('fetching access using refresh');

        // console.log('fetching access using refresh');

        const response = await getAccessUsingRefresh(keys.refresh);
        await setCredentials(response);

        return response;
      } else {
        // console.log('refresh expired, please login');

        return null;
      }
    }
  } else {
    // console.log('access not available please login');

    return null;
  }
}

const getCredentials = async () => {
  try {
    let credentials = getCookie("keys");
    
    if (!credentials) {
      return null;
    }
    let cred = await getVerifiedKeys(JSON.parse(credentials));

    if (cred != null) {
      return cred;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export default getCredentials;
