// import React and required components and data
import React, { useState } from 'react'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home';
import Animals from './routes/animals';
import Birds from './routes/birds';
import Root from './routes/root';
import ErrorPage from './routes/error';
import { animals, birds } from './animalsList';
import AnimalPage from './components/animalPage';

// initialize state variables: useState - hook, animalList and search - variables
function App() {
  const [animalList, setAnimals] = useState(animals);
  const [birdList, setBirds] = useState(birds);
  // const [searchAnimal, setSearchAnimal] = useState('');
  // const [searchBird, setSearchBird] = useState('');
  const [search, setSearch] = useState('');

  // const removeHandler = (index) => {
  //   const updatedArray = animalList.filter((animal, i) => i !== index); 
  //   setAnimals(updatedArray)
  // };

  const removeHandler = (name) => {
    const updatedArray = animalList.filter((animal) => animal.name !== name); 
    setAnimals(updatedArray)
  };

  // const removeHandlerBirds = (index) => {
  //   const updatedArray = birdList.filter((bird, i) => i !== index); 
  //   setBirds(updatedArray)
  // };

  const removeHandlerBirds = (name) => {
    const updatedArray = birdList.filter((bird) => bird.name !== name); 
    setBirds(updatedArray)
  };

// event handlers for switching animal types and searching
  // const switchType = (animalType) => {
  //   if (animalType === 'animals') {
  //     setAnimals(animals);
  //   } else if (animalType === 'birds') {
  //     setAnimals(birds);
  //   };
  // };

// input change event as a parameter, arrow function
  // const searchHandlerAnimal = (event) => {
  //   setSearchAnimal(event.target.value);
  // }

  // const searchHandlerBird = (event) => {
  //   setSearchBird(event.target.value);
  // }

  const cleanHandler = () => {
    setSearch('')
    }

  const searchHandler = (event) => {
    //  current value from the input field
    setSearch(event.target.value);
  }

  const likesHandlerAnimal = (name, action) => {
    const updatedArray = animalList.map((animal) => {
      if (animal.name === name) {
        if (action === "plus") {
          return {...animal, likes: animal.likes + 1};
        } else {
          return { ...animal, likes: animal.likes - 1};
        }
      } else {
        return animal;
  }
}); 
setAnimals(updatedArray)
};

const likesHandlerBird = (name, action) => {
  const updatedArray = birdList.map((bird) => {
    if (bird.name === name) {
      if (action === "plus") {
        return {...bird, likes: bird.likes + 1};
      } else {
        return {...bird, likes: bird.likes - 1};
      }
    } else {
      return bird;
    }
  });
setBirds(updatedArray);
};

// const likesHandlerBird = (name, action) => {
//   const updatedArray = animalList.map((animal) => {
//     if (animal.name === name) {
//       if (action === "plus") {
//         return {...animal, likes: animal.likes + 1};
//       } else {
//         return { ...animal, likes: animal.likes - 1};
//       }
//     } else {
//       return animal;
// }
// }); 
// setBirds(updatedArray)
// };

const router = createBrowserRouter([
  { path: '/', element:<Root cleanHandler={cleanHandler}/>, 
  errorElement: <ErrorPage/>, children: [
    { path: '/', element: <Home/> },
    { path: '/animals', 
    element: (<Animals 
      // searchHandler={searchHandlerAnimal} 
      // search={searchAnimal} 
      searchHandler={searchHandler} 
      search={search} 
      removeHandler={removeHandler}
      animalList={animalList}
      likesHandlerAnimal={likesHandlerAnimal}/>),
    },
    { path: '/birds', 
    element: (<Birds 
      // searchHandlerBird={searchHandlerBird} 
      // search={searchBird} 
      searchHandler={searchHandler} 
      search={search} 
      removeHandlerBirds={removeHandlerBirds}
      animalList={birdList}
      likesHandlerBird={likesHandlerBird}/>),
    },
    { path: "animals/:name", 
    element: <AnimalPage />},
    { path: "birds/:name", 
    element: <AnimalPage />}
  ]}
]);

  return (
<div>  
<RouterProvider router = {router} />
      </div>
  );
}

export default App;

// return (
//   <div>  
//   <RouterProvider router = {router} />
      {/* <Header searchHandler={searchHandler} />
      <main>
        <div className='parts'><div>
          <button onClick={() => switchType('animals')}><h1>Animals</h1></button>
          <button onClick={() => switchType('birds')}><h1>Birds</h1></button>
        </div> */}
        {/* <div><input 
        id="search" 
        type="text" 
        placeholder="Search..." 
        onChange={searchHandler}
        />
        </div> */}
        {/* <div className="cards">
             {animalList.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((animal, i) => 
              (<Card key={i} 
                name={animal.name} 
                likes={animal.likes} 
                click={() => removeHandler(i)}/>
            ))}
          </div> */}
          {/* <div className="cards">
            {animalList
              .filter((animal) =>
                animal.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((animal) => (
                <Card
                  key={animal.name}
                  {...animal}
                  close={() => removeHandler(animal.name)}
                  like={() => likesHandler(animal.name, "like")}
                  dislike={() => likesHandler(animal.name, "dislike")}
                  votes={animal.likes}
                />
              ))}
          </div> */}
          {/* </div>
      </main>
        <Footer /> */}
        {/* </div>
    );
  }
  
  export default App; */}