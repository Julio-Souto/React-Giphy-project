import result from '../mocks/search.json'
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function GiphyResults({name = "Matrix"}) {
  const [data, setData] = useState(result)
  const api_key="MgXdOJyQCSPu0A1p3RYc9wq11AfQ5InM";

  useEffect(() => {
    const handle = async() => {
      const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key="+api_key+"&q="+name+"&limit=15")
      setData(await response.json())
      console.log(name)
    }
    handle()
  },[name]
  )
  return <>
    <div className='results'>
      {data.pagination.count === 0 ? <span>{"Search not found"}</span> :
      data.data.map((item) =>
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.images.fixed_width.url} alt={item.title}/>
        </div>
      )}
    </div>
  </>
  
}