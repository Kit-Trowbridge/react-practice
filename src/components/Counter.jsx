import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const countIncrementer = () => {
        // countIncrementer doesn't need to return anything, it just calls setCount
        // useState is what returns the count value
        setCount(count + 1)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={countIncrementer}>Increment the counter</button>
        </div>
    )
};

export default Counter