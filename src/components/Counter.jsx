import { useState } from "react"
const Counter = (props) => {
    const [count, setCount] = useState(0)
    const countIncrementer = () => {
        return setCount(count + 1)
    }

    return(
        <div>
            <h2>{props.count}</h2>
            <button onClick={countIncrementer}>Increment the counter</button>
        </div>
    )
};

export default Counter