module.exports = {
  siteMetadata: {
    title: `BrueBar`,
    siteUrl: `http://www.bruebar.net`,
    description: `Sandra & Wayne's Site`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Modak', 'Pacifico']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bruebar-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "bruebar.net",
        acl: null
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
