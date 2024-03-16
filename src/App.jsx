import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import User from './User';
import Friends from './Friends';

function App() {
  
  function handleClick(){
    alert('button clicked');
  }
   
  const handleClick2 = () => {
    alert('button 2 clicked');
  }
  const addToFive =(num) => {
    alert (num + 5);
  }
  return (
    <>
    <h3>React Core Concepts-2</h3> 
    <User></User>
    <Friends></Friends>
    <Counter></Counter> 
    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClick2}>Click me</button>
    <button onClick={() =>{alert('third clicked')}}>third</button>
    <button onClick={() => addToFive(3)}>four</button>
    </>
  )
}

export default App
