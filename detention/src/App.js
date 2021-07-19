import './App.css';
import Message from './components/Message/Message.js';
import React from 'react';

class App extends React.Component {

  createMessages = () => {
    let messages = [];
    for (let i =0; i<100; i++) {
      messages.push(<Message message='I will never mutate state or props directly.'/>)
    }
    return messages;
  }

  render() {
    return (
      <div className='App'>
        { this.createMessages() }
      </div>
    )
  }
}

export default App;
