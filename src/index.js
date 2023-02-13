import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
// import Mainpage from "./pages/MainPage/MainPage";
// import ErrorPage from "./pages/ErrorPage/ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: <App />,
//   },
//   {
//     path: "/",
//     element: <Mainpage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/home/detail",
//     element: <h1>Detail</h1>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
