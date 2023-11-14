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
  
  // const removeHandler = (name) => {
  //   const updatedArray = animalList.filter((animal) => animal.name !== name); 
  //   setAnimals(updatedArray)
  // };

// event handlers for switching animal types and searching
  const switchType = (animalType) => {
    if (animalType === 'animals') {
      setAnimals(animals);
    } else if (animalType === 'birds') {
      setAnimals(birds);
    };
  };

// input change event as a parameter, arrow function
  const searchHandler = (event) => {
    //  current value from the input field
    setSearch(event.target.value);
  }

  return (
<>  
    <Header searchHandler={searchHandler} />
    <main>
      <div className='parts'><div>
        <button onClick={() => switchType('animals')}><h1>Animals</h1></button>
        <button onClick={() => switchType('birds')}><h1>Birds</h1></button>
      </div>
      {/* <div><input 
      id="search" 
      type="text" 
      placeholder="Search..." 
      onChange={searchHandler}
      />
      </div> */}
      <div className="cards">
           {animalList.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((animal, i) => 
            (<Card key={i} name={animal.name} likes={animal.likes} click={() => removeHandler(i)}/>
          ))}
        </div></div>
    </main>
      <Footer />
      </>
  );
}

export default App;