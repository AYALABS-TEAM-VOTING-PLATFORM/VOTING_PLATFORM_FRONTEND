import { Button } from "@web3uikit/core";
import { ENSAvatar } from "@web3uikit/web3";
import React from "react";

const Voter = () => {
  return (
    <div className="grid lg:grid-cols-2 py-4">
      <div className="flex flex-row">
        <div className="mr-4">
          <ENSAvatar
            address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
            size={20}
          />
        </div>
        <h2>0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045</h2>
        {/* <p>Minted ✅ </p> */}
        {/* <p>VERIFIED ✅ </p> */}
      </div>
      <div>
        <Button theme="translucent" text="VIEW ON EXPLORER" />
      </div>
    </div>
  );
};

export default Voter;
