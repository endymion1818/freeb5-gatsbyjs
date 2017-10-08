module.exports = {
  siteMetadata: {
    pathPrefix: '/',
    title: `#FreeBabylon5.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-45214077-1',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
  ],
}
