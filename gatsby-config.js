require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `gatsby-pina`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    // {
    //   resolve: 'gatsby-source-prismic',
    //   options: {
    //     repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    //     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    //     schemas: {},
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
}
