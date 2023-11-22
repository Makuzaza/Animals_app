import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, click, minus, plus, likes, isBird }) => {
  const imageUrl = `https://source.unsplash.com/400x400/?${name}`;

  return (
    <div className={'card'}>
      <div class="animal-image">
        <img class="animal-image" src={imageUrl} alt={name} /> 
      </div> 
      <h2 class="title">{name}</h2>

      <button  class="close" onClick={click}>
        <span class="material-symbols-outlined">close</span>
      </button>
    
    <div class="line_heart">
      
      <div className="count">
        <button class="minus" onClick={minus}>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
          <span class="material-symbols-outlined">heart_minus</span>
        </button>  
      </div>
      
      {likes >= 0 ? (
          <div className={`likes  ${likes === 0 ? 'grayscale' : ''}`}>
            <img class="heart" src="heart.png" alt="heart" />
            {likes}
          </div>
        ) : (
          <div className='likes'>
            <img class="heart" src="broken-heart.png" alt="broken heart" />
            {likes}
          </div>
        )}
      
      <div className='count'>
        <button class="plus" onClick={plus}>
          <span class="material-symbols-outlined">heart_plus</span>
        </button>
      </div>
      <div className='see'>
      {/* <Link to={`/${isBird ? 'birds' : 'animals'}/${name.toLowerCase().replace(/\s+/g, '_')}?likes=${likes}`}>
          See more...
        </Link> */}
        <Link to={`${name.toLowerCase().replace(/\s+/g, '_')}?likes=${likes}`}>See more...</Link>
        </div>

    </div>
    </div>
  );
};

export default Card;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Card = ({ name, click, minus, plus, likes, category }) => {
//   const imageUrl = `https://source.unsplash.com/400x400/?${name}`;

//   return (
//     <div className="card">
//       {/* ... other card content ... */}
//       <div className='see'>
//         {category === 'animal' ? (
//           <Link to={`/animals/${name.toLowerCase().replace(/\s+/g, '_')}?likes=${likes}`}>
//             See more...
//           </Link>
//         ) : (
//           <Link to={`/birds/${name.toLowerCase().replace(/\s+/g, '_')}?likes=${likes}`}>
//             See more...
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;


//     function Count() {
//       const [count, setCount] = useState(0);
      
//       const plus = () => {
//         setCount(count + 1);
//       }
      
//       const minus = () => {
//         setCount(count - 1);
//       }
      
//       let likes;
//       if (count >= 0) {
//         likes = <img class="heart" src="heart.png" alt="heart" />;
//       } else {
//         likes = <img class="heart" src="broken-heart.png" alt="broken heart" />;
//       };

      
//       return (
//         <div class="line_heart">
//           <div className='count'>
//             <button class="minus" onClick={minus}>
//               <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
//               <span class="material-symbols-outlined">
//                 heart_minus
//                 </span>
//                 </button>  
//           </div>

//           <div className='likes'>{likes}{count}</div>

//           <div className='count'>
//             <button class="plus" onClick={plus}>
//               <span class="material-symbols-outlined">
//                 heart_plus
//                 </span>
//                 </button>
//           </div>

//          </div>
//   );
// }; 


// const Card = ({ name, likes, click }) => {
//   const imageUrl = `https://source.unsplash.com/400x400/?${name}`;
  
//   return (
//     <div className='card'>
//           <img class="animal-image" src={imageUrl} alt={name} />   
//           <h2 class="title">{name}</h2>
//           <button  class="close" onClick={click}>
//             <span class="material-symbols-outlined">close</span>
//             </button>
//           <Count likes={likes}/>
//           <div className='see'><Link to={name.toLowerCase().replace(/\s+/g, '_')}>See more...</Link></div>
//           </div>
//       );
//     };
