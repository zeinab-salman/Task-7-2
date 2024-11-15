
import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count < 100) {
      setCount(count + 10);
    } else if (count < 1000) {
      setCount(count + 100);
    }
  };

  const decrementCount = () => {
    if (count >= 100) {
      setCount(count - 100);
    } else if (count >= 10) {
      setCount(count - 10);
    } else if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {

    if (count === 0) {
      alert("Welcome To Our App Press button");
    }


    if (count > 0 && (count % 10 === 0)) {
      alert(`count=${count}`);
      setShowPopup(true);
    }

    if (count === 10 || count === 100 || count === 1000) {
      setBackgroundColor('lightblue');
      setTimeout(() => setBackgroundColor('white'), 5000);
    }
    if (count >= 1000) {
      alert("count =1000 stop button");

    }

  }, [count]);

  return (
    <div style={{ backgroundColor }} className='app'>
      <h1>count:{count}</h1>
      <button onClick={incrementCount} disabled={count >= 1000}>Count +</button>
      {count >= 100 &&
        <button onClick={decrementCount}>Count -</button>
      }
    </div>
  );
};

export default App;




