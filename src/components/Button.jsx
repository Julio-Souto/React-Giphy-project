import PropTypes from 'prop-types'

export default function Button({handle, counter}){

  const handleClick = () => {
    handle(counter+1)
  }
  return <>
    <button onClick={handleClick}>Count {counter}</button>
  </>  
}


Button.propTypes = {
  handle: PropTypes.func,
  counter: PropTypes.number
}