import { MdMail, MdPhone } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";
import "./index.css";
const iframeStyle = {
  border: "0",
};

const ContactMe = () => (
  <div className="contact-me-section" id="contact-section">
    <h1 className="section-title">Contact</h1>
    <div className="contact-form">
      <div className="details-section">
        <h2 className="details-title">
          Let's discuss on something
          <span className="highlighted-text"> cool </span>together
        </h2>
        <div className="details">
          <p className="contact-details">
            <MdMail className="contact-icon" />
            <a className="a-link" href="mailto:btaruntej143@gmail.com">
              btaruntej143@gmail.com
            </a>
          </p>
          <p className="contact-details">
            <MdPhone className="contact-icon" />
            <a href="tel:+91 90143 96456" className="a-link">
              +91 90143 96456
            </a>
          </p>
          <p className="contact-details">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30455.527502152694!2d78.35205300221409!3d17.41462184251568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9422532fb3f7%3A0xc793fad03d2e2af1!2sManikonda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709438582614!5m2!1sen!2sin"
              width="600"
              height="150"
              style={iframeStyle} // Pass the style object here
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="form-section">
        <p className="form-title">Feel free to drop your message </p>
        <form className="send-message-form">
          <ul className="options-list">
            <li className="service-option">Web Devlopment</li>
            <li className="service-option">Python</li>
            <li className="service-option">Database</li>
            <li className="service-option">SQL</li>
            <li className="service-option">MERN Stack</li>
            <li className="service-option">Frontend</li>
            <li className="service-option">Backend</li>
            <li className="service-option">Data Struture</li>
          </ul>

          <input
            type="text"
            placeholder="Your name"
            className="send-message-input"
          />
          <input
            type="mail"
            placeholder="Your email"
            className="send-message-input"
          />
          <input
            type="text"
            placeholder="Your message"
            className="send-message-input"
          />
          <div className="send-button-container">
            <button className="send-button">
              <RiSendPlane2Line className="contact-icon" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default ContactMe;
