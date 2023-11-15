// Import Library
import { useState } from "react"
import PropTypes from "prop-types";

// Import CSS
import { styles } from "./styles"

// Main Declaration
const LiveAvatar = (props) => {
    const [hovered, setHovered] = useState(false);

// Main Code
    return(
        <div style={props.style}>
            <div
            className="transition-3"
            style={{
                ...styles.avatarHello,
                ...{opacity: hovered ? '1' : '0'},
                zIndex: "999"
            }}
            >
                Hubungi Kami
            </div>
            <div
            className="transition-3"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => props.onClick?.()}
            style={{
                ...styles.chatWithMeButton,
                ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #0D5CAB' }
            }}
            ></div>
        </div>
    )
}

LiveAvatar.propTypes = {
    style: PropTypes.any,
    onClick: PropTypes.func,
};

// Export Code
export default LiveAvatar;