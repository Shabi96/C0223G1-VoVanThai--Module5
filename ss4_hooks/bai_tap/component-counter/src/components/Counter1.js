import { useState } from 'react';

function Counter1() {
    const [counter1, setCounter1] = useState(0);

    return (
        <>
            <h5>Count: {counter1}</h5>
            <button onClick={() => {
                setCounter1((previousCounter) => previousCounter + 1);
            }}>Add 1</button>
        </>
    )
}

export default Counter1;