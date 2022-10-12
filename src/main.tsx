import React from "react"
import ReactDOM from "react-dom"
import App from "App"
import worker from "mock/browser"
import PokeProvider from "context/PokeProvider"

const main = async () => {
  if (import.meta.env.VITE_MOCK_SERVER === "on") {
    await worker.start()
  }
}

ReactDOM.render(
  <React.StrictMode>
    <PokeProvider>
      <App />
    </PokeProvider>
  </React.StrictMode>,
  document.querySelector("#root"),
)

main()
