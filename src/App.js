//Input field to be pushed to the bottom of the page
//when send is clicked, message must be displayed above the input
import React, {useState} from 'react'
import './App.css';

function App() {
  const [sendMessage,setSendMessage]=useState('');
  let [displayMessage,setDisplayMessage]=useState('');
  let [messageArray,setMessageArray]=useState([]);
  function handleChange(e){
    e.preventDefault();
    setSendMessage(e.target.value);

  }
  function handleClick(){
    setDisplayMessage(sendMessage);
    setMessageArray( arr => [...arr, `${displayMessage}`]);
    setSendMessage('');
  }
  return (
    <body>
      <nav>
        <ul>
          <li>Contacts</li>
          <li>Chats</li>
        </ul>
      </nav>
      <h1>
      <img src='./images/icon.png' alt=""/>Connect to the world
      </h1>
      <div className="form">
        {
          messageArray.map(message=>{
            return <p>{message}</p>
          })
        }
        <input type="text" placeholder="Send a message" value={sendMessage} onChange={handleChange} required/>
        <button type="button" onClick={handleClick}>Send</button>
      </div>
    </body>
  );
}

export default App;
