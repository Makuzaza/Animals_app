import React from 'react';
import { useParams } from "react-router-dom";
import name from '../App';

const AnimalPage = (props) => {

  return (
    <main>
    <div>
      <h1>About {props.name}</h1>
      <p>Description will be here</p>
    </div>
    </main>
  );
};

export default AnimalPage;


