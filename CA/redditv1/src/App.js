import React, { Component } from 'react';
import header from './imgs/header.jpg';
import './App.css';
import RedditPost from './components/redditPost';
import NewPost from './components/newPost';

class App extends Component {
  state = {
    posts: null
  }

  getPosts = () => {
    fetch('/users')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  createNewPost = (input) => {
    fetch('/users/newPost', {
      method: 'post',
      body: JSON.stringify(input),
      })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  componentDidMount() {
    this.getPosts();
  }

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
              {
                this.state.posts ?
                  (this.state.posts.posts.map(post =>
                  <RedditPost
                    title={post.title}
                    score={post.score}
                    url={post.url}
                    owner={post.owner}
                    date={post.timestamp}
                  />
                )) : 'No post :('
              }
            </div>
            <aside>
              <NewPost 
                createNewPost={this.createNewPost}
              />
            </aside>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
