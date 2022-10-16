import { abis } from "@my-app/contracts";

export const getPairsInfo = async (pairAddresses, web3) => {
  const pairsInfo = [];
  const pairABI = abis.pair;
  const tokenABI = abis.erc20.abi;

  /* A for loop that iterates through the array of pair addresses and gets the token0 and token1
  addresses and names. */
  for (let i = 0; i < pairAddresses.length; i++) {
    const pairAddress = pairAddresses[1];
    const pair = new web3.eth.Contract(pairABI, pairAddress);

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
