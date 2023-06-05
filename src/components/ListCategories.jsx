import PropTypes from 'prop-types'
import GiphyResults from './GiphyResults'
import { useState } from 'react'


export default function ListCategories({ categories = [] }){
  const [mostrar, setMostrar] = useState([])
  let show = structuredClone(mostrar);

  const add = (index) => {
    if(typeof(show[index])==='undefined')
      show.push(true)
  }

  const changeShow = (index) => {
    show[index]= !mostrar[index]
    setMostrar(structuredClone(show))
  }
  return <>
      <div className='container'>
      {categories.map((category,index) =>  
        <div key={category.id}>
          {add(index)}
          <h2 onClick={() => {changeShow(index)}}>{category.name} 
          <i className={show[index] ? "arrow down": "arrow up"}></i></h2>
          {show[index] ? <GiphyResults name={category.name}/> : null}
        </div>
      )}
      </div>
  </>
} 

ListCategories.propTypes = {
  categories: PropTypes.array
}