import { abis } from "@my-app/contracts";
import { getPairsInfo } from "./getPairsInfo";

/**
 * It creates a new contract object, creates an object called factoryInfo, loops through all the pairs
 * and adds them to the factoryInfo object, and then returns the factoryInfo object
 * @param factoryAddress - The address of the factory contract.
 * @param web3 - The web3 object.
 * @returns An object with the following properties:
 */
export const getFactoryInfo = async (factoryAddress, web3) => {
  /* Creating a new contract object. */
  const factory = new web3.eth.Contract(abis.factory, factoryAddress);

  /* Creating an object called factoryInfo. */
  const factoryInfo = {
    feeTo: await factory.methods.feeTo().call(),
    feeToSetter: await factory.methods.feeToSetter().call(),
    allPairsLength: await factory.methods.allPairsLength().call(),
    allPairs: [],
  };

  /* Looping through all the pairs and adding them to the factoryInfo object. */
  for (let i = 0; i < factoryInfo.allPairsLength; i++) {
    factoryInfo.allPairs[i] = await factory.methods.allPairs(i).call();
  }

  factoryInfo.pairsInfo = await getPairsInfo(factoryInfo.allPairs, web3);

  return factoryInfo;
};
