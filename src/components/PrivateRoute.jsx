import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Navigate, useLocation } from "react-router-dom";
// import { getUser } from "../features/UserSlice/UserSlice";

const PrivateRoute = ({ children }) => {
  const history = useLocation();
  const { account } = useMoralis();
  const user = JSON.parse(localStorage.getItem("user"));
  let voterWalletAddress = user.voter.voterWalletAddress;

  if (voterWalletAddress != account) {
    return <Navigate to={`/login`} state={{ from: history.location }} />;
  }
  if (!user.voter) {
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  return children;
};

export default PrivateRoute;
