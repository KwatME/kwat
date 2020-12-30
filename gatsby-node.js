const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === "MarkdownRemark" &&
    /(?<!\/pages\/about\/about).md/.test(node.fileAbsolutePath)
  ) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: "slug",
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(?<!/pages/about/about).md/" } }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            topics
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("There was an error loading posts.", result.errors);

    return;
  }

  const {
    data: {
      allMarkdownRemark: { nodes },
    },
  } = result;

  const nNode = nodes.length;

  if (0 < nNode) {
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
  }

  const postsTopicTemplate = path.resolve("src/templates/poststopic.jsx");

  const topicSet = new Set();

  let nodeIndex;
  for (nodeIndex = 0; nodeIndex < nNode; nodeIndex++) {
    const {
      frontmatter: { topics },
    } = nodes[nodeIndex];

    let topicIndex;
    for (topicIndex = 0; topicIndex < nNode; topicIndex++) {
      topicSet.add(topics[topicIndex]);
    }
  }

  topicSet.forEach((topic) => {
    createPage({
      path: `topics/${topic}`,
      component: postsTopicTemplate,
      context: {
        topicRegexString: `/${topic}/`,
      },
    });
  });
};
