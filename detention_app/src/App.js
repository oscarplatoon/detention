import './App.css';
import { Component } from 'react';
import ChalkBoardText from './components/ChalkBoardText';

// functional
// function App() {
//   const makeBoard = () => {
//     let board = []
//     for(let i = 0; i <= 100; i++){
//       board.push(<ChalkBoardText key={i}/>)
//     }
//     return board
//   }
//   return (
//     <div className="App">
//       {
//         makeBoard()
//       }
//     </div>
//   )
// }

// class
class App extends Component {

  makeBoard = (num) => {
    let board = []
    for(let i = 0; i <= 100; i++){
      board.push(<ChalkBoardText key={i}/>)
    }
    return board
  }

  render() {
    return (
      <div className="App">
      {
        this.makeBoard(15)
      }
      </div>
    )
  }
}

export default App