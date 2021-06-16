// index.ts
// 获取应用实例
//const app = getApp<IAppOption>()

Page({
  data: {
    helloStr:"Hello world!",
    hiStr:""
  },
  // 事件处理函数
  clickBtn() {
    console.log("clickBtn onclick")
    this.setData({hiStr:"老表，吃了没？"})
  },
  onLoad() {
    
  },
})
