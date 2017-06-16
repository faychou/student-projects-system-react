const express = require('express');
const router = express.Router();
// 引入数据库连接服务
require('./db/connect.js');

// 引入`User、Project` Model
const User = require('./db/users.js');
const Project = require('./db/projects.js');

// 优秀项目
router.get('/api/getExec',function(req,res) {
  Project.find({'excellent':true},function(err,docs) {
    res.send(docs);
  });
  // res.send({msg:'优秀项目'});
});

// 所有项目
router.get('/api/getAll',function(req,res) {
  Project.find(function(err,docs) {
    res.send(docs);
  });
  // res.send({msg:'所有项目'});
});

// 登陆
router.post('/api/login',function(req,res) {
  console.log(req.body);
  var getUser = {username:req.body.username};
  User.findOne(getUser,function(err,doc) {
    if (err) {
      return res.send({loginCode:0,msg:'服务器出错，请重试！',error:err});
    }
    console.log(doc);
    if (!doc) {
      return res.send({loginCode:0,msg:'账户不存在'});
    }

    if (req.body.username == doc.username && req.body.password == doc.password) {
      res.send({loginCode:1,msg:'登陆成功'});
    } else {
      res.send({loginCode:0,msg:'用户名或密码错误'});
    }
  });
});

// 注册
router.post('/api/register',function(req,res) {
  console.log(req.body);
  // 检验邀请码是否正确
  if (req.body.invite != 'bunfly') {
    return res.send({registerCode:0,msg:'邀请码错误，请重试！'});
  }
  var user = new User({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email
  });
  user.save(function (err,docs) {
    if (err) return res.send({registerCode:0,msg:'注册失败，请重试！',error:err});
    console.log('数据插入成功！' + docs);
    res.send({registerCode:1,msg:'注册成功'});
  });
});

// 文章发表
router.post('/api/publish',function(req,res) {
  console.log(req.body);
  
  // 处理多个开发者
  var authors = [];
  var authorEn = req.body.authorEn,
    authorZh = req.body.authorZh;
  for(var i = 0;i < authorEn.length; i++) { // 必须保证 authorEn 与 authorZh 一一对应
    authors.push({
      en:authorEn[i],
      zh:authorZh[i]
    });
  }

  // 处理个人开发还是团队开发图片路径
  if (authors.length > 1) {
    var exeImgSrc = `projectImg/${req.body.projectNameEn}-l.jpg`;
    var allImgSrc = `projectImg/${req.body.projectNameEn}-s.jpg`;
  } else if (authors.length === 1) {
    var exeImgSrc = `projectImg/${authors[0].en}/${authors[0].en}-l.jpg`;
    var allImgSrc = `projectImg/${authors[0].en}/${authors[0].en}-s.jpg`;
  }

  var project = new Project({
    project:{
      en:req.body.projectNameEn,
      zh:req.body.projectNameZh
    },
    author:authors,
    branch:req.body.branch,
    classes:req.body.classes,
    label:req.body.label,
    excellent:req.body.excellent,
    description:req.body.description,
    exeImg: exeImgSrc,
    allImg: allImgSrc
  });
  project.save(function (err,docs) {
    if (err) return res.send({publishCode:0,msg:'提交失败，请重试！',error:err});
    console.log('项目提交成功！' + docs);
    res.send({publishCode:1,msg:'项目提交成功！'});
  });
});

module.exports = router;