import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "./App"
import Home from "./pages/Home"
import UserDetail from "./pages/UserDetail"
import UserCreate from "./pages/UserCreate"
import UserUpdate from "./pages/UserUpdate"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/user/:id",
        element: <UserDetail />,
      },
      {
        path: "/user/create",
        element: <UserCreate />,
      },
      {
        path: "/user/update/:id",
        element: <UserUpdate />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
