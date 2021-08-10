import React from 'react';
import { LoginComponent, DashboardComponent }  from "./components";
import useLocalStorageHook from "./hooks/useLocalStorage-hook";

function App() {
    const [id, setId] = useLocalStorageHook("userId");

    return (
        id
            ? <DashboardComponent id={id} />
            : <LoginComponent onIdSubmit={setId} />
    );
}

export default App;
