import React, { Component } from 'react';

export default class CommentForm extends Component {
    state = {
        title: '',
        body: '',
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        /* TODO: How do we add comments? */

        return (
            <>
              <h2>Leave a Comment</h2>
              <form className="comment-form" onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" className="comment-form--title" onChange={this.handleChange} name="title" />
                <label htmlFor="Body">Body</label>
                <textarea classame="comment-form--body" onChange={this.handleChange} name="body" />
                <button type="submit">Leave a comment</button>
              </form>
            </>
        )
        
    }
}

