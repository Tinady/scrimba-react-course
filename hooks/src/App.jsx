import { useState } from 'react'

import './App.css'

function App() {
  const [resources, SetResources]=useState('Posts')

  return (
    <>
     <button onClick={()=>SetResources('Posts')}>Posts</button>
     <button onClick={()=>SetResources('Users')}>Users</button>
     <button onClick={()=>SetResources('Comments')}>Comments</button>

     <h1>{resources}</h1>
      
    </>
  )
}

export default App
