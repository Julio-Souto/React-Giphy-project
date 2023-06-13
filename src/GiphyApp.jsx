import PropTypes from 'prop-types'
import { useState } from 'react'
import './App.css'
import ListCategories from './components/ListCategories'
import AddCategory from './components/AddCategory'
// import Button from './components/Button'
// import GiphyResults from './components/GiphyResults'

function GiphyApp({ title }) {
  const [categories, setCategories] = useState([])
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center'>
        <h1>{title}</h1>
        {/* <Button handle={setCount} counter={count}/>
        <Button handle={setCount} counter={count}/> */}
        <AddCategory onCategory={setCategories}/>
      </div>
      <ListCategories categories={categories}/>
      {/* <GiphyResults /> */}
    </>
  )
}

GiphyApp.propTypes = {
  title: PropTypes.string
}

export default GiphyApp
