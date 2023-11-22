import { Button } from "@web3uikit/core";
import React from "react";
import styled from "styled-components";

const Board = ({ text, desc }) => {
  return (
    <Main>
      <h1>{text}</h1>
      <p>{desc}</p>
      {desc && (
        <div className="mt-3">
          <Button text="MINT TOKEN" theme="translucent" />
        </div>
      )}
    </Main>
  );
};

export default Board;

const Main = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(11, 17, 74);
  background: linear-gradient(
    43deg,
    rgba(11, 17, 74, 0.41780462184873945) 0%,
    rgba(68, 187, 209, 1) 100%
  );
  flex-direction: column;
  h1 {
    color: white;
  }
  p {
    color: white;
    letter-spacing: 3px;
  }
`;
