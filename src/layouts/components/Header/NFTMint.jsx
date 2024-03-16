import React, { useState } from "react";

import { ethers } from "ethers";

function NFTMintButton() {
  let address, signer, provider;

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
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await provider.listAccounts();
      setAddress(accounts[0]);
      const balance = await provider.getBalance(accounts[0]);
      console.log(balance);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
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
