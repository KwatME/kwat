module.exports = {
  siteMetadata: {
    title: "Kwat",
    description: "Website of Kwat Medetgul-Ernar",
    author: "Kwat Medetgul-Ernar",
    authorStatus: "Binge watching One Piece, the greatest anime of all time",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "src",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#9017e6",
        theme_color: "#20d9ba",
        display: "minimal-ui",
        icon: "src/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
  pathPrefix: "/gatsby-gh-pages-tutorial"
};
