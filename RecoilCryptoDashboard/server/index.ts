import { coinList, coinByNameFunction, coinBySymbolFunction } from "./schemas/coins";
import { providerByNameFuncion, providerNameList } from "./schemas/providers";

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type CoinType {
    name: String
    coinGeckoName: String
    symbol: String
    value: Float
  }

  type Coin {
    coinType: CoinType
    amount: Float
  }

  type Provider {
    providerName: String
    coins: [Coin]
  }

  type Query {
    coins: [CoinType]
    coinByName(coinName: String): CoinType
    coinBySymbol(coinSymbol: String): CoinType
    providersList: [String]
    provider(providerName: String): Provider
  }
`;

const resolvers = {
    Query: {
      coins: () => coinList,
      coinByName: coinByNameFunction,
      coinBySymbol: coinBySymbolFunction,
      providersList: () => providerNameList,
      provider: providerByNameFuncion
    },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});