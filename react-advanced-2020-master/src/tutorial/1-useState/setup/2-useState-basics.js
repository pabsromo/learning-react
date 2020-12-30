import React, { useState } from 'react';
// notes
// All hooks start with 'use'
// component name must be uppercase where the hook is used
// the hook must be in the function/component body (the hook must be invoked in the body)
// cannot call conditionally (not talking about the function returned from hook)

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('random title');
  
  const handleClick = () => {
    if(text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={handleClick}>
      change title
    </button>
  </React.Fragment>;
};

export default UseStateBasics;
