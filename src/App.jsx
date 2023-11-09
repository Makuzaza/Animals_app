import React, { useState } from 'react'
import './index.css'
import Card from './Card'
import Header from './header'
import Footer from './footer'
import { animals } from './animalsList'
import { birds } from './animalsList'

function App() {
  const [animalList, setAnimals] = useState(animals);
  const [search, setSearch] = useState('');

  const removeHandler = (index) => {
    const updatedArray = animalList.filter((animal, i) => i !== index); 
    setAnimals(updatedArray)
  };

  const switchType = (animalType) => {
    if (animalType === 'animals') {
      setAnimals(animals);
    } else if (animalType === 'birds') {
      setAnimals(birds);
    };
  };

  const searchInput = (event) => {
    setSearch(event.target.value);
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = animalList.filter((animal) => {
      const choosingName = animal.name.toLowerCase().includes(searchTerm);
      return choosingName;
    });
    setAnimals(filteredData);
  };

  return (
<>  
    <Header />
    <main>
      <div>
        <button onClick={() => switchType('animals')}><h1>Animals</h1></button>
        <button onClick={() => switchType('birds')}><h1>Birds</h1></button>
      </div>
      <div><input 
      id="search" 
      type="text" 
      placeholder="Search..." 
      value={search}
      onChange={searchInput}
      />
      </div>
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