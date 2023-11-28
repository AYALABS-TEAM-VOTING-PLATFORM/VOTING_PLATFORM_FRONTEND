import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Board from "../../components/Board";
import { Button, useNotification } from "@web3uikit/core";
import { _getElections, _mint } from "../../constants/_helperFunctions";
import { useNavigate } from "react-router-dom";
import { governanceERC20Addres } from "../../constants/addresses";
import { useMoralis } from "react-moralis";

const Elections = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useNotification();

  const _getAllElections = async () => {
    setLoading(true);
    const data = await _getElections({ loading, setLoading });

    console.log(data);
    setElections([...data]);
    setLoading(false);
  };

  useEffect(() => {
    _getAllElections();
  }, []);

  return (
    <Main>
      <Navbar />
      <Board text={"ELECTIONS"} />
      <div className="election text-center">
        <h3>
          Please Note: if you have voted before you can not mint another token.
        </h3>
      </div>

      {elections.length == 0 ? (
        <div>No DATA</div>
      ) : (
        elections?.map((val, i) => (
          <Election
            key={i}
            name={val["0"]}
            startTime={val["1"]}
            endTime={val["2"]}
            started={val["5"]}
            id={val["7"].toString()}
            year={val["9"].toString()}
            about={val["8"]}
          />
        ))
      )}
    </Main>
  );
};

export default Elections;

const Election = ({ name, startTime, endTime, id, year, about }) => {
  const [loading, setLoading] = useState(false);
  const { account } = useMoralis();
  const dispatch = useNotification();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleMint = async () => {
    setLoading(true);
    const bool = await _mint({
      year: year,
      _electionId: id,
      _tokenAddr: governanceERC20Addres,
      loading,
      setLoading,
      setError,
      userAddress: account,
    });
    setLoading(false);
    if (bool) {
      dispatch({
        title: "Successfully Minted",
        position: "topR",
        type: "success",
        message: "Check your wallet for token",
      });
    }
  };

  useEffect(() => {
    if (error == "") return;
    dispatch({
      title: "Error",
      position: "topR",
      type: "error",
      message: error,
    });
  }, [error]);
  return (
    <div className="election grid grid-cols-2">
      <div>
        <h2>{name}</h2>
        <p>{about}</p>
        <div>
          <span>YEAR: </span>
          <span>{year}</span>
        </div>
        <div>
          <span>ELECTION ID: </span>
          <span>{id}</span>
        </div>
      </div>
      <div className="flex">
        <div className="mr-16">
          <Button
            theme="translucent"
            text="MINT"
            size="xl"
            onClick={handleMint}
          />{" "}
        </div>
        <div>
          <Button
            theme="translucent"
            text="DETAILS"
            size="xl"
            onClick={() => navigate(`/election-details/${id}?year=${year}`)}
          />
        </div>
      </div>
    </div>
  );
};

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
