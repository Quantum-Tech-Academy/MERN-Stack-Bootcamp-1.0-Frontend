import { useCallback, useContext, useState } from "react";
import AnotherCounter from "../components/AnotherCounter";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
import AuthContext from "../store/auth";

function Dashboard() {
    const contextData = useContext(AuthContext);
    
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("")

    const increment = useCallback(() => {
        setCounter(counter + 1);
    }, [counter])

    const decrement = useCallback(() => {
        setCounter(counter - 1);
    }, [])

    return <>
        <Navbar />
        <h1>{contextData.isLoggedIn ? "Welcome to the Dashboard!" : "Unauthenticated User!!!!"}</h1>
        <Counter />
        <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
        <AnotherCounter counter={counter} increment={increment} decrement={decrement} />
    </>
}

export default Dashboard;