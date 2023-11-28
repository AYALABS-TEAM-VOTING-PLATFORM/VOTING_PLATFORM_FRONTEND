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
  const [loading, setLoading] = useState(false);

  const _getVoters = async () => {
    const data = await _getVotersAll({ loading, setLoading });
    console.log(data);
    setVoters([...data]);
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
        {voters.length == 0 ? (
          <div>No Voter</div>
        ) : (
          voters?.map((val, i) => <Voter key={i} address={val["0"]} />)
        )}
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
