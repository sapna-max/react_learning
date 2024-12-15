import React, { useState } from 'react';
import Counter1 from './Counter1'
import Counter2 from './Counter2'

const Update = () => {
    const [counter1,setcounter1]=useState(0)
    const [counter2,setcounter2]=useState(0)

const increment1=()=>{
    setcounter1(counter1+1)
}

const increment2=()=>{
    setcounter2(counter2+1)
}
    return (
        <div>
            <div>
                <Counter1 value={counter1} onClick={increment1}/>
                <Counter2 value={counter2} onClick={increment2}/>
            </div>
        </div>
    );
}

export default Update;

