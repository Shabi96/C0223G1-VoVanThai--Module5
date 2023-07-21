import { useState } from "react";

export default function useCounter(add) {
    const [count, setCount] = useState(add);

    const increase = () => {
        setCount((previousState) => previousState + add);
    }
    return [count, increase];

}

