import { Component } from 'react';
import './App.css';
import ChalkBoardText from './components/ChalkBoardText';




// function App() {

//   const createBoard = () => {
//     let board = [];
//     for (let i = 0; i < 100; i++) {
//       board.push(<ChalkBoardText key={i} />)
//     }
//     return board
//   }

//   return (
//     <div className="App">
//       {
//       createBoard()
//       }
//     </div>
//   );
// }

// export default App;


class App extends Component {
  
  createBoard = () => {
    let board = [];
    for (let i = 0; i < 100; i++) {
      board.push(<ChalkBoardText key={i} />)
    }
    return board;
  }

  render() {
      return ( 
      <div className="App">
      {
        this.createBoard()
      }
    </div>
  );
  }
}

export default App;
