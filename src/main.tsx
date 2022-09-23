import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { PokeProvider } from "./context/PokeProvider"
import { worker } from "./mock/browser"

const main = async () => {
  if (import.meta.env.VITE_MOCK_SERVER === "on") {
    await worker.start()
  }
}

ReactDOM.createRoot(document.querySelector("root") as HTMLElement).render(
  <React.StrictMode>
    <PokeProvider>
      <App />
    </PokeProvider>
  </React.StrictMode>,
)

main()
