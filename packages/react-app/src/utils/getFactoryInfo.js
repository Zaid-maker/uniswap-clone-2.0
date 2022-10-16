import { abis } from "@my-app/contracts";
import { getPairsInfo } from "./getPairsInfo";

export const getFactoryInfo = async (factoryAddress, web3) => {
  /* Creating a new contract object. */
  const factory = new web3.eth.Contract(abis.factory, factoryAddress);

  /* Creating an object called factoryInfo. */
  const factoryInfo = {
    fee: await factory.methods.fee().call(),
    feeToSetter: await factory.methods.fee().call(),
    allPairsLength: await factory.methods.fee().call(),
    allPairs: [],
  };

  /* Looping through all the pairs and adding them to the factoryInfo object. */
  for (let i = 0; i < factoryInfo.allPairsLength; i++) {
    factoryInfo.allPairs[i] = await factory.methods.allPairs(i).call();
  }

  factoryInfo.pairsInfo = await getPairsInfo(factoryInfo.allPairs, web3)

  return factoryInfo;
};
