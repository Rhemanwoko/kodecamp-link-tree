import React from "react";
import "./App.css";
import MyImage from "./assets/profile__img.png";
import Slack from "./assets/slack.svg";
import Github from "./assets/github.svg";
import KodeCamp from "./assets/kodecamp-logo.png";
import KodeHauz from "./assets/kodeHauz-logo.png";

function App() {
  return (
    <div className="App">
      <div className="gen-container">
        <div className="top-container">
          <div className="profile">
            <div className="profile-img">
              <img src={MyImage} alt="Profile Picture" />
              <p>John Doe</p>
            </div>
          </div>
          <div className="link-tree">
            <a href="#" className="links">
              Twitter Link
            </a>
            <a href="#" className="links">
              KodeCamp Team
            </a>
            <a href="#" className="links">
              KodeCamp Books
            </a>
            <a href="#" className="links">
              Python Books
            </a>
            <a href="#" className="links">
              Background Check for Coders
            </a>
            <a href="#" className="links">
              Design books
            </a>
          </div>
        </div>
        <div className="buttom-mid">
          <a href="#" className="slack">
            <img src={Slack} alt="Slack Icon" />
          </a>
          <a href="#" className="github">
            <img src={Github} alt="Slack Icon" />
          </a>
        </div>
        <div className="footer">
          <img src={KodeCamp} alt="KodeCamp Logo" />
          <p>KodeCamp Internship Task</p>
          <img src={KodeHauz} alt="KodeHauz Logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
