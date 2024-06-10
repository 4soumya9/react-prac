import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/cards";



function App() {
  let myObj ={
    username:"hitesh",
    age:21
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {/* <Cards  channel="react js" someObj ={newArr}/>

      <Cards  objj ={myObj}/>
      above two things will pass 
      But  <Cards  myArr=[1,2,3] /> ..this will not pass
      and <Cards  myAr ={name : "chai"}/> ..this will also not pass*/}
      <Cards  username="reactt" btnText ="click me"/>
      <Cards username="Soumya"/>

    </>
  );
}

export default App;
