"use strict";
var app = getApp();
Page({
    data: {
        helloStr: "Hello world!",
        hiStr: ""
    },
    clickBtn: function () {
        console.log("clickBtn onclick");
        this.setData({ hiStr: "老表，吃了没？" });
    },
    onLoad: function () {
        console.log("页面创建时执行 onLoad ......");
    },
    onShow: function () {
        console.log("页面出现在前台时执行 onShow ......");
    },
    onReady: function () {
        console.log("页面首次渲染完毕时执行 onReady ......");
    },
    onHide: function () {
        console.log("页面从前台变为后台时执行 onHide ......");
    },
    onUnLoad: function () {
        console.log("页面销毁时执行 onUnLoad ......");
    },
    onPullDownRefresh: function () {
        console.log("页面触发下拉刷新时执行 onPullDownRefresh ......");
    },
    onReachBottom: function () {
        console.log("页面触底时执行 onReachBottom ......");
    },
    onShareAppMessage: function () {
        console.log("页面被用户分享时执行 onShareAppMessage ......");
    },
    onPageScroll: function () {
        console.log("页面滚动时执行 onPageScroll ......");
    },
    onResize: function () {
        console.log("页面尺寸变化时执行 onResize ......");
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRWhDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBQyxjQUFjO1FBQ3ZCLEtBQUssRUFBQyxFQUFFO0tBQ1Q7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBQ0QsT0FBTztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFDRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRCxpQkFBaUI7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUNELFlBQVk7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7SUFDMUMsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRlc3QudHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWxsb1N0cjpcIkhlbGxvIHdvcmxkIVwiLFxyXG4gICAgaGlTdHI6XCJcIlxyXG4gIH0sXHJcbiAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXHJcbiAgY2xpY2tCdG4oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrQnRuIG9uY2xpY2tcIilcclxuICAgIHRoaXMuc2V0RGF0YSh7aGlTdHI6XCLogIHooajvvIzlkIPkuobmsqHvvJ9cIn0pXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIumhtemdouWIm+W7uuaXtuaJp+ihjCBvbkxvYWQgLi4uLi4uXCIpXHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIumhtemdouWHuueOsOWcqOWJjeWPsOaXtuaJp+ihjCBvblNob3cgLi4uLi4uXCIpXHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgY29uc29sZS5sb2coXCLpobXpnaLpppbmrKHmuLLmn5Plrozmr5Xml7bmiafooYwgb25SZWFkeSAuLi4uLi5cIilcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi6aG16Z2i5LuO5YmN5Y+w5Y+Y5Li65ZCO5Y+w5pe25omn6KGMIG9uSGlkZSAuLi4uLi5cIilcclxuICB9LFxyXG4gIG9uVW5Mb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCLpobXpnaLplIDmr4Hml7bmiafooYwgb25VbkxvYWQgLi4uLi4uXCIpXHJcbiAgfSxcclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi6aG16Z2i6Kem5Y+R5LiL5ouJ5Yi35paw5pe25omn6KGMIG9uUHVsbERvd25SZWZyZXNoIC4uLi4uLlwiKVxyXG4gIH0sXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi6aG16Z2i6Kem5bqV5pe25omn6KGMIG9uUmVhY2hCb3R0b20gLi4uLi4uXCIpXHJcbiAgfSxcclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi6aG16Z2i6KKr55So5oi35YiG5Lqr5pe25omn6KGMIG9uU2hhcmVBcHBNZXNzYWdlIC4uLi4uLlwiKVxyXG4gIH0sXHJcbiAgb25QYWdlU2Nyb2xsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCLpobXpnaLmu5rliqjml7bmiafooYwgb25QYWdlU2Nyb2xsIC4uLi4uLlwiKVxyXG4gIH0sXHJcbiAgb25SZXNpemUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIumhtemdouWwuuWvuOWPmOWMluaXtuaJp+ihjCBvblJlc2l6ZSAuLi4uLi5cIilcclxuICB9LFxyXG59KVxyXG4iXX0=