import React from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { animals, birds } from '../animalsList';
// import {likes} from '../components/Card';
// import {likes} from '../routes/animals';


const AnimalPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const imageUrl = `https://source.unsplash.com/400x400/?${name}`;

  const animal = animals.find((el) => el.name.toLowerCase() === name.toLowerCase());
  const bird = birds.find((el) => el.name.toLowerCase() === name.toLowerCase());
  const likesFromUrl = new URLSearchParams(location.search).get('likes');

  if (!animal) {
    return (
        <main>
        <div>
          <img src={imageUrl} alt={bird.name} />
          <h1>About {bird.name.toUpperCase()}</h1>
          <p>Description will be here</p>
          {/* <p>Likes: {bird.likes}</p> */}
          <p>Likes: {likesFromUrl}</p>
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
        {/* <p>Likes: {animal.likes}</p> */}
        <p>Likes: {likesFromUrl}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </main>
  );
};

export default AnimalPage;


    
  
    
    
    