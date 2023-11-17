import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";
import "./index.css";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/vote",
      element: <Home />,
    },
    {
      path: "/candidates",
      element: <Home />,
    },
    {
      path: "/elections",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
