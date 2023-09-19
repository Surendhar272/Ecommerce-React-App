import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Css/index.css";
import App from "./components/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
