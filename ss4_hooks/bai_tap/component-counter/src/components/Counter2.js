import React, { useState } from "react";

function Counter2() {
    const [counter2, setCounter2] = useState(0);

    return (
        <>
            <h5>Count: {counter2}</h5>
            <button onClick={() => {
                setCounter2((previousCounter) => previousCounter + 2);
            }}>Add 2</button>
        </>
    )
}

export default Counter2;