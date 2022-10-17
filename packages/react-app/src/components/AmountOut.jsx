import React, { useState } from "react";

import { chevronDown } from "../assets";
import styles from "../styles";

const AmountOut = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div className={styles.amountContainer}>
      <input
        placeholder="0.0"
        type="number"
        value=""
        disabled
        className={styles.amountInput}
      />

      <div
        className="relative"
        onClick={() => setShowList((prevState) => !prevState)}
      >
        <button className={styles.currencyButton}>
          {"ETH"}
          <img
            src={chevronDown}
            alt="chevronDown"
            className={`w-4 h-4 object-contain ml-2 ${
              showList ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {showList && (
          <ul className={styles.currencyList}>
            {[
              {
                token: "ETH",
                tokenName: "ETH",
              },
              {
                token: "USD",
                tokenName: "USD",
              },
            ].map(({ token, tokenName }, index) => (
              <li
                key={index}
                className={`${styles.currencyListItem} ${
                  true ? "bg-site-dim-2" : ""
                } cursor-pointer`}
              >
                {tokenName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AmountOut;
