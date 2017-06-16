const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/my_db');

// 实例化连接对象
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('数据库连接失败：' + error);
});

db.once('open', () => {
  console.log('MongoDB连接成功！');
});

db.on('disconnected', () => {    
    console.log('数据库连接断开');  
});