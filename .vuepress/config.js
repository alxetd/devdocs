module.exports = {
  title: 'My Documentation',
  description: 'Document information for site',
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4' ],
    lineNumbers: true,
    toc: { includeLevel: [1, 2] },
  },
  plugins: [
    // you can use this plugin multiple times
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // this is how VuePress Default Theme use this plugin
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
  ],
  themeConfig: {
    activeHeaderLinks: true,
    displayAllHeaders: true,
    repo: 'alxetd/devdocs',
    // default value is true. Allows to hide next page links on all pages
    nextLinks: true,
    // default value is true. Allows to hide prev page links on all pages
    prevLinks: true,
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Frontend',
        ariaLabel: 'Frontend',
        items: [
          { text: 'Angular', link: '/angular/' },
          { text: 'VueJs', link: '/vuejs/' },
          { text: 'React', link: '/react/' },
          { text: 'Javascript', link: '/javascript/' },
          { text: 'Css', link: '/css/' },
          { text: 'Html', link: '/html/' },
          { text: 'VuePress', link: '/vuepress/' },
        ]
      },
      {
        text: 'Backend',
        ariaLabel: 'Backend',
        items: [
          { text: 'Php', link: '/php/' },
          { text: 'MySql', link: '/mysql/'},
          { text: 'Laravel', link: '/laravel/' },
          { text: 'Drupal', link: '/drupal/' },
          { text: 'Docker', link: '/docker/' },
        ]
      },
      { text: 'Design Patterns', link: '/design-patterns/' },
      { text: 'Interview', link: '/interview/' }
    ],
    sidebar: {
      '/angular/': [
        ''
      ],
      '/css/': [
        ''
      ],
      '/design-patterns/': [
        ''
      ],
      '/docker/': [
        ''
      ],
      '/drupal/': [
        ''
      ],
      '/html/': [
        ''
      ],
      '/interview/': [
        '',
        'api',
        'architecture',
        'css',
        'design-patterns',
        'general',
        'html',
        'javascript',
        'jokes',
        'linux',
        'management',
        'mysql',
        'nodejs',
        'oop',
        'php',
      ],
      '/javascript/': [
        '',
      ],
      '/laravel/': [
        ''
      ],
      '/mysql/': [
        ''
      ],
      '/php/': [
        ''
      ],
      '/react/': [
        ''
      ],
      '/vuejs/': [
        '',
      ],
      '/vuepress/': [
        ''
      ],
      // fallback
      '/': [
        '',
        '/php/'
      ]
    }
  }
}
