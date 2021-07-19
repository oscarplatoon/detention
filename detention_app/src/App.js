// import logo from './logo.svg';
import './App.css';
import Message from "./Message.js"

function App() {
  const writeMessages = () => {
    let messages = [];
    for (let i=0; i <= 100; i++) {
      messages.push(<Message text="I will never mutate state or props directly"/>);
    }
    return messages;
  }

  return (
    <div>
      <h1>{writeMessages()}</h1>
    </div>
  );
}

export default App