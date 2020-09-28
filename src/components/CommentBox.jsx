import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
class CommentBox extends Component {
  state = {};
  handleCommentSubmit = (comment) => {
    let comments = this.props.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.props.onAddComment(newComments);
  };
  render() {
    return (
      <div
        className="commentBox"
        style={{ marginRight: 100, marginLeft: -250 }}
      >
        <h3 style={{ marginRight: 100, marginLeft: -160 }}>Comments:</h3>

        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.props.data} />
      </div>
    );
  }
}

export default CommentBox;
