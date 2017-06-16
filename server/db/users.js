const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { //  账户
    type: String,
    required: true
  },
  password: { // 密码
    type: String,
    required: true
  },
  email:{ // 邮箱
    type:String,
    required: true
  },
  count:{ // 登陆次数
    type:Number,
    default:0
  },
  time: { // 注册时间
    type:Date, 
    default:new Date()
  },
  lastTime: { // 最后一次登陆时间
    type:Date, 
    default:new Date()
  }
});

const User = mongoose.model('User',userSchema);

module.exports = User;