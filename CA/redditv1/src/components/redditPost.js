import React from 'react';
import upvote from '../imgs/upvote.png';
import downvote from '../imgs/downvote.png';

const RedditPost = (props) => (
  <div className="post">
    <div className="score">
      <img src={upvote} alt="upvote" />
      <p>{props.score}</p>
      <img src={downvote} alt="downvote" />
    </div>
    <div className="details">
      <div className="cell title">
        <h3>{props.title}</h3>
        <a href={props.url}>{props.url}</a>
      </div>
      <div className="cell posted">
        <p>{props.owner}</p>
        <p>date: {props.date}</p>
      </div>
      <div className="cellAction">
        <button className="delete">Delete</button>
        <button className="modify">Modify</button>
      </div>
    </div>
  </div>
)

export default RedditPost;
