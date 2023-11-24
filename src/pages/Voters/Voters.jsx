import React, { useEffect, useState } from "react";
import Voter from "../../components/Voter";
import Navbar from "../../components/Navbar";
import Board from "../../components/Board";
import styled from "styled-components";
import { useMoralis, useWeb3Contract } from "react-moralis";
import Footer from "../footer/Footer";
import { _getVotersAll } from "../../constants/_helperFunctions";

const Voters = () => {
  const [voters, setVoters] = useState([]);

  const _getVoters = async () => {
    const data = await _getVotersAll();
    console.log(data);
  };

  useEffect(() => {
    _getVoters();
  }, []);
  return (
    <Main>
      <Navbar />
      <Board
        text={"VOTERS"}
        desc="All voters ready or already casted their votes"
      />
      <div className="flex flex-col p-8">
        {[1, 3, 4, 5, 6, 6].map((val, i) => (
          <Voter key={i} />
        ))}
      </div>
      <Footer />
    </Main>
  );
};

export default Voters;

const Main = styled.div`
  position: relative;
  position: relative;
`;
