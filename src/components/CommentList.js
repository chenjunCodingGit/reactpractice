import React, { Component } from 'react'

import Comment from './Comment'

class CommentList extends Component {
  render () {
    return (
      <div>
        {this.props.comments.map((item, index) => {
          return (
            <Comment
              key={index}
              comment={item} />
          )
        })}
      </div>
    )
  }
}

export default CommentList
