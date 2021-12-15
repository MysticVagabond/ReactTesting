import { gql, useQuery } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { Provider } from "./components/provider";

const getProvidersQuery = gql`
query GetProviders {
  providersList
}`;

function App() {
  const {loading, error, data} = useQuery(getProvidersQuery);


  return (
    <RecoilRoot>
      {data 
        ? data.providersList.map((p: string) => {
            return <Provider providerName={p} />
          }) 
        : <div>Loading ...</div>}
    </RecoilRoot>
  );
}

export default App;
