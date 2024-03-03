import { Component } from "react";
import SocialMenu from "../SocialMenu";
import "./index.css";

const quotes = [
  "Programming is the closest thing we have to magic spells.",
  "It's not a bug, it's an undocumented feature.",
  "Debugging is like hunting for aliens in a haystack.",
];

class Home extends Component {
  state = { activeQuote: "" };

  onClickGenerateButton = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.setState({ activeQuote: quotes[randomIndex] });
  };
  componentDidMount() {
    this.onClickGenerateButton();
  }

  render() {
    const { activeQuote } = this.state;
    return (
      <div className="home-container">
        <p className="text-quote">" {activeQuote}</p>

        <div className="profile-section">
          <div className="profile-and-name">
            <div className="hello-box">
              <h1 className="message">hy,Hello!</h1>
              <h1 className="name">
                I'm <span className="my-name">Tarun Bommali </span>
              </h1>
              <p className="job-role">~ Software Devloper</p>
            </div>
            <button
              className="text-quote-button "
              type="button"
              onClick={this.onClickGenerateButton}
            >
              <img
                src="https://res.cloudinary.com/drdgj0pch/image/upload/v1707662912/WhatsApp_Image_2024-02-09_at_14.26.09_9a0ddc7f_yqjui9.jpg"
                alt="profile"
                className="profile"
              />
            </button>
          </div>
          <div className="connect-box">
            <div className="button-container">
              <button className="hire-button btn-link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="a-link a-link-hire-btns"
                  href={`whatsapp://send?phone=+91 9581193026&text=${encodeURIComponent(
                    "I'm contacting you through your website."
                  )}`}
                >
                  Hire Me
                </a>
              </button>
              <button className="cv-button btn-link">
                <a
                  target="_blank"
                  className="a-link a-link-hire-btns"
                  rel="noreferrer"
                  href="https://docs.google.com/document/d/13YS7DEFjv5MNSksfE4flMRyalAcxU3CpG5O7pLTbFJI/edit?usp=sharing"
                >
                  Download CV
                </a>
              </button>
            </div>
            <SocialMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
