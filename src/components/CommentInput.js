import React, { Component } from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  componentWillMount () {
    this._loadUsername()
  }

  componentDidMount () {
    this.textarea.focus()
  }

  _loadUsername () {
    const username = window.localStorage.getItem('username')
    if (username) {
      this.setState({
        username
      })
    }
  }
  _saveUsername (username) {
    window.localStorage.setItem('username', username)
  }

  handleUsernameBlur (e) {
    this._saveUsername(e.target.value)
  }
  handleUsernameChange (e) {
    this.setState({
      username: e.target.value
    })
  }
  handleContentChange (e) {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit () {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this.props.onSubmit({
        username,
        content,
        createdTime: +new Date()
      })
    }
    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onBlur={e => this.handleUsernameBlur(e)}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              ref={textarea => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
