import React, { Component } from "react";

class CommentsPage extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();

    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment };

      this.props.handleAddComment(commentObject);
    }

    // Clear input fields
    //e.target.elements.comment.value = "";
    //e.target.elements.name.value = "";
  }

  render() {
    return (
      <div style={{ marginRight: 100, marginLeft: -400 }}>
        <strong className="title">Kindly leave your thoughts below</strong>
        <br />
        <br />
        <form onSubmit={this.addComment}>
          <div className="field">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Your name"
              style={{ width: 250 }}
            />
            <br />
            <br />
            <textarea
              className="textarea"
              name="comment"
              placeholder="Add a comment"
              style={{ width: 250 }}
            ></textarea>
            <br />
            <button className="button is-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentsPage;
