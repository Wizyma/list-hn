import React from "react";
import ReactDOM from "react-dom/client";

import { QueryProvider } from "$components/QueryProvider";
import App from "$src/pages/Home";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
