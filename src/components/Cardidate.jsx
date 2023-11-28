import { Button, NftCard, useNotification } from "@web3uikit/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { governanceERC20Addres } from "../constants/addresses";
import { _vote } from "../constants/_helperFunctions";
import { ethers } from "ethers";
import { useMoralis } from "react-moralis";

const Cardidate = ({
  name,
  image,
  year,
  position,
  about,
  id,
  voters,
  details,
  vote,
  setLoading,
  setError,
  startTime,
  endTime,
  electionId,
}) => {
  const dispatch = useNotification();
  const [imageURIURL, setImageURI] = useState("");
  const { account } = useMoralis();

  const getImage = async () => {
    const requestURL = "https://ipfs.io/ipfs/" + image;

    const tokenURIResponse = await (await fetch(requestURL)).json();
    console.log(tokenURIResponse);
    const imageURI = tokenURIResponse.image;
    const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
    console.log(imageURIURL);
    setImageURI(imageURIURL);
  };

  const handleVote = async () => {
    setLoading(true);
    const bool = await _vote({
      loading: false,
      setLoading: setLoading,
      year: year,
      electionId: electionId,
      tokenAddress: governanceERC20Addres,
      value: ethers.parseEther("1"),
      startDate: startTime,
      endDate: endTime,
      candidateId: id,
      owner: account,
    });
    setLoading(false);
    if (bool) {
      dispatch({
        title: "Successfully Minted",
        position: "topR",
        type: "success",
        message: "You have successfully voted, congrats",
      });
    }
  };

  useEffect(() => {
    getImage();
  }, []);
  return (
    <Main>
      <div className="imgdiv">
        <div className="img">
          <img src={imageURIURL} alt="" />
        </div>
      </div>
      <div className="desc mt-2">
        <div className="texts flex justify-between">
          <h3>NAME : </h3>
          <h3>{name.toUpperCase()}</h3>
        </div>
        <div className="texts flex justify-between">
          <h3>YEAR : </h3>
          <h3>{year.toUpperCase()}</h3>
        </div>
        <div className="texts flex justify-between">
          <h3>POSITION : </h3>
          <h3>{position.toUpperCase()}</h3>
        </div>
        <div className="texts flex justify-between">
          <h3>VOTERS : </h3>
          <h3>{voters}</h3>
        </div>
      </div>
      <div className="buttons flex justify-center mt-4">
        {/* <div className="mr-2">
          <Button text="MINT" theme="outline" />
        </div> */}
        <div className="ml-2">
          <Link to={details != true && "/elections"}>
            <Button text="VOTE" theme="outline" onClick={handleVote} />
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default Cardidate;

const Main = styled.div`
  /* height: 80vh; */
  outline: 2px solid cadetblue;
  padding: 20px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;

  .imgdiv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      width: 90%;
      img {
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
  }
  /* background-color: gray; */
`;
