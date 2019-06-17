// pages/baiduMap/baiduMap.js

var bmap = require('../../utils/bmap-wx.js')

var wxMarkerData = [];
Page({
  data: {
    height:"",
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {}
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight
        })
      }
    }), wx.getLocation({
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [
            {
              latitude: 30.5478850048, longitude: 104.0552473068, callout: { 'display': 'ALWAYS', 'fontSize': '30rpx', 'content': '省分行', 'padding': '8rpx', 'boxShadow': '0 0 5rpx #333', 'borderRadius': '4rpx' }
            },
            { latitude: 30.6471796532, longitude: 103.9954662323, callout: { 'display': 'ALWAYS', 'fontSize': '30rpx', 'content': '金楠天街', 'padding': '8rpx', 'boxShadow': '0 0 5rpx #333', 'borderRadius': '4rpx' } }
          ]
        })
      },
    })
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'gY0lpsbNTTNHiLDkSb3ZTT9LrFkmwUxY'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // 发起POI检索请求 
    BMap.search({
      "query": '公司',
      fail: fail,
      success: success,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../img/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../../img/marker_red.png'
    });
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_yellow.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_red.png";
      }
      markers[j](data[j]);
    }
    that.setData({
      markers: markers
    });
  }
})
