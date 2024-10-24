import React, { useEffect, useState } from 'react';

export default function SecondStudy () {
const [count, setCount] = useState(1);
const handleCountUpdate = () => {
  setCount(count + 1);
};
useEffect(() =>{
  console.log('렌더링!');
})

  return (
    <>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>

    </>
  );
}

