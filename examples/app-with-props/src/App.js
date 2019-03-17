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
        <Video video="https://www.youtube.com/embed/Rzd0mLf366I" />
        <CommentForm />

        /* TODO: How do we add comments? */
      </div>
    );
  }
}
