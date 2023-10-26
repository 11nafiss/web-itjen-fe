// Import Library
import { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import "react-chat-widget/lib/styles.css";

import { Kemenkeu } from "../../../assets/assets";

// Main Declaration
const LiveChat = () => {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div>
      <Widget handleNewUserMessage={handleNewUserMessage} profileAvatar={Kemenkeu} title="My new awesome title" subtitle="And my cool subtitle" />
    </div>
  ); // Adjust the return statement as needed
};

// Export Code
export default LiveChat;
