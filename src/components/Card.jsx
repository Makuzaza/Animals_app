import React, { useState } from 'react';

const Card = ({ name, likes, click }) => {
  const imageUrl = `https://source.unsplash.com/400x400/?${name}`;

  
  return (
    <div className='card'>
          <img class="animal-image" src={imageUrl} alt={name} />   
          <h2 class="title">{name}</h2>
          <button  class="close" onClick={click}><span class="material-symbols-outlined">close</span></button>
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
    <div className='count'>
      <button class="minus" onClick={minus}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <span class="material-symbols-outlined">
heart_minus
</span>
</button>  
    </div>

    <div className='likes'>{likes}{count}</div>

    <div className='count'>
      <button class="plus" onClick={plus}>
      <span class="material-symbols-outlined">
heart_plus
</span>
</button>
    </div>
    </div>
  );
}; 

export default Card;

// const Card = ({ name, close, dislike, like, likes }) => {
//   return (
//     <div className="card">
//       <div className="image">
//         <img
//           src={`https://source.unsplash.com/400x400/?${name}`}
//           alt="unsplash random"
//         />
//       </div>
//       <p className="title">{name}</p>

//       <button onClick={close} className="close">
//         <span className="material-symbols-outlined">close</span>
//       </button>

//       <div className="votes">
//         <button onClick={dislike} className="downvote">
//           <span className="material-symbols-outlined">remove</span>
//         </button>

//         <p className="hearts">
//           {likes}
//           <span className="material-symbols-outlined">favorite</span>
//         </p>

//         <button onClick={like} className="upvote">
//           <span className="material-symbols-outlined">add</span>
//         </button>

//       </div>
//     </div>
//   );
// };