import React from "react";
import "./style.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer sticky-bottom shadow-lg  mt-auto">
      <div className="container">
        <div className="left">
          <span>
            <b> All Rights Reserved &copy; </b> 2022,2023
          </span>
        </div>
        <div className="right">
          <div className="social">
            <a href="https://twitter.com/traversymedia" target="_blank">
              <TwitterIcon className="icon" />
            </a>
            <a href="https://facebook.com/traversymedia" target="_blank">
              <FacebookIcon className="icon" />
            </a>
            <a href="https://github.com/bradtraversy" target="_blank">
              <GitHubIcon className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/bradtraversy" target="_blank">
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
