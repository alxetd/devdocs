module.exports = {
  title: 'My Documentation',
  description: 'Document information for site',
  themeConfig: {
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
    ]
  }
}
