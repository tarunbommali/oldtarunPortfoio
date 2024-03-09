// CLASS COMPONENT
import { Component } from "react";
import SocialMenu from "../SocialMenu";
import {
  PROFILE_IMG_URL,
  QUOTES_LIST,
  WHATSAPP_URL,
  RESUME_DOWNLOAD_LINK,
} from "../../utils/constants";
import "./index.css";

class Home extends Component {
  state = { activeQuote: "" };

  onClickGenerateButton = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES_LIST.length);
    this.setState({ activeQuote: QUOTES_LIST[randomIndex] });
  };
  componentDidMount() {
    this.onClickGenerateButton();
  }

  renderProfileIntroductionAndImageSection() {
    return (
      <div className="profile-details-block">
        <div className="profile-message-block">
          <h1 className="profile-message-text">hy,Hello!</h1>
          <h1 className="profile-name-text">
            I'm <span className="my-name">Tarun Bommali </span>
          </h1>
          <p className="job-role">~ Software Devloper</p>
        </div>
        <button
          className="quote-generate-button "
          type="button"
          onClick={this.onClickGenerateButton}
        >
          <img src={PROFILE_IMG_URL} alt="profile" className="profile-image" />
        </button>
      </div>
    );
  }

  renderContactAndResumeSection() {
    return (
      <div className="contact-block">
        <div className="contact-buttons-block">
          <a
            target="_blank"
            rel="noreferrer"
            className="contact-btn-a-link"
            href={WHATSAPP_URL}
          >
            <button className="contact-btn-link">Hire Me</button>
          </a>

          <a
            target="_blank"
            className="contact-btn-a-link"
            rel="noreferrer"
            href={RESUME_DOWNLOAD_LINK}
          >
            <button className="contact-btn-link"> Download CV</button>
          </a>
        </div>
        <SocialMenu />
      </div>
    );
  }

  render() {
    const { activeQuote } = this.state;
    return (
      <div className="home-container">
        <p className="text-quote">" {activeQuote}</p>
        <div className="profile-section">
          {this.renderProfileIntroductionAndImageSection()}
          {this.renderContactAndResumeSection()}
        </div>
      </div>
    );
  }
}

export default Home;
