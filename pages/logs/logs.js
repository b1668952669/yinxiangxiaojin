//logs.js

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return utils.formatTime(new Date(log))
      })
    })
  }
})
