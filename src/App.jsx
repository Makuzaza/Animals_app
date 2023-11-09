// import React and required components and data
import React, { useState } from 'react'
import './index.css'
import Card from './Card'
import Header from './header'
import Footer from './footer'
import { animals } from './animalsList'
import { birds } from './animalsList'

// initialize state variables: useState - hook, animalList and search - variables
function App() {
  const [animalList, setAnimals] = useState(animals);
  const [search, setSearch] = useState('');

  const removeHandler = (index) => {
    const updatedArray = animalList.filter((animal, i) => i !== index); 
    setAnimals(updatedArray)
  };

// event handlers for switching animal types and searching
  const switchType = (animalType) => {
    if (animalType === 'animals') {
      setAnimals(animals);
    } else if (animalType === 'birds') {
      setAnimals(birds);
    };
  };

// const searchInput = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
  
//     // Filter the animal list based on the search query
//     const filteredData = animals.filter((animal) => {
//       const choosingName = animal.name.toLowerCase().includes(searchTerm);
//       return choosingName;
//     });
  
//     setAnimals(filteredData);
//   };

// input change event as a parameter, arrow function
  const searchInput = (event) => {
    //  current value from the input field and converts it to lowercase
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm === '') {
      setAnimals(animals);
    } else {
      const filteredData = animalList.filter((animal) => {
        const choosingName = animal.name.toLowerCase().includes(searchTerm);
        return choosingName;
      });
    // set the animalList state to the filtered data
    setAnimals(filteredData);
  }};

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