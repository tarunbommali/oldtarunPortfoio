import React from "react";
import { FaLink } from "react-icons/fa";
import "./index.css";

export default function SkillsFooter() {
  return (
    <div className="skills-footer-section-width">
      <div className="skills-footer-section">
        <ul className="skills-footer-sub-section">
          <li>
            <p className="skills-footer-sub-section-title">Certifications</p>
            <hr className="footer-subtitle-line" />
            <ul>
              <li>
                Namaste JavaScript by Akshay Saini
                <a
                  className="redirect-link"
                  href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708490336/Frontend/certificates/certificate_y6bbav.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLink className="redirect-link-icon" />
                </a>
              </li>
              <li>
                PROGRAMMING FOUNDATIONS WITH PYTHON
                <a
                  href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708510124/Frontend/certificates/Python_page-0001_tnrefc.jpg"
                  className="redirect-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLink className="redirect-link-icon" />
                </a>
              </li>
              <li>
                BUILD YOUR OWN RESPONSIVE WEBSITE
                <a
                  href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708510117/Frontend/certificates/Responsive_page-0001_qwmskz.jpg"
                  className="redirect-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLink className="redirect-link-icon" />
                </a>
              </li>
              <li>
                INTRODUCTION TO DATABASES
                <a
                  href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708510099/Frontend/certificates/Database_page-0001_wn2q21.jpg"
                  className="redirect-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLink className="redirect-link-icon" />
                </a>
              </li>
              <li>
                BUILD YOUR OWN STATIC WEBSITE
                <a
                  href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708510109/Frontend/certificates/Static_page-0001_klnsi8.jpg"
                  className="redirect-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLink className="redirect-link-icon" />
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="skills-footer-sub-section">
          <li>
            <p className="skills-footer-sub-section-title">
              Solved Popular Coding Question
            </p>
            <hr className="footer-subtitle-line" />
            <ul>
              <li>Reverse string</li>
              <li>Longest substring without repeating characters</li>
              <li>Longest common subsequence</li>
              <li>Container with most water</li>
              <li>Reverse linked list</li>
              <li>K closest points to origin</li>
              <li>Kth smallest element</li>
              <li>Reverse words in a string</li>
            </ul>
          </li>
        </ul>
        <ul className="skills-footer-sub-section">
          <li>
            <p className="skills-footer-sub-section-title">Coding Profile</p>
            <hr className="footer-subtitle-line" />
            <ul>
              <li>
                <a
                  href="https://github.com/tarunbommali"
                  target="_blank"
                  className="redirect-link"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerrank.com/profile/dizistarun"
                  target="_blank"
                  className="redirect-link"
                  rel="noreferrer"
                >
                  Haker Rank
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/tarunbommali/"
                  target="_blank"
                  className="redirect-link"
                  rel="noreferrer"
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
