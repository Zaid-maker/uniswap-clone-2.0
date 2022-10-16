import Web3 from "web3";
import { useState, useEffect } from "react";
import { useConfig } from "@usedapp/core";

import { ROUTER_ADDRESS } from "../config";
import { getRouterInfo, getFactoryInfo } from "../utils";

/**
 * It takes a providerUrl, creates a web3 instance, gets the routerInfo, gets the factoryInfo, and
 * returns the factoryInfo.pairsInfo
 * @param providerUrl - The URL of the Ethereum node you want to connect to.
 * @returns An array of objects.
 */
export const loadPools = async (providerUrl) => {
  const provider = new Web3.providers.HttpProvider(providerUrl);
  const web3 = new Web3(provider);

  const routerInfo = await getRouterInfo(ROUTER_ADDRESS, web3);
  const factoryInfo = await getFactoryInfo(routerInfo.factory, web3);

  return factoryInfo.pairsInfo;
};

export const usePools = () => {
  /* Destructuring the `useConfig` function. */
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  /* Creating a state variable called `loading` and a function called `setLoading` that can be used to
  update the state variable. */
  const [loading, setLoading] = useState(true);
  /* Creating a state variable called `pools` and a function called `setPools` that can be used to
  update the state variable. */
  const [pools, setPools] = useState({});

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    loadPools(readOnlyUrls(readOnlyChainId)).then((pools) => {
      setPools(pools);
      setLoading(false);
    });
  }, [readOnlyChainId, readOnlyUrls]);

  /* Returning an array of two values. */
  return [loading, pools];
};
