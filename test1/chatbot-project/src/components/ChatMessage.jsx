// ------------------------------------------
// IMPORTS
// ------------------------------------------

// Importing images → bundlers like Vite/Webpack convert them to URLs.
// These are NOT default exports from the image files, the comment should be:
// // importing image assets
import robotimg from '../assets/robot.png'
import userimg from '../assets/user.png'

// CSS file for styling this component
import './ChatMessage.css'


// ------------------------------------------
// REUSABLE COMPONENT (ChatMessage)
// PROPS: message (text), sender ("user" | "robot")
// ------------------------------------------
export function ChatMessage({ message, sender }) {

  /*
    PROPS in React:
    - Passed from parent component
    - Makes component reusable
    - Example usage:
        <ChatMessage message="Hi" sender="user" />

    Destructuring is done in the function parameter:
        { message, sender }
  */

  // Alternative ways (not used but important):
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;


  // ------------------------------------------
  // JSX RETURN
  // ------------------------------------------
  return (
    <div
      className={
        // Conditional class based on sender
        sender === "user"
          ? "chat-user"   // alignment + styling for user message
          : "chat-robot"  // alignment + styling for robot message
      }
    >

      {/* 
        CONDITIONAL RENDERING:
        Render robot image ONLY if sender === "robot"
        Using logical AND (&&) short-circuit operator
      */}
      {sender === "robot" && (
        <img
          src={robotimg}
          alt="Robot"
          className="chat-message-profile"
        />
      )}

      {/* Message text */}
      <div className="chat-message-text">
        {message}
      </div>

      {/* 
        CONDITIONAL RENDERING:
        Render user image ONLY if sender === "user"
      */}
      {sender === "user" && (
        <img
          src={userimg}
          alt="User"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}
