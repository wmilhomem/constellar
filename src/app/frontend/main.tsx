import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/frontend/index.css";
import App from "@/app/frontend/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
