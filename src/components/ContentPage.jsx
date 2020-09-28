import React, { Component } from "react";
import "./sidebar.css";

class ContentPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: 300, marginRight: 100 }}>
        <strong style={{ fontSize: 40 }}>Title</strong>
        <br />
        <h4 style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h4>
        <br />

        <h4 style={{ textAlign: "justify" }}>
          <a href="https://www.instagram.com/msp9595/">Click here</a>
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          <br />
          <a href="#">Click here</a>
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
      </div>
    );
  }
}

export default ContentPage;
