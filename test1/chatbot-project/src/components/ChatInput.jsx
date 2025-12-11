// ----------------------------
// IMPORTS
// ----------------------------

// useState → React Hook used for adding component-level state
import { useState } from 'react'

// Chatbot → external library (from supersimpledev)
import { Chatbot } from 'supersimpledev';

// CSS import for styling this component
import './ChatInput.css'


// ----------------------------
// COMPONENT DEFINITION
// Parent passes `chatMessages` and `setChatMessage` as PROPS
// ----------------------------
export function ChatInput({ chatMessages, setChatMesssage }) {

  // ----------------------------
  // STATE (React Feature)
  // `inputText` → stores current text user is typing
  // `setInputText` → function to update the state
  // ----------------------------
  const [inputText, setInputText] = useState("");

  
  // ----------------------------
  // EVENT HANDLER (Updating controlled input)
  // ----------------------------
  function saveInputText(event) {
    // Updating STATE when input changes
    setInputText(event.target.value);
  }

  
  // ----------------------------
  // MAIN LOGIC – send message to chatbot
  // ----------------------------
  function sendMessage() {

    // Creating a new array of chat messages using spread operator
    const newChatmessages = [
      ...chatMessages,         // previous messages
      {
        message: inputText,    // user message
        sender: "user",
        id: crypto.randomUUID(), // unique id feature from browser crypto API
      },
    ]

    // Updating parent state via PROP function (setChatMessage)
    setChatMesssage(newChatmessages);
    
    
    // Calling external library (Chatbot)
    const response = Chatbot.getResponse(inputText);

    
    // Add chatbot reply to chat message list
    setChatMesssage([
      ...newChatmessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    // Reset text input (clear input field)
    setInputText('');
  }


  // ----------------------------
  // JSX RENDERING
  // ----------------------------
  return (
    <div className="chat-input-container">

      {/* 
        This component is NOT using a fragment <> </>
        because we already have a wrapping <div>.
      */}

      <input
        placeholder="send a message to chatbot "
        size="30"

        // On change, update local state
        onChange={saveInputText}

        // Controlled component → value controlled by React state
        value={inputText}

        className="chat-input"
      />

      {/* Button triggers sendMessage function */}
      <button className="send-button" onClick={sendMessage}>
        send
      </button>
    </div>
  );
}
