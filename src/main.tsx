import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { AppProvider } from "../src/context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
