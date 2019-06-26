//index.js
var md5 = require("../../utils/md5.js");
const db=wx.cloud.database({
  env:"mapdemo-0h8tb"
});

Page({
  data: {
    username:"",
    password:"",
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

    db.collection("user").where({
      "username":usr
    }).get().then(res =>{
      if (pwd == res.data[0].password){
        wx.showLoading({
          title: '登陆成功',
        })
        wx.navigateTo({
          url: '../map/map',
        })
      };
    }).catch(err=>{
      console.log(err);
    })
  },
  


})
