// Import Library
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";

// Import CSS
import { styles } from "./styles";

// Import Assets
import { LoadingOutlined } from "@ant-design/icons";

const ChatEmail = (props) => {
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_dzkytxv', 'template_ksymijj', form.current, 'Cn_tbf-bN-PpyJlHb')
      .then((result) => {
          console.log("pesan terkirim", result.text);
          alert("Pesan Email Terkirim");
          setLoading(false);
      }, (error) => {
          console.log("pesan gagal", error.text);
      });
  };

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
          ref={form}
          onSubmit={sendEmail}
          style={{
            position: "relative",
            width: "100%",
            top: "8%",
          }}
        >
          <input style={styles.inputOne} name="user_name" placeholder="Namamu" type="text" required />
          <input style={styles.inputOne} name="user_email" placeholder="Emailmu" type="email" required />
          <textarea style={styles.inputTwo} name="message" placeholder="Isi Pesan" required />
          <button style={styles.sendButton} value="Send">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

// Props Validation
ChatEmail.propTypes = {
  visible: PropTypes.bool.isRequired,
};

// Export Code
export default ChatEmail;
