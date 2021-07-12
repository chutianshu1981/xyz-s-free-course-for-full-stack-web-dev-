// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    console.log("app onLauch");
    wx.login({
      success(_res){
        if(_res.code){
          wx.request({
            url:'http://127.0.0.1:8080/onLogin',
            method:'POST',
            data:{
              code: _res.code
            },
            success(_response){
              console.log("后端登录接口调用成功")
            }
          })
        }
        else{
          console.log('登录失败！'+_res.errMsg)
        }
      }
    })
  },
})