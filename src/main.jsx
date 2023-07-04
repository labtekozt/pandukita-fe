import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { RouterProvider } from "react-router-dom";
import "./disk/css/main.css";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalProvider } from "./store/index.jsx";
import Toast from "./component/Toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <Toast />
      <RouterProvider router={router}>/</RouterProvider>
    </GlobalProvider>
  </React.StrictMode>
);
