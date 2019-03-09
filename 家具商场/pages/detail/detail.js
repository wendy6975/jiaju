// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailimg:[],
    detaillist:[],
    lid:"",
    count:1,
    isdisabled:false
  },
  detail:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/detailimg?lid='+this.data.lid,
      success:(res)=>{
        this.setData({
          detailimg:res.data
        });
      }
    })
  },
  details:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/detaillist?lid=' + this.data.lid,
      success: (res) => {
        var n=res.data[0].shelf_time;
        var m=this.time(n);
        res.data[0].shelf_time=m;
        res.data[0].price = res.data[0].price.toFixed(2);
        this.setData({
          detaillist: res.data[0]
        });
        
      }
    })
  },
  time:function(n){
    var date=new Date(n);
    var Y=date.getFullYear()+'-';
    
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)+"-";
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    return (Y + M + D);
  },
  changeCount:function(e){
    var i = parseInt(e.target.dataset.i);
    this.setData({
      count:this.data.count+i
    });
    if(this.data.count<2){
      
      this.setData({
        count: 1,
        isdisabled:true
      });
    }else{
      this.setData({
        isdisabled:false
      });
    }
  },
  getinput:function(e){
    this.setData({
      count: parseInt(e.detail.value)
    });
  },
  addshopcar:function(){
    var uid=1;
    var lid = this.data.detaillist.lid;
    var count = this.data.count;
    var title = this.data.detaillist.title;
    var price = this.data.detaillist.price;
    var pic = this.data.detaillist.img;
    wx.request({
      url: 'http://127.0.0.1:3000/addshopcar',
      data:{
        uid,
        lid,
        count,
        title,
        price,
        pic,
        isdelete:0
      },
      success:(res)=>{
        wx.showToast({
          title: '添加成功'
        })
      }
    })
  },
  buynow:function(){
    var m=this.data.detaillist;
    m.count=this.data.count;
    var a = JSON.stringify(m);
   
    wx.navigateTo({
      url: '../buynow/buynow?detaillist=' +a+'&&h=d',
    })
  },
  toshopcar:function(){
    
    wx.reLaunch({
      url: '../shopcar/shopcar'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lid:options.lid
    });
    this.detail();
    this.details();
    // this.time();
    
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