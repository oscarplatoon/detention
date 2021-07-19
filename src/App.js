import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


function App(){
  const Message = props => {
    let result = []
    for (let i = 0; i < 100; i++){
      result.push(<h1 id='message'>{props.greeting}</h1>)
    }return result
  } 

  return (
    <div>
        <Message greeting="I will never mutate state or props directly"/>
    </div>
  );

}

export default App;
