import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Main>
      <h3>Built For Ayalabs 🙂</h3>
      <ul className="flex justify-center">
        <li className="mx-2">Contact Us</li>
        <li className="mx-2">Learn More</li>
      </ul>
    </Main>
  );
};

export default Footer;

const Main = styled.div`
  text-align: center;
  padding-block: 30px;
  background-color: #353a5d;
  color: white;
`;
