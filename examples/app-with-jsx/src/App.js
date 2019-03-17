import React, { Component } from 'react';

import './App.css';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Video from './Video';


export default class App extends Component {
    state = {
        /* State: Downward data flow */
    }

    addComment = ({ title, body }) => {
        /* State: Downward data flow */
    }

  render() {
    return (
      <div className="App">
        { /* TODO: How can we pass in likes and subscribers? */ }
        <Video />
        <CommentForm />

        { /* TODO: How do we add comments? */ }
      </div>
    );
  }
}
