import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

const Exec = () => (
  <div>
    Home
  </div>
)

const All = () => (
  <div>
    All
    <Link to='/article/one'>one</Link>
  </div>
)

const Home = ({match}) => (
  <div>
    <Link to ={match.url}>Exec</Link>
    <Link to ={`${match.url}/all`}>All</Link>
    <hr />
    <Route exact path={match.url} component={Exec}/ >
    <Route path={`${match.url}/all`} component={All}/ >
  </div>
)

const MainRouter = () => (
  <Router>
    <div>
      <Redirect from="/" to="/home"/>
      
      <Route path='/home' component={Home} />
      <Route path='/article/:ids' component={Article} />
    </div>
  </Router>
)

const Article = ({match}) => (
  <div>
    <h3>{match.params.ids}</h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <MainRouter />
    );
  }
}

export default App;
