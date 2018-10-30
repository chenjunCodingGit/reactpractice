import React, { Component } from 'react';

import CommentApp from './components/CommentApp'
import './App.css';

class App extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     isLiked: true
  //   }
  // }

  // handleLiked () {
  //   this.setState({
  //     isLiked: !this.state.isLiked
  //   })
  // }

  render () {
    return (
      <div className="wrapper">
        <CommentApp />
        {/* <p onClick={this.handleLiked.bind(this)}>
          {this.state.isLiked ? '点赞' : '取消'} 👍
        </p> */}
      </div>
    )
  }
}

export default App;
