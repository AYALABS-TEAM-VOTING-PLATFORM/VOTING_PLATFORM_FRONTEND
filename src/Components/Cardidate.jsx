import { Button, NftCard } from "@web3uikit/core";
import React from "react";
import styled from "styled-components";

const Cardidate = () => {
  return (
    <Main>
      <div className="imgdiv">
        <div className="img">
          <img
            src="https://i.guim.co.uk/img/media/24ce7129dae7b626d499196d3a5c66cb10c079e0/0_126_5418_3251/master/5418.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=10a6720db99f87a16fd337f5b159fa75"
            alt=""
          />
        </div>
      </div>
      <div className="desc mt-2">
        <div className="texts flex justify-between">
          <h3>NAME : </h3>
          <h3>DONAL TRUMP</h3>
        </div>
        <div className="texts flex justify-between">
          <h3>YEAR : </h3>
          <h3>2022/2023</h3>
        </div>
        <div className="texts flex justify-between">
          <h3>POSITION : </h3>
          <h3>GOVERNORSHIP ELECTION</h3>
        </div>
      </div>
      <div className="buttons flex justify-center mt-4">
        <div className="mr-2">
          <Button text="MINT" theme="outline" />
        </div>
        <div className="ml-2">
          <Button text="VOTE" theme="outline" />
        </div>
      </div>
    </Main>
  );
};

export default Cardidate;

const Main = styled.div`
  height: 50vh;
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
