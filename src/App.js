import React, {useState} from 'react'
import './App.css';

function App() {
  const [sendMessage,setSendMessage]=useState('');
  let [displayMessage,setDisplayMessage]=useState('');
  let [allMessages, setAllMessages]=useState([]);
  function handleChange(e){
    e.preventDefault();
    setSendMessage(e.target.value);
  }
  function handleClick(){
    setDisplayMessage(sendMessage);
    allMessages.push(displayMessage);
    setSendMessage('');
  }
  return (
    <div className="container">
      <p>{allMessages}</p>
      <input type="text" placeholder="Send a message" value={sendMessage} onChange={handleChange}/>
      <button type="button" onClick={handleClick}>Send</button>
    </div>
  );
}

export default App;
