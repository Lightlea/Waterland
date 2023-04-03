// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: '随笔',link: '/one/',},
  { text: '散文',link: '/two/',},
  { text: '杂物间', link: '/three/' },
  { text: '关于洼地野人', link: '/message-board/' },
  { text: '豆瓣首页', link: 'https://www.douban.com/people/passerby535/?_i=9993186uNcTtu4'},
]
// config.js
module.exports = {
  themeConfig: {
      nav:  [
          // 没有二级导航时可以直接添加
         {text: '1.《空洞骑士》：神陨落的世界，虚无与荒诞的英雄', link: '/pages/f07695/'},
         {text: '2.旧文整理（一）', link: '/pages/24768e/'},
         {text: '3.随笔：走神', link: '/pages/cc7034/'},
         {text: '4.一篇关于陀思妥耶夫斯基的课堂发言稿', link: '/pages/001'},
     ]
  }
}
