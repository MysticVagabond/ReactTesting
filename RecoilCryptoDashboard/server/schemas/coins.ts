// TODO: 
// Change this to a MongoDB to persist changes
// Grab the current prices from coingecko https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ckava%2Cpolkadot%2Cbinance-eth%2Ccrypto-com-chain%2Cstellar%2Cpancakeswap-token&vs_currencies=usd
// Grab the current exchange rate from USD to GBP from http://free.currencyconverterapi.com/api/v5/convert?q=USD_GBP&compact=y&apiKey=[APIKEY]

export const ethereum = {
    name: 'Ethereum',
    coinGeckoName: 'ethereum',
    symbol: 'ETH',
    value: 3686.79
}
  
export const cryptoDotCom = {
    name: 'Crypto.com Coin',
    coinGeckoName: 'crypto-com-chain',
    symbol: 'CRO',
    value: 0.518116
}

export const shibaInu = {
    name: 'Shiba Inu',
    coinGeckoName: 'shiba-inu',
    symbol: 'SHIB',
    value: 0.00003242
}

export const binanceEthereum = {
    name: 'Binance Ethereum',
    coinGeckoName: 'binance-eth-staking',
    symbol: 'BETH',
    value: 3421.66
}

export const cake = {
    name: 'Pancake Swap',
    coinGeckoName: 'pancakeswap',
    symbol: 'CAKE',
    value: 12.08
}

export const loopring = {
    name: 'Loopring',
    coinGeckoName: 'loopring',
    symbol: 'LRC',
    value: 2.03
}

export const polkadot = {
    name: 'Polkadot',
    coinGeckoName: 'polkadot',
    symbol: 'DOT',
    value: 24.48
}

export const kava = {
    name: 'Kava',
    coinGeckoName: 'kava',
    symbol: 'KAVA',
    value: 3.24
}

const coinList = [ethereum, cryptoDotCom, shibaInu, binanceEthereum, loopring, cake, polkadot, kava];

export function coinByNameFunction(_, { coinName }) {
    return coinList.find((coin) => coin.name === coinName)
}