import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AllSection from "./section/AllSection.jsx";
import { inject } from "@vercel/analytics";
import SignUp from "./section/SignPages/SignUp.jsx";
inject();
import Login from "./section/SignPages/Login.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SignUp />
    <Login /> */}

    <App />
    {/* <AllSection /> */}
  </StrictMode>
);
