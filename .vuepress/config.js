module.exports = {
  title: 'My Documentation',
  description: 'Document information for site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'VueJs', link: '/vuejs/' },
      { text: 'Laravel', link: '/laravel/' },
      { text: 'Drupal', link: '/drupal/' }
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
