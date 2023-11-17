import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import Hero from "../../sections/Home/Hero";
import Notice from "../../sections/Home/Notice";
import CurrentCandidate from "../../sections/Home/CurrentCandidate";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <Main>
      <Navbar />
      <Hero />
      <Notice />
      <CurrentCandidate />
      <Footer />
    </Main>
  );
};

export default Home;

const Main = styled.div`
  position: relative;
`;
