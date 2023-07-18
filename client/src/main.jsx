import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import "./Style/index.css";

import DataContextProvider from "./store/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="gametech.eu.auth0.com"
    clientId="PoZFVrQoau42DguPJS5d2w7auFUIIAr0"
    authorizationParams={{
      // redirect_uri: window.location.origin,
      redirect_uri: `${window.location.origin}/gameList`,
    }}
  >
    <DataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContextProvider>
  </Auth0Provider>
);
