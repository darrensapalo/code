const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://code.sapalo.dev',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://code.sapalo.dev/',
    title: "",
    githubUrl: 'https://github.com/darrensapalo/code',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/darrensapalo" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			`,
    links: [{ text: '', link: '' }],
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
      '/languages',
      '/tools', 
      '/libraries', 
      '/paradigms',
      '/strategies', 
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [
      // { text: 'Darren\'s blog', link: 'https://sapalo.dev' },
    ],
    frontline: false,
    ignoreIndex: true,
    title:
      "Darren's Coding Style",
  },
  siteMetadata: {
    title: 'Coding Style | Darren Sapalo',
    description: 'Things I like to use when I build stuff',
    ogImage: null,
    docsLocation: 'https://github.com/darrensapalo/code/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Darren\'s Coding Style',
      short_name: 'Learn Covid',
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
