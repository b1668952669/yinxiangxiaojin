var app = getApp()
var https = require( '../../../utils/util' )
var url = 'https://v.juhe.cn/joke/img/text.php?'
Page( {
  onUnload:function(){
    wx.reLaunch({
      url : '/pages/index/index'
    });
  },
  data: {
    page: 1,
    loadingHide: false,
    hideFooter: true,
    picList: []
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //请求笑话列表
    https.request( url, this.data.page, function( dataJson ) {
      that.setData( {
        picList: that.data.picList.concat( dataJson.result.data ),
        loadingHide: true
      })
    }, function( reason ) {
      console.log( reason )
      that.setData( {
        loadingHide: true
      })
    })
  },

  /**
   * 滑动到底部加载更多
   */
  loadMore() {
    //请求笑话列表
    var that = this
    //显示footer
    this.setData( {
      hideFooter: !this.data.hideFooter
    })
    https.request( url, ++this.data.page, function( dataJson ) {
      that.setData( {
        picList: that.data.picList.concat( dataJson.result.data ),
        hideFooter: !that.data.hideFooter
      })
    }, function( reason ) {
      console.log( reason )
      that.setData( {
        hideFooter: !that.data.hideFooter
      })
    })
  },

  preview( e ) {
    console.log( e.target.dataset.url )
    var urls = []
    urls.push( e.target.dataset.url )
    wx.previewImage( {
      urls: urls // 需要预览的图片s链接列表
    })
  },
  onShareAppMessage: function(res) {
    return {
      title: '长得帅的看段子都用 印象小斤',
      path: '/pages/index/index?goods_id=' + wx.getStorageSync("goods_id"),
      imageUrl: '../../images/fx.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }

})