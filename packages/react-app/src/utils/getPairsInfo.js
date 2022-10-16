import { abis } from "@my-app/contracts";

/**
 * It takes in an array of pair addresses and a web3 instance, and returns an array of objects that
 * contain the pair address, token0Address, token1Address, token0Name, and token1Name
 * @param pairAddresses - An array of pair addresses.
 * @param web3 - The web3 object that is used to interact with the blockchain.
 * @returns An array of objects.
 */
export const getPairsInfo = async (pairAddresses, web3) => {
  const pairsInfo = [];
  const pairABI = abis.pair;
  const tokenABI = abis.erc20.abi;

  /* A for loop that iterates through the array of pair addresses and gets the token0 and token1
  addresses and names. */
  for (let i = 0; i < pairAddresses.length; ++i) {
    const pairAddress = pairAddresses[i];
    const pair = new web3.eth.Contract(pairABI, pairAddresses[i]);

    const token0Address = await pair.methods.token0().call();
    const token1Address = await pair.methods.token1().call();

    const token0Contract = new web3.eth.Contract(tokenABI, token0Address);
    const token1Contract = new web3.eth.Contract(tokenABI, token1Address);

    const token0Name = await token0Contract.methods.name().call();
    const token1Name = await token1Contract.methods.name().call();

    /* Pushing the pair address, token0Address, token1Address, token0Name, and token1Name into the
    pairsInfo array. */
    pairsInfo.push({
      address: pairAddress,
      token0Address,
      token1Address,
      token0Name,
      token1Name,
    });
  }

  return pairsInfo;
};
