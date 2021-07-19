import react from 'react';

import React, {Component} from 'react';
// function
// const ChalkBoardText = () => {
//   return(
//   <div>
//     <h1>I will never mutate state or props directly</h1>
//   </div>

//   )}

// class
class ChalkBoardText extends Component {
  render() {
    return (
      <div>
        <h1>I will never mutate state or props directly</h1>
      </div>
    )
  }
}

export default ChalkBoardText; 