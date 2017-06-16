import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      username:'',
      password:'',
      msg:'',
      isShow:false
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }
  handleNameChange(event) {
    this.setState({
      username:event.target.value
    })
  }
  handlePassChange(event) {
    this.setState({
      password:event.target.value
    })
  }
  handleLoginSubmit(event) {
    let user = {
      username:this.state.username,
      password:this.state.password
    }
    // console.log(user)
    axios.post('http://localhost:3001/api/login',user)
      .then((res) => {
        console.log(res.data)
        if (res.data.loginCode === 1) {
          this.props.history.push('/publish')
        } else {
          this.setState({
            isShow:true,
            msg:res.data.msg
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    event.preventDefault()
  }
  render() {
    return (
      <div className="app-login">
        <form>
          <h3>成都邦飞科技有限公司</h3>
          <input type="text" onChange={this.handleNameChange} value={this.state.username} placeholder="请输入用户名"/>
          <input type="password" onChange={this.handlePassChange} value={this.state.password} placeholder="请输入密码"/>
          <input type="submit" onClick={this.handleLoginSubmit} value="登陆"/>
          <br /><Link to="/register">没有账号，去注册</Link>
        </form>
        {this.state.isShow ? <div className="app-info error">{this.state.msg}</div> : null}
      </div>
    )
  }
}