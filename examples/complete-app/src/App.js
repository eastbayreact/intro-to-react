import React, { Component } from 'react';

import './App.css';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Video from './Video';


export default class App extends Component {
    state = {
        /* State: Downward data flow */
        comments: [],
    }

    addComment = ({ title, body }) => {
        /* State: Downward data flow */
        const { comments } = this.state
        this.setState({
            comments: comments.concat({ title, body })
        })
    }

  render() {
      const { comments } = this.state
      const commentComponents = comments.map(({ title, body }) => (
          <Comment title={title} body={body}/>
      ))
      
    return (
      <div className="App">
        <Video />
        <CommentForm addComment={this.addComment} />
        {commentComponents}
      </div>
    );
  }
}
