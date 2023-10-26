// Import Library
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Import Components
import { LiveAvatar, SupportBar } from "../../molecules/molecules";

// Main Declaration
const LiveChat = (props) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ref]);

  const handleLiveAvatarClick = () => {
    setVisible(!visible);
  };

  // Main Code
  return (
    <div ref={ref}>
      <SupportBar visible={visible} container={container} />
      <LiveAvatar onClick={handleLiveAvatarClick} style={{ position: "fixed", bottom: "24px", right: "24px" }} />
    </div>
  );
}

LiveChat.propTypes = {
  window: PropTypes.func,
};

// Export Code
export default LiveChat;
