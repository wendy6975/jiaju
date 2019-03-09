// pages/orderlist/orderlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    uid:1,
    pno:0,
    pagesize:5
  },
  orderlist:function(){
    var p=this.data.pno;
    p++;
    wx.request({
      url: 'http://127.0.0.1:3000/orderlist',
      data:{
        uid:this.data.uid,
        pno:p,
        pagesize:this.data.pagesize,
      },
      success:(res)=>{
        console.log(res);
        this.setData({
          pno:p,
          list:res.data
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.orderlist();
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
    this.setData({
      pno:0
    });
    this.orderlist();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.orderlist();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})