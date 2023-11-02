import React, { useState } from 'react';

const Card = () => {
        return (
        <div className='card'>
          <img class="fox" src="fox.jpg" alt="Fox" />   
          <h2 class="title">Title</h2>
          <button  class="close"><span class="material-symbols-outlined">close</span></button>
          <Count />
          </div>
      );
    };

function Count() {
  const [count, setCount] = useState(0);
  
  const plus = () => {
    setCount(count + 1);
  }
  
  const minus = () => {
    setCount(count - 1);
  }
  
  let heart;
  if (count >= 0) {
    heart = <img class="heart" src="heart.png" alt="heart" />;
  } else {
    heart = <img class="heart" src="broken-heart.png" alt="broken heart" />;
  };
  
  return (
    <div class="line_heart">
    <button class="plus" onClick={minus}>-</button>  
    
    <span>{heart}{count}</span>
    <button class="minus" onClick={plus}>+</button>
    </div>
  );
}; 

export default Card;
