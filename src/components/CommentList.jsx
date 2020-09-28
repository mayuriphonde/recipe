import React, { Component } from "react";
import Comment1 from "./Comment1";
class CommentList extends Component {
  state = {};

  getInitialState = () => {
    return { data: { comments: [] } };
  };

  render() {
    let commentNodes = this.props.data.map((comment) => {
      return (
        <Comment1 author={comment.author} key={comment.id}>
          {comment.text}
        </Comment1>
      );
    });
    return <div className="commentList">{commentNodes}</div>;
  }
}

export default CommentList;
