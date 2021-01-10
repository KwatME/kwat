module.exports = {
  siteMetadata: {
    title: "Kwat",
    description: "Website of Kwat Medetgul-Ernar",
    hello: "Let's go.",
    author: "Kwat Medetgul-Ernar",
    authorStatus:
      "Every adversity, carries with it, the seed of equivalent advantage.",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "src",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Manifect Name",
        short_name: "Manifect Short Name",
        start_url: "/",
        background_color: "#9017e6",
        theme_color: "#20d9ba",
        display: "minimal-ui",
        icon: "assets/icon.jpeg",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-186228916-1",
        head: true,
      },
    },
  ],
};
