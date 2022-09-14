// pages/login/login.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'123',
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

  },


  loginToIndex(){//登录按钮点后所做事情
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  
  setUserName(e){
    
    getApp().globalData.userName = e.detail.value
  },

  setPassword(e){
    
    getApp().globalData.password = e.detail.value
  }
})