import React from "react";
import styled from "styled-components";
import image from "../../assets/img.jpg";
import { Button } from "@web3uikit/core";

const Hero = () => {
  return (
    <Main>
      <img src={image} alt="img" srcset="" />
      <div className="overlay"></div>
      <div className="text">
        <h1> WELCOME TO THE DECENTRALIZED VOTING SYSTEM IN AFRICA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui
          perspiciatis laboriosam, omnis voluptatibus architecto nesciunt
          repudiandae ducimus voluptates temporibus?
        </p>
        <div className="button flex">
          <div className="mr-8">
            <Button
              theme="outline"
              type="button"
              text="START VOTING!"
              size="large"
            />
          </div>
          <Button theme="link" type="button" text="LEARN MORE" size="large" />
        </div>
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  height: 100vh;
  /* background-color: #d6d6d6; */
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  .button {
    margin-top: 20px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      text-align: center;
      font-size: 50px;
      max-width: 80%;
    }
    p {
      margin-top: 10px;
      text-align: center;
      max-width: 50%;
    }
  }
  .overlay {
    position: absolute;
    background-color: #00000095;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
  img {
    z-index: -2;
    position: absolute;
  }
`;
