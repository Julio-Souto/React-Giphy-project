import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function GiphyResults({name = "naruto"}) {
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)
  const api_key="MgXdOJyQCSPu0A1p3RYc9wq11AfQ5InM";
  let pages = 0;
  useEffect(() => {
    const handle = async() => {
      const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key="+api_key+"&q="+name+"&limit=15&offset="+offset)
      setData(await response.json())
      console.log(name)
    }
    handle()
  },[offset]
  )

  const previous = () => {
    if(offset>0)
      setOffset(offset-15);

  }
  const next = () => {
    if(offset<pages)
      setOffset(offset+15);

  }
  return <>
    <div className='results'>
      {
      data.length!=0 ?
      data.pagination.count === 0 ? <span>{"Search not found"}</span> : 
      data.data.map((item) =>
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.images.fixed_width.url} alt={item.title}/>
        </div>
      )
      : <p></p>}
      {
      data.length!=0 ?
      <div className='pagination'>
        <button onClick={previous}>Previous</button>
        <p>Page {Math.round(offset/15)+1} from {pages = Math.round(data.pagination.total_count/data.pagination.count/15)}</p>
        <button onClick={next}>Next</button>
      </div> : <p></p>}
    </div>
  </>
  
}