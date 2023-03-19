import { useReducer } from "react";

const initialState = {
    counter: 0,
    message: "initial message"
}

function reducerFunction(previousState, action) {
    if(action.type === "INCREMENT") {
        return { ...previousState, counter: previousState.counter + 1, };
    } else if(action.type === "DECREMENT") {
        return { ...previousState, counter: previousState.counter - 1, };
    }
}

export default function Counter() {

    const [state, dispatch] = useReducer(reducerFunction, initialState);


    function increment() {
        dispatch({ type: "INCREMENT" })
    }

    function decrement() {
        dispatch({ type: "DECREMENT"})
    }

    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}