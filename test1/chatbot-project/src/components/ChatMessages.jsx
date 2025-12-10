import { useRef,useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'
 function ChatMessages({chatMessages }) {
    const chatMessageRef = useRef(null);    // automatically save an html element form the component ref = container with special react features
    
  
    useEffect(()=>{
     const containerElem = chatMessageRef.current;
     if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
     }
      
    },[chatMessages]);  // Dependency array control when useEffect runs
  
  
    return (
      <div className="chat-message-container" ref={chatMessageRef}>  
        {chatMessages.map((msg) => {
          return (
            <ChatMessage
              message={msg.message}
              sender={msg.sender}
              key={msg.id}
            />
          );
        })}
      </div>
    );
  }
  export default ChatMessages;