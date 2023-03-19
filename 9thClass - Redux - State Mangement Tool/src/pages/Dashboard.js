import { useCallback, useContext, useEffect, useState } from "react";
import AnotherCounter from "../components/AnotherCounter";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Dashboard() {
    const { isLoggedIn, appName, message: storeMessage } = useSelector((state) => state);
    console.log(appName)
    
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("")

    const increment = useCallback(() => {
        setCounter(counter + 1);
    }, [counter])

    const decrement = useCallback(() => {
        setCounter((counter) => counter - 1);
    }, [])

    return <>
        <Navbar />
        <h1>{isLoggedIn ? "Welcome to the Dashboard!" : "Unauthenticated User!!!!"}</h1>
        <h1>{storeMessage}</h1>
        <Counter />
        <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
        <AnotherCounter counter={counter} increment={increment} decrement={decrement} />
    </>
}

export default Dashboard;