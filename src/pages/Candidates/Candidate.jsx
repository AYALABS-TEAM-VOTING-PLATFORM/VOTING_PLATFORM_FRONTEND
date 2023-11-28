import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Board from "../../components/Board";
import { Button } from "@web3uikit/core";
import Cardidate from "../../Components/Cardidate";
import { _getCandidates } from "../../constants/_helperFunctions";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);

  const _getAllCandidates = async () => {
    setLoading(true);
    const data = await _getCandidates({ loading, setLoading });
    setCandidates([...data]);
    setLoading(false);
  };

  useEffect(() => {
    _getAllCandidates();
  }, []);

  return (
    <Main>
      <Navbar />
      <Board text={"CANDIDATES"} />
      <div className="candidates grid lg:grid-cols-3 gap-12 mt-8">
        {candidates.length == 0 ? (
          <div>No Data</div>
        ) : (
          candidates.map((val, i) => (
            <Cardidate
              key={i}
              name={val["0"]}
              image={val["1"]}
              year={val["7"]}
              position={val["2"]}
              about={val["3"]}
              id={val["6"].toString()}
              voters={val["4"].toString()}
            />
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
