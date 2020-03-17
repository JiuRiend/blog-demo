// base：站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束。这里设置为 /blog-demo/ ，我们再次在本地运行项目，访问路径就需要变更为 http://localhost:8080/blog-demo/
// title：网站的标题
// description：网站的描述

module.exports = {
    base: '/blog-demo/',
    title: 'blog-demo',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
      repo: 'https://github.com/JiuRiend/blog-demo',
      // 自定义仓库链接文字。
      repoLabel: 'GitHub',
        nav: [
            { text: 'Vue', link: '/Vue/vue.md' },
            { text: 'React', link: '/React/react.md' }
        ],
        sidebar: {
            '/Vue/':[
                'vue',
                'vuex'
            ],
            '/React/':[
                'react'
            ]
        }
        
  }
}

