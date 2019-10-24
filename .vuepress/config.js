module.exports = {
  title: 'My Documentation',
  description: 'Document information for site',
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
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
          { text: 'Laravel', link: '/laravel/' },
          { text: 'Drupal', link: '/drupal/' },
        ]
      },
      { text: 'Design Patterns', link: '/design-patterns/' },
      { text: 'Interview questions', link: '/interview-questions/' }
    ],
    sidebar: {
      '/css/': [
        ''
      ],
      '/design-patterns/': [
        ''
      ],
      '/drupal/': [
        ''
      ],
      '/html/': [
        ''
      ],
      '/interview-questions/': [
        ''
      ],
      '/javascript/': [
        '',
      ],
      '/laravel/': [
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
