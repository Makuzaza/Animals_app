import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState} from 'react'
import './App.css'
import Card from './Card'
import Header from './header'
import Footer from './footer'

function App() {

  const [persons, setPersons] = useState([
  { id: 1, name: "Margit", title: "CEO", age: 29 }, 
  { id: 2, name: "Kati", title: "worker", age: 20 }, 
  { id: 3, name: "Mati", title: "boss", age: 30 },
  { id: 4, name: "Mati", title: "boss", age: 30 },
  { id: 5, name: "Mati", title: "boss", age: 30 },
  { id: 6, name: "Mati", title: "boss", age: 30 },
  { id: 7, name: "Mati", title: "boss", age: 30 },
  { id: 8, name: "Mati", title: "boss", age: 30 },
  { id: 9, name: "Mati", title: "boss", age: 30 },
  { id: 10, name: "Mati", title: "boss", age: 30 }
]);

  return (

   <div>   
      <Header logo="Maria Kuznetsova"/>

      <main>
      <h1>This is my application</h1>

      {persons.map((person, i) => (
         <Card key={i}
         name={person.name}
         title={person.title} 
         age={person.age} />
      // <li key={person.id}>{person.name}</li>
      ))};

      {/* <Card name={persons[0].name}
      title={persons[0].title} 
      age={persons[0].age}/>

      <Card name={persons[1].name}
      title={persons[1].title} 
      age={persons[1].age}/>

      <Card name={persons[2].name}
      title={persons[2].title} 
      age={persons[2].age}/> */}
      </main>
      <Footer copyright="Copyright"/>
      </div>
  );
};

export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Maria</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


