import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AllSection from "./section/AllSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <AllSection /> */}
  </StrictMode>
);
