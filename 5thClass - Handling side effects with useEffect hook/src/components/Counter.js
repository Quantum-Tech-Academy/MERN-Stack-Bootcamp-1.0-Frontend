import { useState, useEffect } from "react";

function Counter() {
    const [counter, setCounter] = useState(20);

    useEffect(() => {
        const timer = setInterval(function () {
            if(counter !== 0) {
                setCounter(counter - 1);
            } else {
                setCounter(20);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [counter])

    return <>
    <h1>{counter}</h1>
    </>
}

export default Counter;