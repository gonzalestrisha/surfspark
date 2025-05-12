import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./components/LandingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);