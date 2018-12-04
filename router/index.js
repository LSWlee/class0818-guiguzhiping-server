/**
 * Created by lsw on 2018/12/3 0003.
 */
const express = require('express');
const router = new express.Router();
const Users = require('../model');
//使用大三方中间件解析请求体参数
router.use(express.urlencoded({extends:true}))
router.get('/',(req,res) => {
  res.send('这是服务器返回的响应1111');
} );
//指定发送post请求
router.post('/register',async (req,res) => {
  //获取请求参数
  const {username,password,type} = req.body;
  try {
    //去数据库中查找数据
    const user = await Users.findOne({username});
    if(user){
      res.json({
        code:1,
        msg:'该用户以存在'
      })
    }else{
      //保存到数据库中
      const user = await Users.create({username,password,type});
      res.json({
        code:0,
        data:{
          username:user.username,
          type:user.type,
          _id:user._id
        }
      })
    }
  } catch (e) {
    console.log(e)
    res.json({
      cond:1,
      msg:'网络不稳定请重试'
    })
  }
});

module.exports = router;