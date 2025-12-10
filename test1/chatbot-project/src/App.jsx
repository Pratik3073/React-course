import { useState} from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import  ChatMessages  from './components/ChatMessages.jsx'; // use export default ChatMessages; no  need 0f {}
import './App.css'

function App() {

  const [chatMessages, setChatMesssage] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How Are You?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is 12 december",
      sender: "robot",
      id: "id4",
    },
  ]);

  // const[chatMessages,setChatMesssage]=array // // array Destructuring  // the order matters  chatMessages get 1 value soo
  // const chatMessages= array[0];
  // const setChatMesssage= array[1];
  return (
    <div className="app-container">
     
      <ChatMessages 
      chatMessages={chatMessages}
      />

      <ChatInput 
      chatMessages={chatMessages}
      setChatMesssage={setChatMesssage}
      />
    </div>
  );
}
export default App
