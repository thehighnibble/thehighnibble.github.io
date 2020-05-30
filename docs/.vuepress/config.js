module.exports = {
    title: 'The High Nibble',
    ga: 'UA-138596150-1',
    evergreen: true,
    themeConfig: {
      repo: 'thehighnibble/firmware',
      
      docsRepo: 'thehighnibble/thehighnibble.github.io',
      docsDir: 'docs',
      docsBranch: 'vuepress',
      editLinks: true,
      editLinkText: 'Find a mistake? Got a suggestion? Edit this page.', 

      // logo: '/THN_Logo.png',
      lastUpdated: 'Last Updated',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'IMSAI 8080', link: '/imsai8080/' },
        { text: 'VT132', link: '/vt132/' },
        { text: 'Forum', link: 'http://bit.ly/IMSAI8080esp' }
      ]
      // ,
      // sidebarDepth: 2,
      // sidebar: [
      //   '/imsai8080/',
      //   '/imsai8080/bom/'
      // ]
    }
  }
