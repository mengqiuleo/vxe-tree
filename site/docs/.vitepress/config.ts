import fs from 'fs';
import { mdPlugin } from "./config/plugins";
const read = (relative) => fs.readFileSync(require.resolve(relative), 'utf-8');
// .vitepress/config.js
export default {
  // site-level options
  title: 'vxeTree',
  description: 'A powerful tree component for Vue3',
  lang: 'cn-ZH',
  base: process.env.NODE_ENV === "production" ? "/vxe-tree/" : "/",
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
        link: 'https://www.npmjs.com/package/vxe-tree'
      },
    ],
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
          text: "开发",
          items: [
            { text: "开发指南", link: "/guide/guide" },
            { text: "开发常见问题", link: "/guide/faq" },
          ],
        },
      ],
      "/others": [
        { text: "TODO", link: "/others/TODO" },
        { text: "LICENSE", link: "/others/license" },
        { text: "CHANGELOG", link: "/others/changelog" },
      ],
      "/components/": [
        {
          text: "基础配置",
          items: [
            { text: "基本用法", link: "/components/basic" },
            { text: "节点懒加载", link: "/components/lazyLoad" },
            { text: "可勾选", link: "/components/check" },
            { text: "默认状态", link: "/components/defaultState" },
            { text: "禁用状态", link: "/components/disabledState" },
            { text: "连接线", link: "/components/showLine" },
            { text: "手风琴模式", link: "/components/accordion" },
            { text: "复选框位置", link: "/components/checkBoxPos" },
            { text: "默认展开所有子节点", link: "/components/openAll" },
          ],
        },
        {
          text: "高级配置",
          items: [
            { text: "自定义图标", link: "/components/customIcon" },
            { text: "节点合并", link: "/components/mergeNode" },
            { text: "右键菜单", link: "/components/contextMenu" },
            { text: "操作按钮", link: "/components/operate" },
            { text: "搜索过滤", link: "/components/search" },
            { text: "虚拟滚动", link: "/components/virtualScroll" },
            { text: "可拖拽树", link: "/components/drag" },
          ],
        },
        {
          text: "参数 & 事件 & 插槽 & 类型",
          items: [
            { text: "Tree 参数", link: "/components/canshu" },
            { text: "Tree 事件", link: "/components/shijian" },
            { text: "Tree 插槽", link: "/components/chacao" },
            { text: "TreeNode 参数", link: "/components/treeNode" },
            { text: "Tree 类型定义", link: "/components/leixing" },
            { text: "treeFactory", link: "/components/treeFactory" },
          ],
        },
        {
          text: "主题配置",
          items: [
            { text: "自定义配色", link: "/components/color" },
          ],
        },
      ]
    },
  },
  markdown: {
    // dark-plus vscode
    // css-variables custom
    theme: "css-variables",
    config: (md) => mdPlugin(md),
  },
  
}