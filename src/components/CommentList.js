import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render () {
    return (
      <div>
        {this.props.comments.map((item, index) => {
          return (
            <Comment
              onDeleteComment={_ => this.handleDeleteComment(index)}
              index={index}
              key={index}
              comment={item} />
          )
        })}
      </div>
    )
  }
}

export default CommentList
