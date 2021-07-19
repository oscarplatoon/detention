import logo from './logo.svg';
import './App.css';
import React from 'react';
import Message from "./Message";

function App() {
  
  const createMessages = () => {
    let messages = [];
    for (let i = 0; i < 100; i++) {
      messages.push(<Message text= "I will never mutate state or props directly" />);
    }
    return messages;
  }

  
    return (
    <div className="App">
      { createMessages() }
    </div>
    );

}

export default App;
