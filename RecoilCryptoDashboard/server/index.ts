const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type CoinType {
    name: String
    coinGeckoName: String
    symbol: String
  }

  type Coin {
    coinType: CoinType
    amount: Float
  }

  type Query {
    coins: [CoinType]
    coinDetails: [Coin]
  }
`;

const ethTemp = {
  name: 'Ethereum',
  coinGeckoName: 'ethereum',
  symbol: 'ETH'
}

const croTemp = {
  name: 'Crypto.com Coin',
  coinGeckoName: 'crypto-com-chain',
  symbol: 'CRO'
}

const temp = [
    {
      coinType: ethTemp,
      amount: 0.04362742,
    },
    {
      coinType: croTemp,
      amount: 2567,
    },
];

const resolvers = {
    Query: {
      coinDetails: () => temp,
      coins: () => [ethTemp, croTemp]
    },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});