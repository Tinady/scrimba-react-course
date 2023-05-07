import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [resources, SetResources]=useState('Posts')
  const [item, setItem]=useState([])

  useEffect(()=>
  {fetch(`https://jsonplaceholder.typicode.com/${resources}`)
  .then(response => response.json())
  .then(json => setItem(json))
},
   [resources])

  return (
    <>
     <button onClick={()=>SetResources('posts')}>Posts</button>
     <button onClick={()=>SetResources('users')}>Users</button>
     <button onClick={()=>SetResources('comments')}>Comments</button>

     <h1>{resources}</h1>
     {item.map(item => {
      {return<pre>{JSON.stringify(item)}</pre>}
     })}
  
      
    </>
  )
}

export default App
