import React, { Component } from 'react';

export default class CommentForm extends Component {
    render() {
        return (
            <>
              <h2>Leave a Comment</h2>
              <form className="comment-form">
                <label htmlFor="title">Title</label>
                <input type="text" className="comment-form--title" />
                <label htmlFor="Body">Body</label>
                <textarea classame="comment-form--body" />
                <button type="submit">Leave a comment</button>
              </form>
            </>
        )
    }
}

