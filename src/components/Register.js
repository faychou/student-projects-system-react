import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Register extends Component {
  constructor() {
    super()
    this.state = {
      username:'',
      password:'',
      cPassword:'',
      email:'',
      invite:'',
      isShow:false,
      msg:''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleCPassChange = this.handleCPassChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleInviteChange = this.handleInviteChange.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
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
  handleCPassChange(event) {
    this.setState({
      cPassword:event.target.value
    })
  }
  handleEmailChange(event) {
    this.setState({
      email:event.target.value
    })
  }
  handleInviteChange(event) {
    this.setState({
      invite:event.target.value
    })
  }
  handleRegisterSubmit(event) {
    let user = {
      username:this.state.username,
      password:this.state.password,
      cPassword:this.state.cPassword,
      email:this.state.email,
      invite:this.state.invite
    }
    // console.log(user)
    axios.post('http://localhost:3001/api/register',user)
      .then((res) => {
        console.log(res.data)
        if (res.data.registerCode === 0) {
          this.setState({
            isShow:true,
            msg:res.data.msg
          })
        } else if(res.data.registerCode === 1){
          this.setState({
            isShow:true,
            msg:res.data.msg,
            username:'',
            password:'',
            cPassword:'',
            email:'',
            invite:''
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
      <div className="app-register">
        <form>
          <h3>成都邦飞科技有限公司</h3>
          <input type="text" onChange={this.handleNameChange} value={this.state.username} placeholder="请输入用户名"/>
          <input type="password" onChange={this.handlePassChange} value={this.state.password} placeholder="请输入密码"/>
          <input type="password" onChange={this.handleCPassChange} value={this.state.cPassword} placeholder="请确认密码密码"/>
          <input type="email" onChange={this.handleEmailChange} value={this.state.email} placeholder="请输入邮箱地址"/>
          <input type="text" onChange={this.handleInviteChange} value={this.state.invite} placeholder="请输入注册码"/>
          <input type="submit" onClick={this.handleRegisterSubmit} value="注册"/>
          <br /><Link to="/login">已有账号，直接登陆</Link>
        </form>
        {this.state.isShow ? <div className="app-info error">{this.state.msg}</div> : null}
      </div>
    )
  }
}