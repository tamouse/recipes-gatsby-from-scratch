module.exports = {
  siteMetadata: {
    title: "Tamouse's Recipe File",
    description: "My personal collection of recipes, written using gatsbyjs",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.markdown`, `.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/recipes`,
        name: `recipes`,
      },
    },
  ],
}
