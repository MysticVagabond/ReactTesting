import React, {useState} from 'react';
import Login from "./components/Login";

function App() {
    const [id, setId] = useState("default");

    return (
        <>
            {id}
            <Login onIdSubmit={setId} />
        </>
    );
}

export default App;
