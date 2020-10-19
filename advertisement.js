  Page({
    data: {
      miao: 5,
      time:''
    },
    onLoad: function (options) {
      var that = this;
      this.time = setInterval(function () {
        that.setData({
          miao: that.data.miao-1
        })
        if (that.data.miao == 0){
          clearInterval(this.time);
          wx.switchTab({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
            url: "/pages/index/index"
          })
        }
  
    }, 1000)
    },
  
    cliadv: function(){
          clearInterval(this.time)
          wx.switchTab({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
            url: "/pages/index/index"
          })
    }
  })
  