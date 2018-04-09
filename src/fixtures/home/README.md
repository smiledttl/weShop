请求地址  
HTTP GET '/api/home'

返回对象
 {
    announcement:'今日上架图书全部8折优惠',
    sliders:[
      {id:1,img_url:slider_images("./slider1.jpg")},
      {id:2,img_url:slider_images("./slider2.jpg")},
      {id:3,img_url:slider_images("./slider3.jpg")},
      {id:4,img_url:slider_images("./slider4.jpg")}
    ],
    latestupdated:[
      {
        id:1,
        title: 'vue2 实践揭秘',
        authors: ['梁睿坤','苏炳'],
        img_url:cover_images("./1.svg")
      },
      {
        id:2,
        title: 'vue2 实践揭秘2',
        authors: ['梁睿坤','苏炳'],
        img_url:cover_images("./2.svg")
      },
      {
        "id": 3,
        "title": "淘宝天猫电商运营与数据化选品完全手册",
        "authors": [
          "老夏"
        ],
        "img_url": cover_images("./3.svg")
      }
    ],
    recommended:[
      {
        "id": 1,
        "title": "揭开数据真相：从小白到数据分析达人",
        "authors": [
          "Edward Zaccaro, Daniel Zaccaro"
        ],
        "img_url": cover_images("./1.svg")
      },
      {
        "id": 2,
        "title": "Android 高级进阶",
        "authors": [
          "顾浩鑫"
        ],
        "img_url": cover_images("./2.svg")
      },
      {
        "id": 3,
        "title": "淘宝天猫电商运营与数据化选品完全手册",
        "authors": [
          "老夏"
        ],
        "img_url": cover_images("./3.svg")
      },
      {
        "id": 4,
        "title": "大数据架构详解：从数据获取到深度学习",
        "authors": [
          "朱洁",
          "罗华霖"
        ],
        "img_url": cover_images("./4.svg")
      },
    ]
  }
}