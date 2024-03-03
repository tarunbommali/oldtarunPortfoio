import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import './index.css'

const Icons = styled.div`
  display: flex;
  justify-content: flex-start; 
  padding-top: 18px;
  
`;


const SocialIconLink = styled.a`
  color: inherit;
  margin-right: 18px; 

  &:hover {
    text-decoration: none;
    transform: scale(1.1); 
  }
`;

const SocialMenu = (props) => {
    return (
        <Icons>
            <SocialIconLink href="https://linkedin.com/tarunbommali" target="_blank">
                <div className="social-icon-linkedin social-icon">  <FaLinkedin size={28} /></div>
            </SocialIconLink>

            <SocialIconLink href="https://github.com/tarunbommali" target="_blank">
                <div className="social-icon-github social-icon">    <FaGithub size={28} /></div>
            </SocialIconLink>
            {/* <SocialIconLink href="https://twitter.com/dizistarun" target="_blank">
                <div className="social-icon-twitter social-icon">  <FaTwitter size={28} /></div>
            </SocialIconLink> */}
            <SocialIconLink href="https://instagram.com/disistarun" target="_blank">
                <div className="social-icon-instagram social-icon"> <FaInstagram size={28} /></div>
            </SocialIconLink>
        </Icons>
    );
};

export default SocialMenu;
