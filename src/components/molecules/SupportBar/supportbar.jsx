// Import Library
import { useState } from "react";
import PropTypes from "prop-types";

// Import Components
import { ChatEmail, ChatEngine } from "../../atoms/atoms"

// Import CSS
import { styles } from "./styles";

// Main Declaration
const SupportBar = (props) => {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);

// Main Code
  return (
    <div
    className="transition-5"
    style={{
        ...styles.supportWindow,
        ...{opacity: props.visible ? '1' : '0'},
        ...{display: props.visible ? 'block' : 'none'},
    }}
    >
      <ChatEmail 
      setUser={user => setUser(user)}
      setChat={chat => setChat(chat)}
      visible={user === null || chat === null}
      />

      <ChatEngine 
      visible={user !== null && chat !== null}
      chat={chat}
      user={user}
      />
    </div>
  )
}

SupportBar.propTypes = {
  visible: PropTypes.bool,
};

// Export Code
export default SupportBar