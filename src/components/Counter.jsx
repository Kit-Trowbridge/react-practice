// import { useState } from "react"

// const Counter = () => {
//     const [count, setCount] = useState(0)
//     const countIncrementer = () => {
//         // countIncrementer doesn't need to return anything, it just calls setCount
//         // useState is what returns the count value
//         setCount(count + 1);
//     }

//     const countDecrementer = () => {
//         setCount(count - 1);
//     }

//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={countIncrementer}>Increment</button>
//             <button onClick={countDecrementer}>Decrement</button>
//         </div>
//     )
// };

// export default Counter

import { useState } from "react";

const Counters = () => {
    const [listOfCounts, setListOfCounts] = useState([0,0,0])

    const updateCounter = (index) => {
        const newCounts = [...listOfCounts] // This is a "spread" operator, and it's the same as doing `const newCounts = [listOfCounts[0], listOfCounts[1], listOfCounts[2]]`
        newCounts[index] ++                 // Increment the relevant count in the *new* array
        setListOfCounts(newCounts)          // Use new array to set new state
    }

    return (
    <>
        <button onClick={()=> updateCounter(0)}>First counter: {listOfCounts[0]}</button>
        <button onClick={()=> updateCounter(1)}>First counter: {listOfCounts[1]}</button>
        <button onClick={()=> updateCounter(2)}>First counter: {listOfCounts[2]}</button>
    </>
    )

}

export default Counters;

