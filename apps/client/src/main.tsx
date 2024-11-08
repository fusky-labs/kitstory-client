import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@ce-internal/config/shared.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
