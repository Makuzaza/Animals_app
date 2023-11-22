import Card from '../components/Card';

function Animals ({searchHandler, animalList, search, removeHandler, likesHandlerAnimal}) {
  const filteredAnimalList = animalList.filter(animal =>
     animal.name.toLowerCase().includes(search.toLowerCase()));

    return (  
        <>  
     <div><input type="text" placeholder='Search ...' onChange={searchHandler}></input></div>
      <main>
      <h1>Animals:</h1> 
      
      {filteredAnimalList.length === 0 ? (
          <h2>No results</h2>
        ) : (
        <div className="cards">
           {filteredAnimalList.map((animal, index) => 
            (<Card key={index} 
              {...animal}
              isBird={false}
              click={() => removeHandler(animal.name)}
              plus={() => likesHandlerAnimal(animal.name, "plus")}
              minus={() => likesHandlerAnimal(animal.name, "minus")}
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

export default Animals;

  {/* <div className='parts'> */}
        {/* <button onClick={() => switchType('animals')}><h1>Animals</h1></button> */}
        {/* <button onClick={() => switchType('birds')}><h1>Birds</h1></button> */}
      {/* </div> */}

      // import Card from '../components/Card';

      // function Animals({ searchHandler, animalList, search, removeHandler, likesHandlerAnimal }) {
      //   const filteredAnimalList = animalList.filter(animal =>
      //     animal.name.toLowerCase().includes(search.toLowerCase()));
      
      //   return (
      //     <>
      //       <div><input type="text" placeholder='Search ...' onChange={searchHandler}></input></div>
      //       <main>
      //         <h1>Animals:</h1>
      
      //         {filteredAnimalList.length === 0 ? (
      //           <h2>No results</h2>
      //         ) : (
      //           <div className="cards">
      //             {filteredAnimalList.map((animal, index) =>
      //               (<Card key={index}
      //                 {...animal}
      //                 category="animal"
      //                 click={() => removeHandler(animal.name)}
      //                 plus={() => likesHandlerAnimal(animal.name, "plus")}
      //                 minus={() => likesHandlerAnimal(animal.name, "minus")}
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
      
      // export default Animals;
