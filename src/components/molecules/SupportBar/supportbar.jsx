// Import Library
import { useState } from "react";
import PropTypes from "prop-types";

// Import Components
import { ChatEmail } from "../../atoms/atoms";

// Import CSS
import { styles } from "./styles";

// Main Declaration
const SupportBar = (props) => {
  const [name] = useState(null);
  const [email] = useState(null);
  const [chat] = useState(null);

  // Main Code
  return (
    <div
      className="transition-5"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
        ...{ display: props.visible ? "block" : "none" },
      }}
    >
      <ChatEmail visible={name === null || chat === null || email === null} />
    </div>
  );
};

SupportBar.propTypes = {
  visible: PropTypes.bool,
};

// Export Code
export default SupportBar;
