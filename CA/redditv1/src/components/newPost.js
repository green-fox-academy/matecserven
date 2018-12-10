import React, {Component} from 'react';

class NewPost extends Component {
  state = {
    title: '',
    url: '',
    user: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewPost({
      title: this.state.title,
      url: this.state.url,
      user: this.state.user
    });
  }

  render() {
    return (
      <form className="newPostField" onSubmit={this.handleSubmit}>
        <label>
          <span>Title</span>
          <input name="title" type="text" id="newTitle" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          <span>URL</span>
          <input name="url" type="text" id="newPost" value={this.state.url} onChange={this.handleChange} />
        </label>
        <label>
          <span>USER</span>
          <input name="user" type="text" id="user" value={this.state.user} onChange={this.handleChange} />
        </label>
        <button type="submit" className="buttonPost">Create your post</button>
      </form>
    );
  }
}

export default NewPost;