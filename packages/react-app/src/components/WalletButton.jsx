import React, { useState, useEffect } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import styles from "../styles";

const WalletButton = () => {
  const [accountAddress, setAccountAddress] = useState("");
  const { ens } = useLookupAddress();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  /* A hook that is called when the component is mounted and when the component is updated. */
  useEffect(() => {
    if (ens) {
      setAccountAddress(ens);
    } else if (account) {
      setAccountAddress(shortenAddress(account));
    } else {
      setAccountAddress('');
    }
  }, [account, ens, setAccountAddress]);

  return (
    <button
      /* Checking if the account is active or not. If it is not active, it will activate the browser
      wallet. If it is active, it will deactivate the browser wallet. */
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
      className={styles.walletButton}
    >
      {!accountAddress ? "Connect Wallet" : accountAddress}
    </button>
  );
};

export default WalletButton;
