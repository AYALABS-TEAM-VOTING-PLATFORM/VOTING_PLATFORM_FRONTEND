import { Button } from "@web3uikit/core";
import { ConnectButton } from "@web3uikit/web3";
// import { ConnectButton } from "@web3uikit/web3";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/voters">
          <li>VOTE</li>
        </Link>{" "}
        <Link to="/candidates">
          <li>CANDIDATES</li>
        </Link>
        <Link to="/elections">
          <li>MINT/ELECTIONS</li>
        </Link>
        <Button
          theme="translucent"
          type="button"
          text="LOG IN"
          onClick={() => navigate("/login")}
        />
        <li>
          <ConnectButton />
        </li>
      </ul>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 222222222;

  ul {
    display: flex;
    align-items: center;
    padding-block: 15px;
    border-radius: 20px;
    background: rgb(11, 17, 74);
    background: linear-gradient(
      43deg,
      rgba(11, 17, 74, 0.41780462184873945) 0%,
      rgba(68, 128, 209, 1) 100%
    );
    display: flex;
    justify-content: center;
    width: 70%;

    li {
      color: white;
      font-weight: 500;
      margin-right: 30px;
      cursor: pointer;
      margin-left: 30px;
    }
  }
`;
