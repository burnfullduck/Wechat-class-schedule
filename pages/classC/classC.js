// pages/classC/classC.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj":0 , "sksj":0 , "skcd":0 , "kcxx": "" },
    ],
    obj:{
      "xqj":1,
      "sksj":1,
      "skcd":2,
      "kcxx":"",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

    wx.cloud.callFunction({
      name:"getClassRoom",
      data:{
        name:getApp().globalData.className
      }
    })
    .then(res=>{
      console.log(res.result)
      this.setData({
        dataList:res.result.data[0].courses
      })
      console.log(res.result.data[0].courses)
      var dataList = res.result.data[0].courses
      this.setData({
        'wlist[0].xqj': parseInt(dataList[0].substring(0,1)),
        'wlist[0].sksj':parseInt(dataList[0].substring(2,3)),
        'wlist[0].skcd':parseInt(dataList[0].substring(4,5)),
        'wlist[0].kcxx':dataList[0].substring(6),
      }
      )
      
      var mlist = this.data.wlist
      for(let i = 1;i<dataList.length;i++){
        const obj1 = this.data.obj
        obj1.xqj = parseInt(dataList[i].substring(0,1))
        obj1.sksj = parseInt(dataList[i].substring(2,3))
        obj1.skcd = parseInt(dataList[i].substring(4,5))
        obj1.kcxx = dataList[i].substring(6)
        mlist.push(JSON.parse(JSON.stringify(obj1)))
      }
      this.setData({
        wlist:mlist
      })
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})