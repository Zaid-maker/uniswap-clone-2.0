import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "ex390ef8A23CBEe8189c3Fa4A270f2767BdfSaJes6";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/uwA2N1-vIYe3akc3wDRc33lC4GQ00qcS",
  },
};
