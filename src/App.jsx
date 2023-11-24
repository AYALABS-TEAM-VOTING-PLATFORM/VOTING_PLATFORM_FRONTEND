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
import { useMoralis } from "react-moralis";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { account } = useMoralis();

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
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
      path: "/election-details/:id",
      element: <ElectionDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
