import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NotificationProvider>
    <MoralisProvider initializeOnMount={false}>
      <App />
    </MoralisProvider>
  </NotificationProvider>
);
