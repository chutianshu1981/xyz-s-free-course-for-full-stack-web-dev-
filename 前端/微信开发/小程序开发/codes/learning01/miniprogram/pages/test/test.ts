// test.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    helloStr:"Hello world!",
    hiStr:""
  },
  myData:{
    // 这里的数据不参与前端展示
  },
  // 事件处理函数
  clickBtn() {
    console.log("clickBtn onclick")
    this.setData({hiStr:"老表，吃了没？"})
  },
  onLoad() {
    console.log("页面创建时执行 onLoad ......")
  },
  onShow() {
    console.log("页面出现在前台时执行 onShow ......")
  },
  onReady() {
    console.log("页面首次渲染完毕时执行 onReady ......")
  },
  onHide() {
    console.log("页面从前台变为后台时执行 onHide ......")
  },
  onUnLoad() {
    console.log("页面销毁时执行 onUnLoad ......")
  },
  onPullDownRefresh() {
    console.log("页面触发下拉刷新时执行 onPullDownRefresh ......")
  },
  onReachBottom() {
    console.log("页面触底时执行 onReachBottom ......")
  },
  onShareAppMessage() {
    console.log("页面被用户分享时执行 onShareAppMessage ......")
  },
  onPageScroll() {
    console.log("页面滚动时执行 onPageScroll ......")
  },
  onResize() {
    console.log("页面尺寸变化时执行 onResize ......")
  },
})
