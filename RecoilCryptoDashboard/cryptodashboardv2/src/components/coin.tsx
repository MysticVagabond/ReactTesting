export const Coin: React.FC<{coinName: string, symbol: string, value: number, amount: number}> = ({coinName, symbol, value, amount}) => {
    // Use Recoil for getting coin details which calls on backend
    // Display

    return (
        <div>{coinName}</div>
    );
}