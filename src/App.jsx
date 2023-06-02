import { useState } from 'react'
import data from './mocks/luke-skywalker.json'
import './App.css'

function App() {
  const [char,setChar] = useState(data)
  const [value,setValue] = useState("a")
  const addFilm = (e) => {
    e.preventDefault()
    const copy = structuredClone(char)
    copy.films.push(value)
    setChar(copy)
  }
  const set = (e) =>{
    setValue(e.target.value)
  }
  return (
    <>
      <span>{char.name}</span>
      <form onSubmit={addFilm} id="alta">
        <input type="url" id="input" value={value} onChange={set}/>
      </form>
      <div>
        <button form="alta">Añadir</button>
      </div>
      <ul>
      {char.films.map((film,index) => 
        <li key={index}><a href={film}>Enlace {index}</a></li>
      )}
      </ul>
    </>
  )
}

export default App
