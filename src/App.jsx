import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import "./index.css";
import Home from "./pages/Home/Home";
import Register from "./pages/register";
import Voters from "./pages/Voters/Voters";
import Candidates from "./pages/Candidates/Candidate";
import Elections from "./pages/Elections/Elections";
import ElectionDetails from "./pages/ElectionDetails/ElectionDetails";

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
      path: "/voters",
      element: <Voters />,
    },
    {
      path: "/candidates",
      element: <Candidates />,
    },
    {
      path: "/elections",
      element: <Elections />,
    },
    {
      path: "/election-details",
      element: <ElectionDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
