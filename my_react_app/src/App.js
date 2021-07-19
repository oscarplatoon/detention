import './App.css';
import RepeatMsg from './RepeatMsg';

function App() {
  let hundredTimes = 101;
  let elements = new Array(hundredTimes).fill(null);
  const messages = "I will never mutate state or props directly";
  
  return (
      elements.map((_, idx) => <RepeatMsg message={`${idx}.${messages}`} key={idx}/>)
    
  );
}

export default App;
