import React, { Component } from "react";
class Comment1 extends Component {
  state = {};
  render() {
    return (
      <div className="comment">
        <h3 className="commentAuthor">{this.props.author}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Comment1;
