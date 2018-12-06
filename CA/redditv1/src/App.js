import React, { Component } from 'react';
import header from './imgs/header.jpg';
import './App.css';
import RedditPost from './components/redditPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={header} alt="Space background" id="headerBg" />
          <img src="https://upload.wikimedia.org/wikipedia/en/5/58/Reddit_logo_new.svg" alt="reddit logo" id="redditLogo" />
        </header>
        <main>
          <div className="container">
            <div className="postList">
              <RedditPost />
            </div>
            <aside></aside>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
