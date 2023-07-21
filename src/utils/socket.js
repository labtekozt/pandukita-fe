import { io } from "socket.io-client";
import { Domain } from "../tmp/config";
// "undefined" means the URL will be computed from the `window.location` object

const SocketIo = (jwt) =>
  // create a socket connection transport websocket
  io(Domain, {
    // send jwt token to server
    auth: {
      token: jwt,
    },
    // enable cors
    // withCredentials: true,
    // enable reconnection
    reconnection: true,
    // max reconnection attempts
    reconnectionAttempts: 5,
    // delay between reconnection attempts
    reconnectionDelay: 1000,
    // max delay for a connection
    timeout: 20000,
    // auto connect
    autoConnect: false,
    // enable debug mode
    addTrailingSlash: true,

    transports: ["websocket"],
    // force new connection
    forceNew: true,
  });

export default SocketIo;
