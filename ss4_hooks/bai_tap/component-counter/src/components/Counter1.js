import useCounter from '../hooks/useCounter';

export default function Counter1() {
    const [counter1, setCounter1] = useCounter(1);

    return (
        <>
            <h5>Count: {counter1}</h5>
            <button onClick={setCounter1}>Add 1</button>
        </>
    )
}

