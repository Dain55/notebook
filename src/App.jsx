import {useEffect, useState } from "react"
import States from "./components/state"
import "../public/Font/stylesheet.scss"
import './App.scss'


function App() {
  const [state, setState] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
    .then(res => res.json())
    .then(res => setState(res))
  },[])


  return (
    <>
      <div className="container">
      <center>Список</center>
        <div className="flex_div">
      
         {
         state.map(item => (
          <States {...item}/>
          ))

         }
        </div>
      </div>
    </>
  )
}

export default App
