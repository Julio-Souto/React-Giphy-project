import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({onCategory}) {
  const [categories, setCategories] = useState([])
  const [value,setValue] = useState("a")

  useEffect(() => {
    onCategory(categories)
  },[categories, onCategory])

  const addCategories = (e) => {
    e.preventDefault()
    if(!checkExists(value,categories)&&value.trim().length!=0){
      const copy = structuredClone(categories)
      copy.push({id:uuid(),name:value})
      setCategories(copy)
      setValue('')
    }
  }
  const set = (e) =>{
    setValue(e.target.value)
  }
  return (
    <>
      <form onSubmit={addCategories} id='search'>
        <input type="search" required value={value} onChange={set}/>
      </form>
      <div>
        <button form="search">Buscar</button>
      </div>
    </>
  )
}

function checkExists(value, categories = []){
  for(let v of categories.values()) {
    if(value.toLocaleLowerCase()===v.name.toLocaleLowerCase())
      return true
  }
  return false
}

function uuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

AddCategory.propTypes = {
  onCategory: PropTypes.func.isRequired
}
export default AddCategory