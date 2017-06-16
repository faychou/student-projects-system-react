import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Publish extends Component {
  constructor() {
    super()
    this.state = {
      projectNameEn:'',
      projectNameZh:'',
      authorEn:'',
      authorZh:'',
      excellent:false,
      branch:'web',
      classes:'',
      label:['html','css'],
      description:'',
      isShow:false,
      msg:''
    }
    this.projectEnChange = this.projectEnChange.bind(this)
    this.projectZhChange = this.projectZhChange.bind(this)
    this.authorEnChange = this.authorEnChange.bind(this)
    this.authorZhChange = this.authorZhChange.bind(this)
    this.excellentChange = this.excellentChange.bind(this)
    this.branchChange = this.branchChange.bind(this)
    this.classesChange = this.classesChange.bind(this)
    this.labelChange = this.labelChange.bind(this)
    this.descriptionChange = this.descriptionChange.bind(this)
    this.handleProjectSubmit = this.handleProjectSubmit.bind(this)
  }
  projectEnChange(event) {
    this.setState({
      projectNameEn:event.target.value
    })
  }
  projectZhChange(event) {
    this.setState({
      projectNameZh:event.target.value
    })
  }
  authorEnChange(event) {
    this.setState({
      authorEn:event.target.value
    })
  }
  authorZhChange(event) {
    this.setState({
      authorZh:event.target.value
    })
  }
  excellentChange(event) {
    this.setState({
      excellent:!this.state.excellent
    })
  }
  branchChange(event) {
    this.setState({
      branch:event.target.value
    })
  }
  classesChange(event) {
    this.setState({
      classes:event.target.value
    })
  }
  labelChange(event) {
    var options = event.target.options
    var optionsValue = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        optionsValue.push(options[i].value);
      }
    }
    this.setState({
      label:optionsValue
    })
  }
  descriptionChange(event) {
    this.setState({
      description:event.target.value
    })
  }
  handleProjectSubmit(event) {
    // 将多个开发者分割位数组
    let authorEnArr = this.state.authorEn.split(',')
    let authorZhArr = this.state.authorZh.split(',')
    // console.log(authorEnArr)

    let projectItem = {
      projectNameEn:this.state.projectNameEn,
      projectNameZh:this.state.projectNameZh,
      authorEn:authorEnArr,
      authorZh:authorZhArr,
      excellent:this.state.excellent,
      branch:this.state.branch,
      classes:this.state.classes,
      label:this.state.label,
      description:this.state.description
    }
    // console.log(projectItem)
    axios.post('http://localhost:3001/api/publish',projectItem)
      .then((res) => {
        console.log(res.data)
        if (res.data.publishCode === 1) {
          this.setState({
            projectNameEn:'',
            projectNameZh:'',
            authorEn:'',
            authorZh:'',
            excellent:false,
            branch:'web',
            classes:'',
            label:['html','css'],
            description:'',
            isShow:true,
            msg:res.data.msg
          })
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
      <div className="app-publish">
        <nav className="form-nav">
          <h2>成都邦飞科技有限公司实习生项目管理</h2>
        </nav>
        {this.state.isShow ? <div className="error">{this.state.msg}</div> : null}
        <div className="form-link">
          <Link to="/home/all">返回项目列表</Link>
          <Link to="/login">退出</Link>
        </div>
        <form className="form" onSubmit={this.handleProjectSubmit}>
          <div className="form-ctrl">
            <label>
              项目英文名：
              <input type="text" onChange={this.projectEnChange} value={this.state.projectNameEn} />
            </label>
          </div>
          <div className="form-ctrl">
            <label>
              项目中文名：
              <input type="text" onChange={this.projectZhChange} value={this.state.projectNameZh} />
            </label>
          </div>
          <div className="form-ctrl">
            <label>
              作者英文名：
              <input type="text" onChange={this.authorEnChange} value={this.state.authorEn} />
            </label>
          </div>
          <div className="form-ctrl">
            <label>
              作者中文名：
              <input type="text" onChange={this.authorZhChange} value={this.state.authorZh} />
            </label>
          </div>
          <div className="form-ctrl">
            <label>
              优秀项目：
              {/*这里注意checkbox是否选中由checked决定，而不是value*/}
              <input type="checkbox" onChange={this.excellentChange} checked={this.state.excellent} />
            </label>
          </div>
          <div className="form-ctrl">
            <label>
              专业：
              <select onChange={this.branchChange} value={this.state.branch}>
                <option value="web">WEB</option>
                <option value="java">Jave</option>
                <option value="flushbonading">嵌入式</option>
                <option value="networking">物联网</option>
              </select>
            </label>
          </div>
          <div className="form-ctrl">
            <label>
              班级：
              <select onChange={this.classesChange} value={this.state.classes}>
                <option value="">请选择</option>
                <option value="class1">1</option>
                <option value="class2">2</option>
                <option value="class3">3</option>
                <option value="class4">4</option>
              </select>
            </label>
          </div>
          <div className="form-ctrl">
            <label>
              标签：
              <select onChange={this.labelChange} value={this.state.label} multiple>
                <option value="html">HTML5</option>
                <option value="css">CSS3</option>
                <option value="js">Javascript</option>
                <option value="angular">Angular</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="node">Node</option>
              </select>
            </label>
          </div>
          <div className="form-ctrl">
            <label>项目简介：</label>
            <textarea onChange={this.descriptionChange} value={this.state.description}></textarea>
          </div>
          <div className="form-ctrl">
            <input type="submit" value="提交" />
          </div>
        </form>
      </div>
    )
  }
}