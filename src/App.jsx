import { useState } from 'react'
import Button from './components/Button'
import './App.css'
import  data  from './data/example'
function App() {
  const [name, setName] = useState("Yogesh")
  // let newName="yuicdcddf" //this concept no work
  const handleClick=(name)=>{
    setName(name)
  }

  return (
    <>
      <Button onClick={()=>handleClick('Yogesh')}>Yogesh</Button>
      <Button onClick={()=>handleClick('Shyamal')}>Shymal</Button>
      <Button onClick={()=>handleClick('Vivek')}>Vivek</Button>
      <Button onClick={()=>handleClick('Harshal')}>Harshal</Button>

      <h1>{data[name].title}</h1>
      <p>{data[name].decription}</p>
    </>
  )
}

export default App
