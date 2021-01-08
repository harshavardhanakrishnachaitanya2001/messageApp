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
  const input=useRef();
  useEffect(()=>{
    input.current.focus();
  },[]);
  const [sendMessage,setSendMessage]=useState('');
  let [messageArray,setMessageArray]=useState([]);
  function handleChange(e){
    e.preventDefault();
    setSendMessage(e.target.value);
  }
  function handleClick(){
    setMessageArray( arr => [...arr, `${sendMessage}`]);
    setSendMessage('');
    input.current.focus();
  }
  return (
    <body>
      <h1>
      <img src='./images/icon.png' alt=""/>Connect to the world
      </h1>
      <div className="form">
        {
          messageArray.map(message=>{
            return <p>{message}</p>
          })
        }
        <input type="text" placeholder="Send a message" id="messsanger" value={sendMessage} onChange={handleChange} ref={input} required/>
        <button type="button" onClick={handleClick}>Send</button>
      </div>
    </body>
  );
}

export default App;
