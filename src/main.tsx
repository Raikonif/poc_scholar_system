import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/system";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="purlple-dark bg-background text-foreground">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
);
