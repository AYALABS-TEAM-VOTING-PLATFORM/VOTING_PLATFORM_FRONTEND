import React from "react";
import Voter from "../../components/Voter";

const Voters = () => {
  return (
    <div className="flex flex-col p-8">
      {[1, 3, 4, 5, 6, 6].map((val) => (
        <Voter />
      ))}
    </div>
  );
};

export default Voters;
