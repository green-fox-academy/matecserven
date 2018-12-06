import React, { Component } from 'react';
import upvote from '../imgs/upvote.png';
import downvote from '../imgs/downvote.png';

class RedditPost extends Component {
  state = {
    title: 'alma',
    url: 'google.com',
    owner: 'bela',
    score: 0
  }

  render() {
    return(
      <div className="post">
        <div className="score">
          <img src={upvote} alt="upvote"/>
          <p>{this.state.score}</p>
          <img src={downvote} alt="downvote"/>
        </div>
        <div className="details">
          <div className="cell title">
            <h3>{this.state.title}</h3>
            <a href={this.state.url}>{this.state.url}</a>
          </div>
          <div className="cell posted">
            <p>{this.state.owner}</p>
            <p>date: </p>
          </div>
          <div className="cellAction">
            <button className="delete">Delete</button>
            <button className="modify">Modify</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RedditPost;
