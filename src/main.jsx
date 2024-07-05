import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./Storage/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondPage from "./Pages/SecondPage.jsx";

const routes = (
  <Provider store={store}>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/second-page" Component={SecondPage} />
    </Routes>
  </Provider>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>{routes}</Router>
  </React.StrictMode>
);
