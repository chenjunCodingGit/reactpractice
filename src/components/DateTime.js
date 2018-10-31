import React, { Component } from 'react'

class DateTime extends Component {
  constructor () {
    super()
    this.state = {
      date: new Date()
    }
  }

  // 组件启动、ajax数据拉取、定时器的启动
  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    },1000)
  }

  // 组件挂载完成时
  componentDidMount () {
    // console.log('component did mount')
    console.log('this.input: ', this.input)
    this.input.focus()
  }

  // 组件销毁时
  componentWillUnmount () {
    clearInterval(this.timer)
    // console.log('component will unmount')
  }

  render () {
    return (
      <div>
        <p>现在的时间是: </p>
        <span>{this.state.date.toLocaleTimeString()}</span>
        <br/>
        <input ref={(input) => this.input = input} />
      </div>
    )
  }
}

export default DateTime