import { abis } from "@my-app/contracts";

/**
 * It returns the factory address of the router contract
 * @param routerAddress - The address of the router contract.
 * @param web3 - The web3 instance that you're using to interact with the blockchain.
 * @returns The factory address.
 */
export const getRouterInfo = async (routerAddress, web3) => {
  /* Creating a new instance of the router contract. */
  const router = new web3.eth.Contract(abis.router02, routerAddress);

  /* Returning the factory address. */
  return {
    factory: await router.methods.factory().call(),
  };
};
