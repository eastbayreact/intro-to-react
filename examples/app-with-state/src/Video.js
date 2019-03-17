import React, { Component } from 'react';

export default class Video extends Component {
    state = {
        /* State */
        likes: 0,
        views: 372947,
        subscribers: 0,
    }

    addLike = () => {
        this.setState({
            likes: this.state.likes + 1
        }) 
    }

    addSubscribe = () => {
        this.setState({
            subscribers: this.state.subscribers + 1
        }) 
    }

  render() {
    return (
        <div className="video">
          <iframe className="video--video" width="560" height="315" src="https://www.youtube.com/embed/Rzd0mLf366I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="video--stats">
            <div className="stats--views"><strong>{'Views: '}</strong>&nbsp;{this.state.views}</div>
            <div className="stats--likes"><strong>{'Likes: '} </strong>&nbsp;{this.state.likes}</div>
            <div className="stats--subscriptions"><strong>{'Subscribers: '}</strong>&nbsp;{this.state.subscribers}</div>
            <div className="stats--buttons">
              <button className="stats--button__like" onClick={this.addLike}>Like</button>
              <button className="stats--button__subscribe" onClick={this.addSubscribe}>Subscribe</button>
            </div>
          </div>
        </div>
    )
  }
}
