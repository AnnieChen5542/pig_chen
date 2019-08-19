//index.js
var md5 = require("../../utils/md5.js");
import Toast from 'vant-weapp/toast/toast';
const db=wx.cloud.database({
  env:"mapdemo-0h8tb"
});

Page({
  data: {
    username:"",
    password:""
  },
  OnLoad:function(){

  },

  OnUsernameChange:function(event){
    this.setData({
      username:event.detail
    })
  },
  OnPasswordChange:function(event){
    this.setData({
      password:event.detail
    })
  },

  login_check:function(e){
 
    var usr = this.data.username;
    var pwd = md5.hexMD5(this.data.password);

    if(usr==""){
      wx.showToast({
        title: '用户名不能为空',
        image: '../../images/error.png'
      })
    }else if(pwd==""){
      wx.showToast({
        title: '密码不能为空',
        image: '../../images/error.png'
      })
    }else{
      db.collection("user").where({
        "username":usr
      }).get().then(res =>{
        if(res.data.length==0){
          wx.showToast({
            title: '用户不存在',
            image: '../../images/error.png'
          })
        }else 
        if(pwd == res.data[0].password){
          wx.showToast({
            title: '登录成功',
            icon:'seccess'
          })
          wx.switchTab({
            url: '../map/map'
          })
        }else{
          wx.showToast({
            title: '密码错误',
            image: '../../images/error.png'
          })
        };
      }).catch(err=>{
        console.log(err)
        wx.showToast({
          title: '登录错误',
          image: '../../images/error.png'
        })
      })
    }
  },
  


})
