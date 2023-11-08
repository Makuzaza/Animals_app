import React, { useState } from 'react';

const Card = ({ name, likes, click }) => {
  const imageUrl = `https://source.unsplash.com/400x400/?${name}`;
        
  return (
        <div className='card'>
          <img class="animal-image" src={imageUrl} alt={name} />   
          <h2 class="title">{name}</h2>
          <button  class="close" onClick={click}><span class="material-symbols-outlined">X</span></button>
          <Count likes={likes}/>
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
  
  let likes;
  if (count >= 0) {
    likes = <img class="heart" src="heart.png" alt="heart" />;
  } else {
    likes = <img class="heart" src="broken-heart.png" alt="broken heart" />;
  };
  
  return (
    <div class="line_heart">
    <button class="plus" onClick={minus}>-</button>  
    
    <span>{likes}{count}</span>
    <button class="minus" onClick={plus}>+</button>
    </div>
  );
}; 

export default Card;