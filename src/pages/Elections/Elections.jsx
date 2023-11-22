import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Board from "../../components/Board";
import { Button } from "@web3uikit/core";

const Elections = () => {
  return (
    <Main>
      <Navbar />
      <Board text={"ELECTIONS"} />
      <div className="election text-center">
        <h3>
          Please Note: if you have voted before you can not mint another token.
        </h3>
      </div>

      {[1, 2, 3, 4, 5].map((val) => (
        <div className="election grid grid-cols-2">
          <div>
            <h2>Presidential Election</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              dolorem corrupti voluptas nam ea blanditiis veniam? Est sequi
              quaerat cum.
            </p>
            <div>
              <span>YEAR: </span>
              <span>2023</span>
            </div>
            <div>
              <span>ELECTION ID: </span>
              <span>27372973</span>
            </div>
          </div>
          <div className="flex">
            <div className="mr-16">
              <Button theme="translucent" text="MINT" size="xl" />{" "}
            </div>
            <div>
              <Button theme="translucent" text="DETAILS" size="xl" />
            </div>
          </div>
        </div>
      ))}
    </Main>
  );
};

export default Elections;

const Main = styled.div`
  position: relative;
  .election {
    padding: 30px;
    margin: 20px;
    border: 1px solid gray;
    border-radius: 15px;

    h2 {
      font-size: 30px;
    }
  }
`;
