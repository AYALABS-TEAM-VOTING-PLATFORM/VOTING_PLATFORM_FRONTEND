import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Board from "../../components/Board";
import { Button } from "@web3uikit/core";
import img from "../../assets/empty.png";
import Cardidate from "../../Components/Cardidate";
import Footer from "../footer/Footer";
import { ENSAvatar } from "@web3uikit/web3";
import Voter from "../../components/Voter";

const ElectionDetails = () => {
  return (
    <Main>
      <Navbar />
      <Board
        text={"ELECTION DETAIL"}
        desc="Happily cast your vote without stress"
      />
      <div className="election text-center">
        <h3>
          Please Note: if you have voted before you can not mint another token.
        </h3>
      </div>
      <div className="election grid grid-cols-2">
        <div className="w-80">
          <img src={img} alt="" srcset="" />
        </div>
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
          <div>
            <span>WINNING CANDIDATES: </span>
            <span>27372973</span>
          </div>
          <div>
            <span>TOTAL VOTERS: </span>
            <span>201</span>
          </div>

          <div className="flex">
            <div className="mr-16">
              <Button theme="translucent" text="MINT" size="xl" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="text-center">
          <h1>CANDIDATES</h1>
          <p>This all the candidate for this paticular election</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 mt-8">
          {[1, 2, 3, 4, 5].map((val) => (
            <Cardidate />
          ))}
        </div>
      </div>
      <div className="voters">
        <div className="text-center">
          <h1>VOTERS</h1>
          <p>
            This all the voters address that has been involved in this election
          </p>
          <div className="flex flex-col p-8">
            {[1, 3, 4, 5, 6, 6].map((val) => (
              <Voter />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default ElectionDetails;

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
