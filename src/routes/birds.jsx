import Card from '../components/Card';
// import { birds } from '../animalsList';

function Birds ({searchHandler, animalList, search, removeHandlerBirds, likesHandlerBird}) {
    // const sortedAnimalList = [...animalList].sort((a, b) =>
    // a.name.localeCompare(b.name));
    const filteredAnimalList = animalList.filter(animal =>
      animal.name.toLowerCase().includes(search.toLowerCase()));
      let text;

    return (  
        <>  
     <div><input type="text" placeholder='Search ...' onChange={searchHandler}></input></div>
      <main>
      <h1>Birds:</h1>

      {filteredAnimalList.length === 0 ? (
          <h2>No results</h2>
        ) : (
 <div className="cards">
 {filteredAnimalList.map((animal, index) => 
            (<Card key={index} 
              {...animal}
              isBird={true}
              click={() => removeHandlerBirds(animal.name)}
              plus={() => likesHandlerBird(animal.name, "plus")}
              minus={() => likesHandlerBird(animal.name, "minus")}
              name={animal.name} 
              likes={animal.likes} 
            />
          ))}
        </div>
          )}
      </main>
      
       </> 
    );
}

export default Birds;

      {/* <div className='parts'> */}
        {/* <button onClick={() => switchType('animals')}><h1>Animals</h1></button> */}
        {/* <button onClick={() => switchType('birds')}><h1>Birds</h1></button> */}
      {/* </div> */}
      // Birds.jsx

// import Card from '../components/Card';

// function Birds({ searchHandler, animalList, search, removeHandlerBirds, likesHandlerBird }) {
//   const filteredAnimalList = animalList.filter(animal =>
//     animal.name.toLowerCase().includes(search.toLowerCase()));

//   return (
//     <>
//       <div><input type="text" placeholder='Search ...' onChange={searchHandler}></input></div>
//       <main>
//         <h1>Birds:</h1>

//         {filteredAnimalList.length === 0 ? (
//           <h2>No results</h2>
//         ) : (
//           <div className="cards">
//             {filteredAnimalList.map((animal, index) =>
//               (<Card key={index}
//                 {...animal}
//                 category="bird"
//                 click={() => removeHandlerBirds(animal.name)}
//                 plus={() => likesHandlerBird(animal.name, "plus")}
//                 minus={() => likesHandlerBird(animal.name, "minus")}
//                 name={animal.name}
//                 likes={animal.likes}
//               />
//               ))}
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default Birds;
