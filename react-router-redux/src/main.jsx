import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createStore } from "redux";
import allReducers from "./reducers/index.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(allReducers);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
