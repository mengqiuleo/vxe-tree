import fs from 'fs';
import { mdPlugin } from "./config/plugins";
const read = (relative) => fs.readFileSync(require.resolve(relative), 'utf-8');
// .vitepress/config.js
export default {
  // site-level options
  title: 'vxeTree',
  description: 'A powerful tree component for Vue3',
  lang: 'cn-ZH',
  base: '/vxe-tree/',
  lastUpdated: true,
  themeConfig: {
    // theme-level options
    footer: {
      message: 'Released under the MIT License ❤️',
      copyright: 'Copyright © 2023-present mengqiuleo',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mengqiuleo/vxe-tree'},
      {
        icon: { svg: read('../public/npm.svg')} ,
        link: 'https://www.npmjs.com/settings/axios-plugin/packages'
      },
    ],
    // markdown: {
    //   theme: {
    //     light: 'min-dark',
    //     dark: 'one-dark-pro',
    //   },
    //   lineNumbers: true,
    //   config: (md) => {
    //     md.use(require('markdown-it-task-lists'))
    //   },
    // },
    markdown: {
      // dark-plus vscode
      // css-variables custom
      theme: "css-variables",
      config: (md) => mdPlugin(md),
    },
    // search: {
    //   provider: 'local'
    // },
    algolia: {
      apiKey: "1b9f029b9fb387a0cb9eef2145b29d62",
      indexName: "chai-mayor-gitee",
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: "QO08OIVMGS",
      locales: {
        root: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },
    editLink: {
      pattern:
        'https://github.com/mengqiuleo/vxe-tree'
    },
    nav: [
      { text: '指南', link: '/guide/design' },
      { text: '组件', link: '/components/basic'  },
      { text: '其他', link: '/others/license' }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            { text: "设计", link: "/guide/design" },
            { text: "安装", link: "/guide/installation" },
            { text: "快速上手", link: "/guide/quickstart" },
          ],
        },
        {
          text: "进阶",
          items: [
            { text: "国际化", link: "/guide/i18n" },
            { text: "暗黑模式", link: "/guide/dark" },
          ],
        },
        {
          text: "开发",
          items: [
            { text: "开发指南", link: "/guide/guide" },
            { text: "开发常见问题", link: "/guide/faq" },
          ],
        },
      ],
      "/others": [
        { text: "LICENSE", link: "/others/license" },
        { text: "CHANGELOG", link: "/others/changelog" },
      ]
    }
  },

  
}