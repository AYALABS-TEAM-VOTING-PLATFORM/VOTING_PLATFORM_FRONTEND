import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Board from "../../components/Board";
import { Button } from "@web3uikit/core";
import Cardidate from "../../Components/Cardidate";
import { _getCandidates } from "../../constants/_helperFunctions";

const Candidates = () => {
  const [length, setLength] = useState(3);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);

  const _getAllCandidates = async () => {
    setLoading(true);
    const data = await _getCandidates();
    console.log(data);
    setCandidates(data);
    setLoading(false);
  };

  // useEffect(() => {
  // _getAllCandidates()
  // }, [])

  return (
    <Main>
      <Navbar />
      <Board text={"CANDIDATES"} />
      <div className="candidates grid lg:grid-cols-3 gap-12 mt-8">
        {[1, 2, 3, 4, 5].map((val) =>
          Array.from({ length }, (index) => index + 1).map((val) => (
            <Cardidate />
          ))
        )}
      </div>
    </Main>
  );
};

export default Candidates;

const Main = styled.div`
  position: relative;
  .candidates {
    margin: 30px;
    padding: 30px;
    margin: 20px;

    h2 {
      font-size: 30px;
    }
  }
`;
