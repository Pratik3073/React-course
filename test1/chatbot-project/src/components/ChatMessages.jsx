import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {

  // ---------------------------------------------------
  // useRef → stores a reference to the DOM element
  // Does NOT cause re-render when updated.
  // Here, it stores the scrolling container of messages.
  // ---------------------------------------------------
  const chatMessageRef = useRef(null);


  // ---------------------------------------------------
  // useEffect → runs after component renders
  // PURPOSE: Auto-scroll to the bottom whenever chatMessages change.
  //
  // containerElem.scrollHeight → total height of the content
  // containerElem.scrollTop → position of scroll
  // Setting scrollTop to scrollHeight moves it to bottom.
  // ---------------------------------------------------
  useEffect(() => {
    const containerElem = chatMessageRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }

  }, [chatMessages]);  // Runs ONLY when new messages are added


  return (
    // Attach the ref to this container div
    <div className="chat-message-container" ref={chatMessageRef}>

      {/* 
        Render each chat message using .map()
        Each message is passed to ChatMessage component via props.
        "key" helps React efficiently re-render lists.
      */}
      {chatMessages.map((msg) => {
        return (
          <ChatMessage
            message={msg.message}
            sender={msg.sender}
            key={msg.id} // unique id improves performance
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
