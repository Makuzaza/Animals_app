import {useState} from 'react'
import './index.css'
import Card from './Card'
import Header from './header'
import Footer from './footer'

function App() {

  return (
<>  
      <Header logo="Zoo app"/>

      <main>
      <h1>Animals</h1>
      <div>
        <Card />
      </div>
      </main>
      <Footer copyright="Copyright"/>
      </>

  );
};

export default App
