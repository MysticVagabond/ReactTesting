import { gql, useQuery } from "@apollo/client";
import { Coin } from "./coin";

const getProviderDetailsQuery = gql`
    query getProviderDetailsQuery($providerName: String) {
        provider(providerName: $providerName) {
            providerName
            coins {
                coinTypeName
                amount
            }
        }
    }`;

interface coinDetail {
    coinName: string;
    amount: number;
}

export const Provider: React.FC<{providerName: string}> = ({providerName}) => {
    const {loading, error, data} = useQuery(getProviderDetailsQuery, { variables: { providerName }});
    console.log(providerName, data);
    return (
        <>
            { // TODO: WORK OUT WHY DATA IS RETURNING IN NETWORK BUT WONT ITERATE IN MAP
            data && data.provider && data.provider.coins
                ? data.provoider.coins.map((coin: coinDetail) => {
                    return <Coin coinName={coin.coinName} amount={coin.amount} />
                })
                : <div>{data}</div>}
            {loading ? <div>Loading provider details for {providerName}...</div> : null}
            {error ? <div>Error in getting provider details for {providerName}</div> : null}
        </>
    );
}