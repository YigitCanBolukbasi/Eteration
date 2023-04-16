import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";
import ThemeComponent from "./styles/theme/ThemeComponent";
import themeConfig from "./styles/theme/themeConfig";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeComponent themeConfig={themeConfig}>
        <App />
      </ThemeComponent>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
