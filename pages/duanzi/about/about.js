
Page( {
  onUnload:function(){
    wx.reLaunch({
      url : '/pages/index/index'
    });
  },
  onShareAppMessage: function(res) {
    return {
      title: '知道嘛，长得帅的都会被人安利 印象小斤',
      path: '/pages/index/index?goods_id=' + wx.getStorageSync("goods_id"),
      imageUrl: '../../images/fx.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }

})