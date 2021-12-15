import { binanceEthereum, cake, cryptoDotCom, ethereum, kava, loopring, polkadot, shibaInu } from "./coins";

const BINANCE = 'Binance';
const BLOCKFI = 'BlockFi';
const COINBASE = 'Coinbase';
const CRYPTODOTCOM = 'Crypto.Com';
const KRAKEN = 'Kraken';

export const providerNameList = [BINANCE, BLOCKFI, COINBASE, CRYPTODOTCOM, KRAKEN];
  
const BinanceProvider = {
    providerName: BINANCE,
    coins: [
    {
        coinType: binanceEthereum,
        amount: 0.04421439
    },
    {
        coinType: ethereum,
        amount: 0.00004118
    },
    {
        coinType: cake,
        amount: 0.00984676
    }]
}

const BlockFiProvider = {
    providerName: BLOCKFI,
    coins: [{
        coinType: ethereum,
        amount: 0.15835733
    }]
}

const CoinbaseProvider = {
    providerName: COINBASE,
    coins: [{
        coinType: shibaInu,
        amount: 1070544.05316158
    }]
}

const CryptoDotComProvider = {
    providerName: CRYPTODOTCOM,
    coins: [
    {
        coinType: cryptoDotCom,
        amount: 2586.82
    },
    {
        coinType: loopring,
        amount: 26.6
    },
    {
        coinType: cake,
        amount: 0.05
    }]
}

const KrakenProvider = {
    providerName: KRAKEN,
    coins: [
    {
        coinType: polkadot,
        amount: 7.74742934
    },
    {
        coinType: kava,
        amount: 24.059938
    }]
}

const providerList = [BinanceProvider, BlockFiProvider, CoinbaseProvider, CryptoDotComProvider, KrakenProvider];

export function providerByNameFuncion(_, { providerName }) {
    return providerList.find((provider) => provider.providerName === providerName)
}