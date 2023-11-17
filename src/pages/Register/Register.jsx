import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <Main>
      <h3 className="text-xl">AFRICA DECENTRALIZED</h3>
      <h3>PLATFORM</h3>
      <div className="inputs grid lg:grid-cols-2 gap-8">
        <input type="text" placeholder="Enter Password" />
        <input type="text" placeholder="Enter Password" />
        <input type="text" placeholder="Enter Password" />
        <input type="text" placeholder="Enter Password" />
        {/* <div className="inputValidationBox"></div> */}
      </div>
      <button>SUBMIT</button>
    </Main>
  );
};

export default Register;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .inputValidationBox {
    height: 100px;
    width: 200px;
    background-color: antiquewhite;
  }
  h3 {
    max-width: 80%;
    font-size: 30px;
    text-align: center;
  }
  .inputs {
    width: 40%;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    input {
      padding: 10px;
      margin-bottom: 20px;
      outline: 1px solid black;
    }
  }
`;
