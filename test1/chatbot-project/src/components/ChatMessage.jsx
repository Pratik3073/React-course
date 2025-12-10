import robotimg from '../assets/robot.png'  // default export 
import userimg from '../assets/user.png'
import './ChatMessage.css'
export function ChatMessage({ message, sender }) {
    {
      /* prorps make component reusable 
                             ChatMessage({messge,sender})*/
    }
    // const message= props.message;
    // const sender = props.sender;
    //const {message,sender} = props;  //Destructuring
  
    //  if(sender === 'robot'){
    //   return(
    //     <div >  {/* div is a block element take up entire line by itself*/}
    //       <img src="robot.png" alt="" width="50"/>
    //       {message}
    //    </div>
    //   );
    //  }
  
    return (
      <div className={
          sender ==='user'
            ?'chat-user'
            :'chat-robot' 
      }>  
        
        {/* div is a block element take up entire line by itself*/}
        {sender === "robot" && (
          <img src={robotimg} alt="" 
          className="chat-message-profile" />
        )}
        {/*shortcut if statement geared operator &&*/}
        <div className="chat-message-text">
          {message}
        </div>
        {sender === "user" && (
          <img src={userimg} alt="" 
          className="chat-message-profile" />
        )}
      </div>
    );
  }