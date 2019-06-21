// pages/tercentMap/tercentMap.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 'auto',  //屏幕高度
    markers: [],  //地图参数：
    latitude: "", //纬度 
    longitude: "",  //经度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //保证wx.getSystemInfo的回调函数中能够使用this
    var that = this
    //调用wx.getSystemInfo接口，然后动态绑定组件高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight
        })
      }
    }),
    wx.getLocation({
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [
            {
              latitude: 30.5478850048, longitude: 104.0552473068, callout: {'display': 'ALWAYS', 'fontSize': '30rpx', 'content': '省分行','padding': '8rpx', 'boxShadow': '0 0 5rpx #333', 'borderRadius': '4rpx'}},
            { latitude: 30.6471796532, longitude: 103.9954662323, callout: { 'display': 'ALWAYS', 'fontSize': '30rpx', 'content': '金楠天街', 'padding': '8rpx', 'boxShadow': '0 0 5rpx #333', 'borderRadius': '4rpx' } }
          ]
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})