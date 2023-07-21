
import useCounter from "../hooks/useCounter";

function Counter2() {
    const [counter2, setCounter2] = useCounter(2);

    return (
        <>
            <h5>Count: {counter2}</h5>
            <button onClick={setCounter2}>Add 2</button>
        </>
    )
}

export default Counter2;