// pages/buynow/buynow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    sum:"",
    type:""
  },
  buy:function(){
    console.log(this.data.type);
    var str="";
    if(this.data.type=='s'){
      for (var i of this.data.list) {
        str += i.iid + ','
      }
      str = str.slice(0, -1);
    }
    console.log(str);
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:3000/order',
      data:{
        list:this.data.list
      },
      success:(res)=>{
        if (that.data.type == 's'){
          wx.request({
            url: 'http://127.0.0.1:3000/delmore',
            data: {
              uid: 1,
              str
            },
            success: (res) => {
              wx.navigateTo({
                url: '../orderlist/orderlist',
              })
            }
          })
        }else{
          wx.navigateTo({
            url: '../orderlist/orderlist',
          })
        }
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a=[]; 
    var s=0;
    if(options.h=='d'){
      a.push(JSON.parse(options.detaillist));
    }else if(options.h=='s'){
      a = JSON.parse(options.detaillist);
    }
    for(var i of a){
      var st = i.price * i.count;
      i.subtotal=st.toFixed(2);
    }
    this.setData({
      list:a
    });
    for(var i of this.data.list){
      
      s+=parseInt(i.subtotal);
    }
    this.setData({
      sum:s.toFixed(2),
      type:options.h
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