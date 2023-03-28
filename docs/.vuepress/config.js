const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "Waterland",
  description: '这是一片洼地。',
  base: '/Waterland/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}

// vssue 评论插件
plugins: [
  [
    "vuepress-plugin-vssue-global",
    {
      platform: "github",
      title: "[Comment]<%- frontmatter.title %>",
      needComments: true,
      // 其他的 Vssue 配置
      autoCreateIssue: true,
      clientId: "b65300b06f7e58b7dd79",
      clientSecret: "0790b7c775317db44f2b7e1c16da6b780cf87deb",
      owner: "Lightlea",
      repo: "Waterland",
    },
  ],
]

