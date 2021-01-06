import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

// you can have as many useEffects as you want
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(()=> {
    // The empty 'dependency list' as second argument when empty makes it so that
    //   useEffect only runs on the initial render.
    // When stuff inside 'dependency list' the useEffect runs only when the items
    //   inside are changed.
    // Used for stuff you want to do after each render.
    console.log('call useEffect');
    if(value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value])

  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('render component');
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
  </>;
};

export default UseEffectBasics;
