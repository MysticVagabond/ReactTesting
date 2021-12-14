import { gql, useQuery } from "@apollo/client";

const testQuery = gql`
query Query {
  coinDetails {
    amount
    coinType {
      name
    }
  }
}`;

function App() {
  const {loading, error, data} = useQuery(testQuery);

  return (
    <div>
      <div>Hello World!</div>
      { loading ? <p>Loading...</p> : null }
      { error ? <p>Error</p> : null }
      { data ? data.coinDetails.map((coinDetails: any) => {
          return (
            <>
              <span>You have {coinDetails.amount} {coinDetails.coinType.name}</span>
              <br/>
            </>
            );
      }) : null}
    </div>
  );
}

export default App;
