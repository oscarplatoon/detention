import React, { Component } from 'react';


// const ChalkBoardText = () => {
//   return (
//     <div>
//       <h1>I will never mutate state or props directly.</h1>
//     </div>

//   );
// };

// export default ChalkBoardText;

class ChalkBoardText extends Component {
  render() {
    return (
      <div>
        <h1>I will never mutate state or props directly.</h1>
     </div>
    )
  }
}

export default ChalkBoardText;