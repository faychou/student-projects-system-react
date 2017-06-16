const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  project:{
    en:String,
    zh:String
  },
  author:[{
    en:String,
    zh:String
  }],
  branch:String,
  classes:String,
  label:[String],
  excellent:Boolean,
  description:String,
  exeImg:{
    type:String,
    default:'projectImg/project-default-l.jpg'
  },
  allImg:{
    type:String,
    default:'projectImg/project-default-s.jpg'
  },
  time: { // 发表时间
    type:Date, 
    default:new Date()
  },
  lastTime: { // 最后一次修改时间
    type:Date, 
    default:new Date()
  }
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;