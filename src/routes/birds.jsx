import Card from '../components/Card';
// import { birds } from '../animalsList';

function Birds ({searchHandler, animalList, search, removeHandlerBirds}) {
    // const sortedAnimalList = [...animalList].sort((a, b) =>
    // a.name.localeCompare(b.name));

    return (  
        <>  
     <div><input type="text" placeholder='Search ...' onChange={searchHandler}></input></div>
      <main>
      <h1>Birds:</h1>
      <div className='parts'>
        {/* <button onClick={() => switchType('animals')}><h1>Animals</h1></button> */}
        {/* <button onClick={() => switchType('birds')}><h1>Birds</h1></button> */}
      </div>

 <div className="cards">
 {animalList.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((animal, i) => 
            (<Card key={i} 
              name={animal.name} 
              likes={animal.likes} 
              click={() => removeHandlerBirds(i)}/>
          ))}
        </div>
      </main>
      
       </> 
    );
}

export default Birds;

