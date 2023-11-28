import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Board from "../../components/Board";
import { Button, useNotification } from "@web3uikit/core";
import img from "../../assets/empty.png";
import Cardidate from "../../Components/Cardidate";
import Footer from "../footer/Footer";
import { ENSAvatar } from "@web3uikit/web3";
import Voter from "../../components/Voter";
import { useLocation, useParams } from "react-router-dom";
import {
  _getCandidate,
  _getElection,
  _mint,
  _vote,
} from "../../constants/_helperFunctions";
import { governanceERC20Addres } from "../../constants/addresses";

const ElectionDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(false);
  const [election, setElection] = useState({
    name: "",
    desc: "",
    year: "",
    id: "",
    startTime: "",
    endTime: "",
    totalVoters: "",
    winningCandidate: "",
    totalMinted: "",
  });
  const [candidates, setCandidates] = useState([]);
  const [minters, setMinters] = useState([]);
  const [voters, setVoters] = useState([]);

  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const { id } = useParams();
  const year = queryParams.get("year");

  const _getData = async () => {
    setLoading(true);
    const data = await _getElection({
      loading,
      setLoading,
      electionId: id,
      year,
    });

    console.log(data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    _getData();
  }, []);

  useEffect(() => {
    if (!data) return;
    setElection((prev) => ({
      ...prev,
      name: data && data["0"],
      desc: data && data["8"],
      year: data && data["9"],
      id: data && data["7"].toString(),
      startTime: data && data["1"].toString(),
      endTime: data && data["2"].toString(),
      totalVoters: data && data["3"].length,
      totalMinted: data && data["6"].length,
    }));

    setVoters([...data["3"]]);

    setCandidates([...data["4"]]);
    setMinters([...data["6"]]);
  }, [data]);

  return (
    <Main>
      <Navbar />
      <Board
        text={"ELECTION DETAIL"}
        desc="Happily cast your vote without stress"
      />
      <div className="election text-center">
        <h3>{election?.name}</h3>
      </div>
      <div className="election grid grid-cols-2">
        <div className="w-80">
          <img src={img} alt="" srcset="" />
        </div>
        <div>
          <h2>{election?.name}</h2>
          <p>{election?.desc}</p>
          <div>
            <span>YEAR: </span>
            <span>{election?.year}</span>
          </div>
          <div>
            <span>ELECTION ID: </span>
            <span>{election?.id}</span>
          </div>
          {/* <div>
            <span>WINNING CANDIDATES: </span>
            <span>27372973</span>
          </div> */}
          <div>
            <span>TOTAL VOTERS: </span>
            <span>{election?.totalVoters}</span>
          </div>
          <div>
            <span>TOTAL MINTED: </span>
            <span>{election?.totalMinted}</span>
          </div>

          <div className="flex">
            <div className="mr-16">
              <Button
                theme="translucent"
                text="SEE ELECTIONS"
                size="xl"
                // onClick={handleVote}
              />{" "}
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
          {candidates.length == 0 ? (
            <div>No Data</div>
          ) : (
            candidates.map((val, i) => {
              return (
                <CandidateC
                  val={val}
                  loading={loading}
                  setLoading={setLoading}
                  year={year}
                  election={election}
                  id={id}
                  setError={setError}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="voters">
        <div className="text-center">
          <h1>VOTERS</h1>
          <p>
            This all the voters address that has been involved in this election
          </p>
          <div className="flex flex-col p-8">
            {voters.length == 0 ? (
              <div>No Voter</div>
            ) : (
              voters?.map((val, i) => <Voter key={i} address={val} />)
            )}
          </div>
        </div>
      </div>
      <div className="voters">
        <div className="text-center">
          <h1>MINTERS</h1>
          <p>
            This all the voters address that has minted a token for this
            election
          </p>
          <div className="flex flex-col p-8">
            {minters.length == 0 ? (
              <div>No Voter</div>
            ) : (
              minters?.map((val, i) => <Voter key={i} address={val} />)
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default ElectionDetails;

const CandidateC = ({
  val,
  loading,
  setLoading,
  year,
  election,
  id,
  setError,
}) => {
  const [candidate, setOneCandidate] = useState(null);

  const getCandidate = async () => {
    const data = await _getCandidate({
      loading,
      setLoading,
      candidateId: val.toString(),
      year,
    });

    setOneCandidate(data);
    console.log("cnans", val, data);
  };
  useEffect(() => {
    getCandidate();
  }, []);

  return (
    candidate != null && (
      <Cardidate
        name={candidate["0"]}
        image={candidate["1"]}
        year={candidate["7"]}
        position={candidate["2"]}
        about={candidate["3"]}
        electionId={id}
        id={candidate["6"].toString()}
        voters={candidate["4"].toString()}
        details={true}
        startTime={election.startTime}
        endTime={election.endTime}
        setLoading={setLoading}
        setError={setError}
        loading={loading}
      />
    )
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
