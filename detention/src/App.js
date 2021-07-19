import './App.css';

function App() {

  const createBoard = () => {
    let board = [];
    for (let i = 0; i < 100; i++){
      board.push(<h1>{i + 1}. I will never mutate state or props directly</h1>)
    }
    return board
  }

  return (
    <div className="App">
      {
        createBoard()
      }
    </div>
  );
}

export default App;
