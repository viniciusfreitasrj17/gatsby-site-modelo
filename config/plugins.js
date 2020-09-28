module.exports = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
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
      icon: `src/images/gatsby-icon.png`, // 512 * 512
    },
  },
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: `tomato`,
      showSpinner: false,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      head: false,
      anonymize: true,
      respectDNT: true,
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      pageTransitionDelay: 0,
      optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      defer: false,
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "example.com",
    },
  },
  `gatsby-plugin-offline`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]