import { coinByNameFunction } from "./schemas/coins";
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
    coinTypeName: String
    amount: Float
  }

  type Provider {
    providerName: String
    coins: [Coin]
  }

  type Query {
    coinDetails(coinName: String): CoinType
    providersList: [String]
    provider(providerName: String): Provider
  }
`;

const resolvers = {
    Query: {
      coinDetails: coinByNameFunction,
      providersList: () => providerNameList,
      provider: providerByNameFuncion
    },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});