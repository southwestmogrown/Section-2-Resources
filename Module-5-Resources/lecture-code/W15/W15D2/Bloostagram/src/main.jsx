import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./App.jsx";
import "./index.css";

import ThemeProvider from "./context/ThemeContext.jsx";
import PostsProvider from "./context/PostsContext.jsx";
import configureStore from "../store";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <PostsProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PostsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
