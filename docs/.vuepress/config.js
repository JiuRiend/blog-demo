// base：站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束。这里设置为 /blog-demo/ ，我们再次在本地运行项目，访问路径就需要变更为 http://localhost:8080/blog-demo/
// title：网站的标题
// description：网站的描述

module.exports = {
    base: '/blog-demo/',
    title: 'blog-demo',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
      repo: 'https://github.com/xxxxxxx/blog-demo',
      // 自定义仓库链接文字。
      repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
        ]
  }
}

