// import React from 'react';
// import { useParams, useNavigate } from "react-router-dom";
// import name from '../App';

// // let urlParams = useParams;
// // const navigate = useNavigate
// // const array = props[urlParams.category]
// // data = animalList.find((el) => el.name == urlParams.name)

// const AnimalPage = () => {

//   return (
//     <main>
//     <div>
//         {/* <img src= {data.name}></img> */}
//       <h1>About {name}</h1>
//       <p>Description will be here</p>  
//        {/* {data.name}
//     {data.likes}
//     <button onClick = {() => navigate(-1)}>go back</button>  */}
//     </div>
//     </main>
//   );
// };

// export default AnimalPage;

import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { animals, birds } from '../animalsList';
import Animals from '../routes/animals';
import Birds from '../routes/birds';

const AnimalPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  // Assuming that animals and birds are available globally
  const imageUrl = `https://source.unsplash.com/400x400/?${name}`;

  const animal = animals.find((el) => el.name.toLowerCase() === name.toLowerCase());
  const bird = birds.find((el) => el.name.toLowerCase() === name.toLowerCase());
  
  if (!animal) {
    return (
        <main>
        <div>
          <img src={imageUrl} alt={bird.name} />
          <h1>About {bird.name.toUpperCase()}</h1>
          <p>Description will be here</p>
          <p>Likes: {bird.likes}</p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </main>
    )
}
  return (
    <main>
      <div>
        <img src={imageUrl} alt={animal.name} />
        <h1>About {animal.name.toUpperCase()}</h1>
        <p>Description will be here</p>
        <p>Likes: {animal.likes}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </main>
  );
};

export default AnimalPage;


    
  
    
    
    