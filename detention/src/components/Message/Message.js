import {useState} from 'react'


function Message(props) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1> {props.message}</h1>
      <p>
      </p>
    </div>
  )
}

export default Message