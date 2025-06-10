import { defineConfig } from 'vitepress';
import AutoNav from 'vite-plugin-vitepress-auto-nav';

export default defineConfig({
  vite: {
    plugins: [AutoNav()],
  },
  description: '个人前端技术文档',
  lang: 'zh-cmn-Hans',
  markdown: {
    image: {
      lazyLoading: true,
    },
    math: true,
  },
  themeConfig: {
    siteTitle: 'zrjhz的技术文档',
    socialLinks: [{ icon: 'github', link: 'https://github.com/zrjhz/docs' }],
    outlineTitle: '目录',
    editLink: {
      pattern: 'https://github.com/zrjhz/docs/edit/master/:path',
      text: '修改本文',
    },
    nav: [
      {
        text: '前端',
        link: '/前端/JavaScript/原型到原型链',
        activeMatch: '/前端/',
      },
      {
        text: '算法',
        link: '/算法/Leetcode/3442.奇偶频次间的最大差值 I',
        activeMatch: '/算法/',
      },
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchTitle: '切换暗色主题',
    lightModeSwitchTitle: '切换亮色主题',
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',
    lastUpdatedText: '更新时间',
    externalLinkIcon: true,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
          },
          modal: {
            displayDetails: '显示详情',
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除',
            footer: {
              closeText: '关闭',
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },
});
