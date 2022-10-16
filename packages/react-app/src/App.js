import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./styles";
import { uniswapLogo } from "./assets";
import { Loader, Exchange, WalletButton } from './components'

const App = () => {
  /* It's a custom hook that returns the current account. */
  const { account } = useEthers();

  const poolIsLoading = false;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap 2.0</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  poolIsLoading ? (
                    <Loader title="Loading Pools, please wait!" />
                  ) : (
                    <Exchange />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
