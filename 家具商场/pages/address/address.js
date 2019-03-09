// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adrlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  address:function(){
    var uid=1;
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:3000/address',
      data:{
        uid
      },
      success:(res)=>{
        var a=res.data;
        for(var i of a){
          i.fn = i.name.slice(0, 1);
        }
        that.setData({
          adrlist:a
        });
      }
    })
  },
  add:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  update:function(e){
    var detail = JSON.stringify(e.target.dataset.del) ;
    wx.navigateTo({
      url: '/pages/upd/upd?detail='+detail,
    })
  },
  onLoad: function (options) {
    this.address();
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