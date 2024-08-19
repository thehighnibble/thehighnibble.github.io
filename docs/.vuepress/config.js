module.exports = {
    title: 'The High Nibble',
    // ga: 'UA-138596150-1',
    evergreen: true,
    head: [
      ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-JVDLCQSGXK' }],
      ['script', {}, [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-JVDLCQSGXK');"
      ]],
      ['script', { type: 'module', src: 'https://unpkg.com/esp-web-tools@9.2.0/dist/web/install-button.js?module' }]
    ],
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
        { text: 'Cromemco Z-1', link: '/cromemcoZ1/' },
        { text: 'VT132', link: '/vt132/' },
        { text: 'S-132', link: '/s132/' },
        { text: 'Forum', link: 'https://github.com/orgs/thehighnibble/discussions' }
      ]
      // ,
      // sidebarDepth: 2,
      // sidebar: [
      //   '/imsai8080/',
      //   '/imsai8080/bom/'
      // ]
    }
  }
