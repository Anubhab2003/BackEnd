import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes,setJokes]=useState([])


  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[])

  return (
    <>
      <h1>Hello</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.description}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
