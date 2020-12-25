const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === "MarkdownRemark" &&
    /(?<!\/pages\/about\/about).md/.test(node.fileAbsolutePath)
  ) {
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
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(?<!/pages/about/about).md/" } }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `posts/${node.fields.slug}`,
      component: path.resolve("src/templates/post.jsx"),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
