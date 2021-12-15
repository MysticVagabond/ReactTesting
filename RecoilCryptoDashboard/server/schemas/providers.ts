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
        coinTypeName: binanceEthereum.name,
        amount: 0.04421439
    },
    {
        coinTypeName: ethereum.name,
        amount: 0.00004118
    },
    {
        coinTypeName: cake.name,
        amount: 0.00984676
    }]
}

const BlockFiProvider = {
    providerName: BLOCKFI,
    coins: [{
        coinTypeName: ethereum.name,
        amount: 0.15835733
    }]
}

const CoinbaseProvider = {
    providerName: COINBASE,
    coins: [{
        coinTypeName: shibaInu.name,
        amount: 1070544.05316158
    }]
}

const CryptoDotComProvider = {
    providerName: CRYPTODOTCOM,
    coins: [
    {
        coinTypeName: cryptoDotCom.name,
        amount: 2586.82
    },
    {
        coinTypeName: loopring.name,
        amount: 26.6
    },
    {
        coinTypeName: cake.name,
        amount: 0.05
    }]
}

const KrakenProvider = {
    providerName: KRAKEN,
    coins: [
    {
        coinTypeName: polkadot.name,
        amount: 7.74742934
    },
    {
        coinTypeName: kava.name,
        amount: 24.059938
    }]
}

const providerList = [BinanceProvider, BlockFiProvider, CoinbaseProvider, CryptoDotComProvider, KrakenProvider];

export function providerByNameFuncion(_, { providerName }) {
    return providerList.find((provider) => provider.providerName === providerName)
}