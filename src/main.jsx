import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "../credientials.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId={CLIENT_ID}>

        <App />
    </GoogleOAuthProvider>
);
