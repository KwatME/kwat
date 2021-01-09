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

  const postsTopicTemplate = path.resolve("src/templates/poststopic.jsx");

  const topicSet = new Set();

  let nodeIndex;
  for (nodeIndex = 0; nodeIndex < nNode; nodeIndex++) {
    const {
      frontmatter: { topics },
    } = nodes[nodeIndex];

    const nTopic = topics.length;

    let topicIndex;
    for (topicIndex = 0; topicIndex < nTopic; topicIndex++) {
      topicSet.add(topics[topicIndex]);
    }
  }

  topicSet.forEach((topic) => {
    createPage({
      path: `/topics/${topic}`,
      component: postsTopicTemplate,
      context: {
        topicRegexString: `/${topic}/`,
      },
    });
  });
};
