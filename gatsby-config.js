const { createProxyMiddleware } = require("http-proxy-middleware") //v1.x.x

module.exports = {
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/lambda/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   )
  // },
  siteMetadata: {
    title: `Derek In The Kitchen`,
    description: `Welcome To Derek In The Kitchen.`,
    author: `@ericsmith`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // {
    //   resolve: "@horacioh/gatsby-theme-instagram",
    //   options: {
    //     type: `account`, // optional. `account` is the default `type` value
    //     username: "derekinthekitchen",
    //   },
    // },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `44809945660`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-instagram-all`,
    //   options: {
    //     access_token:
    //       "IGQVJXdDNOUGRvdURPYVYzakN2VUc4ZAzRzSUtrSlVDTDkyVDBGRDRGM0gyUGdDZA3Ixa0xjY3A2aGRmNHhXV2ZAsQ2UwR2NxbWFSZAUlHRGZATS3hFaGExMW5IckN6ZAWVKVGs3X2dhUHVTTldoQm5Cd3BNOQZDZD",
    //   },
    // },

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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `b0ci9s83`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,

        short_name: `Derek In The Kitchen`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: "standalone",
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
