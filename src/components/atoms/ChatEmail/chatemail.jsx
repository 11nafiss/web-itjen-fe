// Import Library
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";


// Import CSS
import { styles } from "./styles";

// Import Assets
import { LoadingOutlined } from "@ant-design/icons";

const ChatEmail = (props) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_CE_PRIVATE_KEY;

  function getOrCreateUser(callback) {
    axios.put(
        "https://api.chatengine.io/users/",
        {
          "username": email,
          "secret": email,
          "email": email,
        },
        { headers: { "Private-Key": apiKey } }
      )
      .then((r) => callback(r.data));
  }

  function getOrCreateChat(callback) {
    axios.put(
        "https://api.chatengine.io/chats/",
        {
          "usernames": ["admin", email],
          "title": "New chat",
          "is_direct_chat": true,
        },
        { headers: { "Private-Key": apiKey } }
      )
      .then((r) => callback(r.data));
  }


  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    console.log("mengirimkan email", email);

    getOrCreateUser((user) => {
      props.setUser(user);

      getOrCreateChat((chat) => {
        props.setChat(chat);
      });
    });
  }

  // Main Code
  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: props.visible ? "100%" : "0%",
          opacity: props.visible ? "1" : "0",
        },
      }}
    >
      <div
        style={{
          height: "0px",
        }}
      >
        <div style={styles.stripe} />
      </div>

      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
          },
        }}
      />

      <LoadingOutlined
        className="transition-5"
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
            fontSize: "82px",
            top: "calc(50% - 41px)",
            left: "calc(50% - 41px)",
          },
        }}
      />

      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >

        <div style={styles.topText}>
          Selamat Datang,
          <br /> Silahkan Kirim Email disini
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            position: "relative",
            width: "100%",
            top: "8%",
          }}
        >
          <input style={styles.inputOne} onChange={(e) => setEmail(e.target.value)} placeholder="Namamu" />
          <input style={styles.inputOne} onChange={(e) => setEmail(e.target.value)} placeholder="Emailmu" />
          <textarea style={styles.inputTwo} onChange={(e) => setEmail(e.target.value)} placeholder="Isi Pesan" />
          <button style={styles.sendButton}>Kirim</button>
        </form>
      </div>
    </div>
  );
};

// Props Validation
ChatEmail.propTypes = {
  setUser: PropTypes.func.isRequired,
  setChat: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

// Export Code
export default ChatEmail;
