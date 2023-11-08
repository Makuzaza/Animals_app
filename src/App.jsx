import { useState } from 'react'
import './index.css'
import Card from './Card'
import Header from './header'
import Footer from './footer'
import './animalsList.js'

function App() {
  const [animals, setAnimals] = useState([
    { name: '', heart: 0 }]);

  return (
<>  
    <Header />
    <main>
      <h1>Animals</h1>
      <div><input id="search" type="text" placeholder="Search..." /></div>
       <div className="cards">
          {animals.map((animal, i) => (
            <Card key={i} name={animal.name} likes={animal.heart} />))}
        </div>
    </main>
      <Footer />
      </>
  );
};

export default App;