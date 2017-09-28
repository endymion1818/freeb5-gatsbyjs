module.exports = {
  siteMetadata: {
    pathPrefix: '/',
    title: `#FreeBabylon5`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
  ],
}
