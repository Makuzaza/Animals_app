import Card from '../components/Card';

function Animals ({searchHandler, animalList, search, removeHandler}) {
    return (  
        <>  
     <div><input type="text" placeholder='Search ...' onChange={searchHandler}></input></div>
      <main>
      <h1>Animals:</h1>
      <div className='parts'>
        {/* <button onClick={() => switchType('animals')}><h1>Animals</h1></button> */}
        {/* <button onClick={() => switchType('birds')}><h1>Birds</h1></button> */}
      </div>

 <div className="cards">
           {animalList.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((animal, i) => 
            (<Card key={i} 
              name={animal.name} 
              likes={animal.likes} 
              click={() => removeHandler(i)}/>
          ))}
        </div>
      </main>
      
       </> 
    );
}

export default Animals;

