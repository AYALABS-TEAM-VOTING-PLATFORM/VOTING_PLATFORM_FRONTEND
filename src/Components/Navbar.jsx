import { Button } from "@web3uikit/core";
// import { ConnectButton } from "@web3uikit/web3";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Main>
      <ul>
        <li>HOME</li>
        <li>VOTE</li>
        <li>CANDIDATES</li>
        <li>MINT/ELECTIONS</li>
        <Button theme="translucent" type="button" text="LOG IN" />
        <li>
          <Button theme="outline" type="button" text="CONNECT WALLET" />
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
