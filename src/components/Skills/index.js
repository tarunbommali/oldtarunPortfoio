import { skillsList } from "./skillsData";
import "./index.css";
import { FaStar } from "react-icons/fa";
import SkillsFooter from "../SkillsFooter";

import React, { Component } from "react";

export default class Skills extends Component {
  state = { activeTopic: "React" };

  onClickSkillItem = (topic) => {
    this.setState({ activeTopic: topic });
  };

  render() {
    const { activeTopic } = this.state;
    return (
      <div className="skills-container">
        {/* Skills Section */}
        <div className="skill-section-concepts">
          <div className="skills-section">
            <ul className="skills-list">
              {skillsList.map(({ id, technology, icon, rating }) => (
                <button
                  className="skill-item-button"
                  onClick={() => this.onClickSkillItem(technology)}
                  key={id}
                >
                  <li className="skill-item">
                    <div className="skill-item-header">
                      {icon}
                      <div className="skill-rating-container">
                        <p className="skill-title">{technology}</p>
                        <p>
                          {Array(5)
                            .fill(null)
                            .map((_, index) => (
                              <FaStar
                                key={index}
                                className={
                                  index < rating
                                    ? "default-star"
                                    : "active-star"
                                }
                              />
                            ))}
                        </p>
                      </div>
                    </div>
                  </li>
                </button>
              ))}
            </ul>
          </div>

          {/* Filtered Topic List */}
          <div className="skills-concepts">
            {skillsList
              .filter(({ technology }) => technology === activeTopic)
              .map(({ id, technology, keyTopics }) => (
                <div key={id}>
                  <h3>{technology}</h3>
                  <ul className="topic-list">
                    {Object.keys(keyTopics).map((topic, index) => (
                      <li className="topic-item" key={index}>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <SkillsFooter />
      </div>
    );
  }
}
