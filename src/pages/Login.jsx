import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Main>
      <h3 className="text-3xl">AFRICA DECENTRALIZED</h3>
      <h3>PLATFORM</h3>
      <div className="inputs">
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Enter Password" />
        <button>SUBMIT</button>
      </div>
    </Main>
  );
};

export default Login;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h3 {
    max-width: 80%;
    font-size: 30px;
    text-align: center;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 30px;

    input {
      border: 1px solid gray;
      padding-left: 20px;
      padding-block: 10px;
      margin-bottom: 20px;
    }
  }
`;
