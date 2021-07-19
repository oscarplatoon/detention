import './App.css';
import Message from "./Components/Message.js"

function App() {
  const numMessages = () => {
    let messages = [];
    for (let i=0; i < 100; i++) {
      messages.push(<Message text="I will never mutate state or props directly"/>);
    }
    return messages;
  }

  return (
    <div>
      <ol>
      {numMessages()}
      </ol>
    </div>
  );
}

export default App;
