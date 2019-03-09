// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopcar:[],
    uid:1,
    pno:0,
    pagesize:5,
    length:0,
    all:false,
    ced:[],
    sum:0,
    str:""
  },
  shopcarlist:function(){
    var p=this.data.pno;
    p++;
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:3000/shopcarlist',
      data:{
        uid:that.data.uid,
        pno:p,
        pagesize:that.data.pagesize,
      },
      success:(res)=>{
        var a = res.data;
        for(var i of a){
          i.checked = false;
        }
        console.log(5656);
        that.setData({
          shopcar:a,
          pno:p,
          length:res.data.length
        })
        that.cedlist();
      }
    })
    
  },
  del: function (iid,uid) {
    wx.request({
      url: 'http://127.0.0.1:3000/delete',
      data:{
        iid,
        uid
      }
    })
  },
  change:function(e){
    var i = parseInt(e.target.dataset.is);
    var item = e.target.dataset.item;
    if (item.count +i< 1) {
      var that=this;
      wx.showModal({
        title: '温馨提示',
        content: '是否要删除该商品',
        success:function(res) {
          if (res.confirm) {
            that.del(item.iid,item.uid);
            that.shopcarlist();
          }
        }
      })

    }else{
      
      var count = parseInt(item.count) + i;
      wx.request({
        url: 'http://127.0.0.1:3000/updatecount',
        data: {
          iid: item.iid,
          count: count,
          uid:item.uid
        },
        success: (res) => {
          this.shopcarlist();
        }
      })
    }
    
    
  },
  blur:function(e){
    var count= e.detail.value;
    var item=e.target.dataset.item;
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:3000/updatecount',
      data:{
        iid:item.iid,
        uid:item.uid,
        count
      },
      success:(res)=>{
        that.shopcarlist();
      }
    })
  },
  check:function(e){
    var i=e.target.dataset.index;
    var checked=e.target.dataset.checked?false:true;
    var sc = 'shopcar[' + i +'].checked';
    this.setData({
      [sc]:checked
    });
    var n = 0;
    for (var i of this.data.shopcar){
      if(i.checked){
        n++;
      }
    }
    if (n == this.data.shopcar.length) {
      this.setData({
        all: true
      });
    } else {
      this.setData({
        all: false
      });
    }
    this.cedlist();
  },
  checkedall:function(e){
    var eall=e.target.dataset.all?false:true;
    this.setData({
      all:eall
    });
    for(var i in this.data.shopcar){
      var sc = 'shopcar[' + i + '].checked';
      this.setData({
        [sc]:this.data.all
      });
    }
    this.cedlist();
  },
  cedlist:function(){
    var a=[];
    var m=0;
    var s="";
    for(var i of this.data.shopcar){
      if(i.checked){
        a=a.concat(i);
        m+=parseInt(i.price)*parseInt(i.count);
        s+=i.iid+',';
      }
    }
    s=s.slice(0,-1);
    this.setData({
      ced:a,
      sum:m.toFixed(2),
      str:s
    });
    
  },
  delmore:function(){
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:3000/delmore',
      data:{
        uid:1,
        str:that.data.str
      },
      success:(res)=>{
        that.shopcarlist();
      }
    })
  },
  pay:function(){
    var m = this.data.ced;
    for(var i of m){
      i.img=i.pic;
    }
    var a=JSON.stringify(m);
    wx.navigateTo({
      url: '../buynow/buynow?detaillist='+a+'&&h=s',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.shopcarlist();
    this.setData({
      all: false
    });
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
      pno: 0,
      shopcar:[]
    });
    this.shopcarlist();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.shopcarlist();
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})