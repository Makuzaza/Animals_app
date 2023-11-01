import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const name = "Maria";
const first_page = 2020;

// const demo = (
//   <div>
//     <h1>My name is {name}</h1>
//     <p>And I have been coding {2023 - first_page} years</p>
//   </div>
// )

const Demo = () => {
  return (
    <div>
    <h1>My name is {name}</h1>
    <p>And I have been coding {2023 - first_page} years</p>
  </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <Demo /> */}
    <App />
  </React.StrictMode>,
)
