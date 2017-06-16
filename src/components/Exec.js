import React,{Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import util from '../util/util.js'

export default class Exec extends Component {
  constructor() {
    super()
    this.state ={
      items:[]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/getExec')
      .then((res) => {
        console.log(res.data)
        this.setState({
          items:res.data
        })
      })
      .catch((err) =>{
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        {
          this.state.items.map((item,index) => (
            <div key={index}>
              <h2>
                <Link to={'/' + item.author[0].en + '/' + item.project.en}>{item.project.zh}</Link>
              </h2>
              <h6>
                <Link to={'/' + item.author[0].en}>{item.author[0].zh}</Link>
              </h6>
              <img src={util.serverBase + item.allImg} alt="" title=""/>
              <p>{item.description}</p>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}