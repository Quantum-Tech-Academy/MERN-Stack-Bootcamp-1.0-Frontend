import { memo } from "react"

function AnotherCounter({ counter, increment, decrement }) {
    console.log("another counter")
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        )
}

export default memo(AnotherCounter)