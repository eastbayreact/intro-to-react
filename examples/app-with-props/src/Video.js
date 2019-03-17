import React, { Component } from 'react';

export default class Video extends Component {
    /* TODO: How do we update likes and subscribes? */
  render() {
    return (
        <div className="video">
          <iframe className="video--video" width="560" height="315" src={this.props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="video--stats">
            <div className="stats--views"><strong>{'Views: '}</strong>&nbsp;0</div>
            <div className="stats--likes"><strong>{'Likes: '} </strong>&nbsp;0</div>
            <div className="stats--subscriptions"><strong>{'Subscribers: '}</strong>&nbsp;{this.state.subscribers}</div>
            <div className="stats--buttons">
              <button className="stats--button__like">Like</button>
              <button className="stats--button__subscribe">Subscribe</button>
            </div>
          </div>
        </div>
    )
  }
}
