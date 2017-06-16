import React,{Component} from 'react'
import util from '../util/util.js'

export default class Project extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  componentDidMount() {
    console.log(this.props.match.params.stu)
  }
  render() {
    var screenHeight = window.innerHeight || document.documentElement.cilentHeight || document.body.cilentHeight
    console.log(screenHeight)
    return (
      <div>
        <iframe title="net" src={`${util.serverBase}projects/${this.props.match.params.stu}`} width="100%" height={screenHeight} frameBorder="0"></iframe>
      </div>
    )
  }
}