import React, {useState, useEffect,useRef} from 'react'
import './App.css';



//Designing custom hook to handle key presses
function useKey(key,cb){
  const callbackRef=useRef(cb);
  useEffect(()=>{
    callbackRef.current=cb;
  })
  useEffect(()=>{
    function handle(event){
      if(event.code===key){
        callbackRef.current(event)
      }
    }
    document.addEventListener("keypress",handle);
    return () => document.removeEventListener("keypress",handle)
  },[key]);
}

function App() {
  useKey("Enter", handleClick);
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
