/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Malte Janßen",
    description: "Website und Portfolio von Malte Janßen, Webentwickler und Student.",
    url: "https://malts.me",
    image: "/sharing.png",
  },
  flags: {
    'DEV_SSR': false
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: './static',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: './content/projects',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: './content/posts',
      },
    },
    {
      "resolve": `gatsby-transformer-remark`,
      "options": {
        "excerpt_separator": `!--`,
        "plugins": [
          {
            "resolve": `gatsby-remark-images`,
            "options": {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              "maxWidth": 720,
            },
          },
        ],
      }
    },
    "gatsby-source-instance-name-for-remark",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Malte`,
        short_name: `Malte`,
        orientation: `portrait`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        lang:`de-DE`,
        display: `standalone`,
        icon: `static/favicon.png`,
        cache_busting_mode: 'none',
      },
    },
  ],
}