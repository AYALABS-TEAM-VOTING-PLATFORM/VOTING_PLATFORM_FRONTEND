import { Button } from "@web3uikit/core";
import { ENSAvatar } from "@web3uikit/web3";
import React, { useEffect, useState } from "react";
import { _isVerified } from "../constants/_helperFunctions";

const Voter = ({ address }) => {
  const [verified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkIfVerified = async () => {
    const data = await _isVerified({ address, loading, setLoading });
    setIsVerified(data);
  };

  useEffect(() => {
    checkIfVerified();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 py-4">
      <div className="flex flex-row">
        <div className="mr-4">
          <ENSAvatar address={address} size={20} />
        </div>
        <div>
          <h2>{`${address.slice(0, 8)}....${address.slice(-6)}`}</h2>
          {/* <p>Minted ✅ </p> */}
          <p>
            VERIFIED -{" "}
            {verified == true
              ? "This address is verified✅"
              : "Not verified ❌"}{" "}
          </p>
        </div>
      </div>
      <div>
        <a
          href={`https://sepolia.etherscan.io/address/${address}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button theme="translucent" text="VIEW ON EXPLORER" />
        </a>
      </div>
    </div>
  );
};

export default Voter;
