export const ethereum = {
    name: 'Ethereum',
    coinGeckoName: 'ethereum',
    symbol: 'ETH',
    value: 0
}
  
export const cryptoDotCom = {
    name: 'Crypto.com Coin',
    coinGeckoName: 'crypto-com-chain',
    symbol: 'CRO',
    value: 0
}

export const shibaInu = {
    name: 'Shiba Inu',
    coinGeckoName: 'shiba-inu',
    symbol: 'SHIB',
    value: 0
}

export const binanceEthereum
= {
    name: 'Binance Ethereum',
    coinGeckoName: 'binance-eth-staking',
    symbol: 'BETH',
    value: 0
}

export const cake = {
    name: 'Pancake Swap',
    coinGeckoName: 'pancakeswap',
    symbol: 'CAKE',
    value: 0
}

export const loopring = {
    name: 'Loopring',
    coinGeckoName: 'loopring',
    symbol: 'LRC',
    value: 0
}

export const polkadot = {
    name: 'Polkadot',
    coinGeckoName: 'polkadot',
    symbol: 'DOT',
    value: 0
}

export const kava = {
    name: 'Kava',
    coinGeckoName: 'kava',
    symbol: 'KAVA',
    value: 0
}

export const coinList = [ethereum, cryptoDotCom, shibaInu, binanceEthereum, loopring, cake, polkadot, kava];

export function coinByNameFunction(_, { coinName }) {
    return coinList.find((coin) => coin.name === coinName)
}

export function coinBySymbolFunction(_, { coinSymbol }) {
    return coinList.find((coin) => coin.symbol === coinSymbol)
}