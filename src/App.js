import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbarpage from "./components/Navbarpage";
import Sidebar from "./components/Sidebar";
import ContentPage from "./components/ContentPage";
import CommentsPage from "./components/CommentsPage";
import Comments from "./components/Comments";
import CommentBox from "./components/CommentBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      data: [],
    };

    //this.handleAddComment = this.handleAddComment.bind(this);
    this.handleAddComments = this.handleAddComments.bind(this);
  }

  handleAddComment(comment) {
    this.setState((prevState) => {
      return {
        comments: prevState.comments.concat(comment),
      };
    });
  }

  handleAddComments(comment) {
    let cmnt = this.state.data;
    return this.setState({ data: cmnt.concat(comment) });
  }

  render() {
    return (
      <div className="App">
        <Navbarpage />
        <Sidebar imgsrc="./Cover.jpg" />
        <ContentPage />
        <CommentBox
          data={this.state.data}
          onAddComment={this.handleAddComments}
        />
      </div>
    );
  }
}

export default App;
