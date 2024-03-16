import React, { useState } from "react";

import { ethers } from "ethers";

function NFTMintButton() {
  let address, provider;

  const [isConnected, toggleConnected] = useState(0);

  function setAddress(ethaddy) {
    address = ethaddy;
    if (address != null) {
      toggleConnected(!isConnected);
    }
    console.log("Account:", address);
    alert("Connected: " + address);
  }

  function handleButtonClick() {
    if (!isConnected) {
      connectWallet();
    } else {
      mintNFT();
    }
  }

  function mintNFT() {}

  async function connectWallet() {
    provider = new ethers.BrowserProvider(window.ethereum);
    // Prompt user for account connections
    const res = await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    setAddress(res);
  }

  return (
    <div
      id="nftButton"
      className="navbarBoxButton button-link"
      onClick={handleButtonClick}
    >
      {isConnected ? "MINT NOW" : "CONNECT WALLET"}
    </div>
  );
}

export default NFTMintButton;
