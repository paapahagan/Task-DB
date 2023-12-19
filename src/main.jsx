import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TaskProvider from "./Context/TaskContext.jsx";
// import LoginProvider from "./Context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LoginProvider> */}
    <TaskProvider>
      <App />
    </TaskProvider>

    {/* </LoginProvider> */}
  </React.StrictMode>
);
