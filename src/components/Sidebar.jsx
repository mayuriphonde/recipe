import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import "./sidebar.css";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <img
          src={this.props.imgsrc}
          style={{ borderRadius: 150 / 2, marginTop: 50, width: 100 }}
        />
        <h2>Recipe Time</h2>
        <br />
        <SocialIcon url="http://twitter.com/MayuriPhonde" />
        <br />
        <br />
        <SocialIcon url="https://www.instagram.com/msp9595/" />
      </div>
    );
  }
}

export default Sidebar;
