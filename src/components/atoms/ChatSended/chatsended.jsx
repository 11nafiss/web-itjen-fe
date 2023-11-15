// Import Library
import PropTypes from "prop-types";

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
      <p >Selamat Email telah terkirim</p>
    </div>
  );
};

ChatEngine.propTypes = {
  visible: PropTypes.bool.isRequired,
};

// Export Code
export default ChatEngine;
