import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter', 
    age:24, 
    message:'random message'
  });

  // You could also do this with a bunch of state values
  // There are some use cases where the object way is easier
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')
  
  const changeMessage = () => {
    setPerson({...person, message:'hello world'});
    // Use the spread operator to copy the old values from the state value
    // Then change the individual thing you want to change
    
    // Other method with individual state values
    // setMessage('hello world');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
