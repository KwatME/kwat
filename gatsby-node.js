const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === "MarkdownRemark" &&
    /(?<=\/posts\/.+\/index).md/.test(node.fileAbsolutePath)
  ) {
    createNodeField({
      node,
      name: "slug",
      value: path.join(
        "/",
        "posts",
        path.basename(path.dirname(node.fileAbsolutePath)),
        "/"
      ),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(?<=/posts/.+/index).md/" } }
        sort: { fields: [frontmatter___time], order: DESC }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  const {
    data: {
      allMarkdownRemark: { nodes },
    },
  } = result;

  const nNode = nodes.length;

  const postTemplate = path.resolve("src/templates/post.jsx");

  nodes.forEach((post, index) => {
    const previousPostId = index === 0 ? null : nodes[index - 1].id;

    const nextPostId = index === nNode - 1 ? null : nodes[index + 1].id;

    createPage({
      path: post.fields.slug,
      component: postTemplate,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    });
  });

  const postsTagTemplate = path.resolve("src/templates/poststag.jsx");

  const tagSet = new Set();

  let nodeIndex;
  for (nodeIndex = 0; nodeIndex < nNode; nodeIndex++) {
    const {
      frontmatter: { tags },
    } = nodes[nodeIndex];

    const nTag = tags.length;

    let tagIndex;
    for (tagIndex = 0; tagIndex < nTag; tagIndex++) {
      tagSet.add(tags[tagIndex]);
    }
  }

  tagSet.forEach((tag) => {
    createPage({
      path: `/tags/${tag}`,
      component: postsTagTemplate,
      context: {
        tagRegexString: `/${tag}/`,
      },
    });
  });
};
