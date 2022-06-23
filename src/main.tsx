import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PlayerContextProvider } from "./context/PlayerContext";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PlayerContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PlayerContextProvider>
);
