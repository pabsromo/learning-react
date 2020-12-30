import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(()=>{
      // Standard approach, but doesn't work because it is asynchronous
      // It was getting the current value at the moment so it only increments once effectively
      // setValue(value + 1);

      // Functional approach
      // This increments the previous value immediately so it can stack
      setValue((prevState) => {
        return prevState + 1;
      });
    },2000);
  };

  return (
    <>
      <section style={{margin:'4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=> setValue(value - 1)}>decrease</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={()=> setValue(value + 1)}>increase</button>
      </section>
      <section style={{margin:'4rem 0'}}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
