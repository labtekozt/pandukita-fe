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
import { PlanProvaider } from "./store/plan/index.jsx";

import L from "leaflet";
L.Icon.Default.imagePath = "/leaflet_images/"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <Toast />
      <PlanProvaider>
        <RouterProvider router={router}>/</RouterProvider>
      </PlanProvaider>
    </GlobalProvider>
  </React.StrictMode>
);
