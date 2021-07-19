import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


function App(){
  const Message = props => {
    let result = []
    for (let i = 0; i < 100; i++){
      result.push(<a id='message'>{i+1}{": "}{props.greeting}<br /></a>)
      
    }return result
  } 

  return (
    <div>
        <Message greeting= "I will never mutate state or props directly"/>
    </div>
  );

}

export default App;