import React, { Component } from 'react'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp  extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments  = window.localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }
  _saveComments (comments) {
    window.localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({comments})
    this._saveComments(comments)
  }
  handleDeleteComment (index) {
    // console.log('index: ', index)
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({comments})
    this._saveComments(comments)
  }
  
  render () {
    return (
      <div>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          onDeleteComment={_ => this.handleDeleteComment(_)}
          comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp
