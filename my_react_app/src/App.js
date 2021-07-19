import './App.css';
import RepeatMsg from './RepeatMsg';

function App() {
  let hundredTimes = 100;
  let elements = new Array(hundredTimes).fill(null);
  const messages = "I will never mutate state or props directly";
  
  return (
      elements.map((_, idx) => <RepeatMsg message={`${idx+1}.${messages}`} key={idx}/>)
    
  );
}

export default App;
