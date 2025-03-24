import { useState } from 'react'
import './App.css'
import React from "react";
import Message from './ConditionalRendring';
import LoginButton from './toggleLogin';
import Clock from './UseEffectHook';
import MultiInputForm, { DropDown } from './FormHandling';
import { CheckboxForm } from './FormHandling';
import FilterTableData from './FilterTable';
function Header() {
  return (
    <div>
      
      <h1 className="head">This is my Website</h1>
    </div>
  )
}
function Declarative(){
  const [text, setText] = useState('Clicke Me')
  return(
    <button onClick={()=> setText("Clicked")}>{text}</button>
  )
}

// function Parent(){
 
//   return <Child text= "Ahmed"/>
  
// }

function Child(probs){
    return <h1> {probs.text}</h1>
}




function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const toggleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Header/>
       
     
      <Child text="Muhammad Ahmed"/> 

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <span>                     </span>
        <Declarative/>
      
      <Greeting/>
       <Message isLoggedIn={isLoggedIn}/>
        <LoginButton toggleLogin={toggleLogin}/>
      
        {/* <h2>{isLoggedIn ? "Welocme Back" : "PLease Login"}</h2>  */}
      
      <Clock/>
      <MultiInputForm/>
      <CheckboxForm/>
       <DropDown/>
      <FilterTableData/>
       </div>  
      
      
    </>
  )
}


class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi This is from class based </h1>
      </div>
    );
  }
}

export default App;

