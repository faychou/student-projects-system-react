import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom'
import './App.css'
import Exec from './components/Exec.js'
import All from './components/All.js'
import Project from './components/Project.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import Publish from './components/Publish.js'

const Home = () => (
  <div>
    <Link to ='/home'>Exec</Link>
    <Link to ='/home/all'>All</Link>
    <hr />
    <Route exact path='/home' component={Exec}/ >
    <Route path='/home/all' component={All}/ >
  </div>
)

const MainRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/publish' component={Publish}></Route>
        <Route exact path='/:stu' component={Project}></Route>
        <Route path='/:stu/:pro' component={Project}></Route>
        <Redirect from="/" to="/home"/>
      </Switch>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <MainRouter />
    )
  }
}

export default App
