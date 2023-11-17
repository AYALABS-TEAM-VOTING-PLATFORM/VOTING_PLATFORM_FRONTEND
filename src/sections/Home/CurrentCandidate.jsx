import { Button, NftCard } from "@web3uikit/core";
import React, { useState } from "react";
import styled from "styled-components";
import Cardidate from "../../Components/Cardidate";

const CurrentCandidate = () => {
  const [length, setLength] = useState(3);
  return (
    <Main>
      <div className="text">
        <h1 className="headerText">ALL CANDIDATES</h1>
        <p className="headerDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, sunt.
        </p>
      </div>
      <div className="candidates grid lg:grid-cols-3 gap-12 mt-8">
        {Array.from({ length }, (index) => index + 1).map((val) => (
          <Cardidate />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button theme="outline" type="button" text="VIEW MORE" size="large" />
      </div>
    </Main>
  );
};

export default CurrentCandidate;

const Main = styled.div`
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
