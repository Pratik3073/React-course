import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'
export function ChatInput({chatMessages,setChatMesssage}) {
    const [inputText, setInputText] = useState("");
  
    function saveInputText(event) {
      setInputText(event.target.value);
    }
  
    function sendMessage() {   // save new chat message to new varible
      const newChatmessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID(),
        },
      ]
  
  
      setChatMesssage(newChatmessages);
      
      const response = Chatbot.getResponse(inputText);  //chatbot is external library
      
      setChatMesssage([
        ...newChatmessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
  
  
      setInputText('');
    }
    return (
      <div className="chat-input-container">
        
        {/* React Fragments  group elements together without creating an extra <div>*/}
        <input
          placeholder="send a message to chatbot "
          size="30"
          onChange={saveInputText}
          value={inputText}  // controlled input
          className="chat-input"
        />
        <button className="send-button" onClick={sendMessage}>send</button>
      </div>
    );
  }