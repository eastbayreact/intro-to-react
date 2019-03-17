import React, { Component } from 'react';
import './App.css';

import Comment from './Comment';
import CommentForm from './CommentForm';
import Video from './Video';

export default class App extends Component {
  render() {
      const { comments } = this.state
      
    return (
      <div className="App">
        <Video />
        <CommentForm />
        <Comment title="Wow" body="Cool"/>
      </div>
    );
  }
}
