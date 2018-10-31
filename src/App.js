import React, { Component } from 'react';

import CommentApp from './components/CommentApp'
// import DateTime from './components/DateTime'
import './App.css';

class App extends Component {
  constructor () {
  // 组件初始化
    super()
    this.state = {
      isLiked: true
    }
  }

  // handleLiked () {
  //   this.setState({
  //     isLiked: !this.state.isLiked
  //   })
  // }
  handleClick = (e) => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <div className="wrapper">
        {/* {this.state.isLiked ? <DateTime /> : null}
        <button onClick={() => this.handleClick()}>点击</button> */}
        {/* <p onClick={this.handleLiked.bind(this)}>
          {this.state.isLiked ? '点赞' : '取消'} 👍
        </p> */}
        <CommentApp />
      </div>
    )
  }
}

export default App;
