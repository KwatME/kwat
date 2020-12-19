const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({ node, name: "slug", value: slug })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`src/components/post.js`)

  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `posts/${edge.node.fields.slug}`,

      component: postTemplate,

      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
