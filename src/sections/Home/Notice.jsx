import React from "react";
import styled from "styled-components";

const Notice = () => {
  return (
    <Main>
      <h2>NOTICE</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nobis
        doloribus optio consequuntur! Temporibus consectetur odio, officia
        adipisci repellat ut officiis mollitia qui iusto deleniti, eaque
        laboriosam praesentium veritatis est deserunt. Tenetur repellat aperiam
        minus optio tempore fugit necessitatibus beatae?
      </p>
    </Main>
  );
};

export default Notice;

const Main = styled.div`
  height: 200px;
  text-align: center;
  background-color: #353a5d;
  margin-block: 30px;
  padding-block: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
  p {
    max-width: 70%;
  }
`;
