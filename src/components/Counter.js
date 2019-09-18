import React, {useState, useEffect} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert('You successfully clicked!')
    }, [count])

    return (
        <>
            <h3>You have clicked me {count} times</h3>
            <button onClick={() => setCount(count+1)}>click me</button>
        </>
    )
}

export default Counter;