export default {
  pages: [
    "pages/index/index",
    "pages/goods/index",
    "pages/shopCart/index",
    "pages/mySelf/index",
    "pages/detail/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: '#8a8a8a',
    selectedColor: '#db639b',
    list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: './assets/imgs/home.png',
        selectedIconPath: './assets/imgs/home_focus.png'
      },{
        pagePath: "pages/goods/index",
        text: "商品列表",
        iconPath: './assets/imgs/good.png',
        selectedIconPath: './assets/imgs/good_focus.png'
      },{
        pagePath: "pages/shopCart/index",
        text: "购物车",
        iconPath: './assets/imgs/cart.png',
        selectedIconPath: './assets/imgs/cart_focus.png'
      },{
        pagePath: "pages/mySelf/index",
        text: "个人中心",
        iconPath: './assets/imgs/person.png',
        selectedIconPath: './assets/imgs/person_focus.png'
      }
    ]
  }
};
