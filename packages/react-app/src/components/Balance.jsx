import React from "react";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import styles from "../styles";

const Balance = ({ tokenBalance }) => {
  return (
    <div className={styles.balance}>
      <div className={styles.balanceText}>
        {tokenBalance ? (
          <>
            <span className={styles.balanceBold}>Balance: </span>
            {formatUnits(tokenBalance ?? parseUnits("0"))}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Balance;
