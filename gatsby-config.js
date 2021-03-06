const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`
});

module.exports = {
  siteMetadata: {
    title: 'Nanophonics | DSP + AI + mobile Apps',
    googleVerification: 'abcdefz',
    disqus: 'gatsby-typescript'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorJson'
  },
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`
      }
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-108097862-8',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        cookieDomain: 'nanophonics.com'
      }
    },

    // Parse all images files
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    // Parse JSON files
    'gatsby-transformer-json',

    // Add typescript stack into webpack
    'gatsby-plugin-typescript',

    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby website',
        short_name: 'Gatsby website',
        start_url: '/',
        background_color: '#f7f7f7',
        theme_color: '#191919',
        display: 'minimal-ui',
        icon: 'static/apple-touch-icon.png' // This path is relative to the root of the site.
      }
    },
    /* eslint-enable camelcase */

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    // 'gatsby-plugin-offline'
    'gatsby-plugin-remove-serviceworker'
  ]
};
