interface IChain {
  [key: string]: {
    chainId: string
    chainName: string
    rpcUrls: string[]
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    }
    blockExplorerUrls: string[]
  }
}

// DO NOT CHANGE KEY PROPERTIES
// Metamask needs exactly these properties to work (e.g adding new network, additional keys will break that)
export const chains: IChain = {
  137: {
    chainId: "0x89",
    chainName: "Polygon Mainnet",
    rpcUrls: ["https://polygon-rpc.com/"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: [
      " https://polygonscan.com",
    ],
  },
  1: {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://etherscan.io"],
  },
}

export type Chain = keyof typeof chains

const getChain = (chainId: number) => {
  return chains[chainId]
}

export default getChain
