import { useEffect,useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  // 15 is the default value , setCounter is just a name, we can rename it as soumyaCounter also 

  const addValue = () =>{
    console.log("value added" , counter);
    setCounter(counter+10);
  }
   const removeValue = () =>{
    setCounter(counter-1);
    // we can go to the negative value also
   }


  return (
    <>
     <h1>React practice</h1>
     <h2>Counter value: {counter}</h2>
    {/* here we are just passing the reference..after clicking the bottom it will work */}
     <button onClick={addValue} >Add value</button>
     <br />
     <button onClick={removeValue}>remove button</button>

    </>
  )
}

export default App
