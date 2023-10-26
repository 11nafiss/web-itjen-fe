// Import Library
import PropTypes from "prop-types";
import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";

// Main Declaration
const ChatEngine = (props) => {
  // Main Code
  return (
    <div
      className="transition-5"
      style={{
        height: props.visible ? "100%" : "0%",
        zIndex: props.visible ? "100" : "0",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {props.visible && (
        <ChatEngineWrapper>
          <Socket 
          projectID={import.meta.env.VITE_CE_PROJECT_ID} 
          userName={props.user.email} 
          userSecret={props.user.email} 
          />
          
          <ChatFeed activeChat={props.chat.id} />
        </ChatEngineWrapper>
      )}
    </div>
  );
};

ChatEngine.propTypes = {
  visible: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  chat: PropTypes.shape({
    id: PropTypes.number,
  }),
};

// Export Code
export default ChatEngine;
