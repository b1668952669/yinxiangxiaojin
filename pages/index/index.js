//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎来到印象小斤',
    userInfo: {},
    
  },

  //段子
  bindGoNews:function(){
    wx.switchTab({
      url : '../duanzi/joke/joke?id=5'
    });
  },
  //天气
  bindGoWeather:function(){
    wx.navigateTo({
      url : '../weather/weather?id=6'
    });
  },
  //聊天
  bindGoChat:function(){
    wx.navigateTo({
      url : '../chat/chat?id=7'
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
/**
   * 用户分享自定义
   */
  onShareAppMessage: function(res) {
    return {
      title: '听说长得帅的人都在用 印象小斤',
      path: '/pages/index/index?goods_id=' + wx.getStorageSync("goods_id"),
      imageUrl: '../images/fx.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }

})
