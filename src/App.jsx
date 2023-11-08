import React, { useState } from 'react'
import './index.css'
import Card from './Card'
import Header from './header'
import Footer from './footer'
import { animals } from './animalsList'

function App() {
  // const [animalList, setAnimals] = useState(animals);
  const [animalList, setAnimals] = useState(animals);

  const removeHandler = (index) => {
    const updatedArray = animalList.filter((animal, i) => i !== index); 
    setAnimals(updatedArray)
  };
  return (
<>  
    <Header />
    <main>
      <h1>Animals</h1>
      <div><input id="search" type="text" placeholder="Search..." /></div>
      <div className="cards">
          {animalList.map((animal, i) => (
            <Card key={i} name={animal.name} likes={animal.likes} click={() => removeHandler(i)}/>
          ))};
        </div>
    </main>
      <Footer />
      </>
  );
};

export default App;