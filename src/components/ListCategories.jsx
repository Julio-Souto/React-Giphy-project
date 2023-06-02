import PropTypes from 'prop-types'
import GiphyResults from './GiphyResults'
import { useState } from 'react'


export default function ListCategories({ categories = [] }){
  const [show, setShow] = useState(true)

  return <>
      {categories.map((category) =>  
        <div key={category.id}>
          <h2 onClick={() => setShow(currentShow => !currentShow)}>{category.name} 
          <i className={show ? "arrow down": "arrow up"}></i></h2>
          {show ? <GiphyResults name={category.name}/> : null}
        </div>
      )}
  </>
} 

ListCategories.propTypes = {
  categories: PropTypes.array
}