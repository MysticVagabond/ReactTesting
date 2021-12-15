export const Coin: React.FC<{coinName: string, amount: number}> = ({coinName, amount}) => {
    // Use Recoil for getting coin details which calls on backend
    // Display

    return (
        <div>I have {amount} {coinName}</div>
    );
}