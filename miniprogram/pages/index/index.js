//index.js
const db=wx.cloud.database({
  env:"mapdemo-0h8tb"
});

Page({
  data: {
    username:"",
  },

  submit:function(){
    db.collection("user").where({
      "username":"admin"
    }).get().then(res =>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },

})
