const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://code.sapalo.dev',
    gaTrackingId: '291001111',
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://code.sapalo.dev',
    title:
      "Darren's Coding",
    githubUrl: 'https://github.com/darrensapalo/code',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/concepts',
      '/strategies',
      '/best-practices',
      '/tools',
      '/personal-opinions',
    ],
    collapsedNav: [
      '/concepts', 
      '/strategies',
      '/best-practices',
      '/tools',
      '/personal-opinions',
    ],
    links: [
      { text: 'Personal blog', link: 'https://sapalo.dev' },
      { text: 'Twitter', link: 'https://twitter.com/darrensapalo' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/%F0%9F%92%BB-darren-karl-sapalo-3a384495' }
    ],
    frontline: false,
    ignoreIndex: false,
    title:
      "Darren's Coding",
  },
  siteMetadata: {
    title: 'Coding - Darren',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/darrensapalo/code/blob/main/content/',
    favicon: 'https://img.icons8.com/fluency/48/000000/stack.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
