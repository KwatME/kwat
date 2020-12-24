const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "slug",
      value: path.basename(node.fileAbsolutePath, ".md"),
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
  `);

  result.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: `posts/${edge.node.fields.slug}`,
      component: path.resolve("src/templates/post.jsx"),
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
