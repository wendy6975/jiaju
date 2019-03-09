// pages/upd/upd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:"",
    address:"",
    aid:""
  },
  nam: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  pho: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  adr: function (e) {
    this.setData({
      address: e.detail.value
    })
  },

  sav: function () {
    if (this.data.name && this.data.phone && this.data.address) {
      wx.request({
        url: 'http://127.0.0.1:3000/updadr',
        data: {
          aid: this.data.aid,
          name: this.data.name,
          phone: this.data.phone,
          address: this.data.address,
        },
        success: (res) => {
          wx.showToast({
            title: '保存成功'
          })
          wx.navigateTo({
            url: '../address/address',
          })
        }
      })
    } else {
      wx.showToast({
        title: '提交内容不完善',
        icon: 'none'
      })
    }
  },
  save: function () {
    var that = this;
    setTimeout(function () {
      that.sav();
    }, 100);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a = JSON.parse(options.detail) ;
    this.setData({
      name:a.name,
      phone:a.phone,
      address:a.address,
      aid:a.aid
    });

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