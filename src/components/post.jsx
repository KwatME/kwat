import React from "react";
import { graphql } from "gatsby";

import Layout from "./layout";
import SEO from "./seo";
import Content from "./content";

export const result = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title

        date
      }

      wordCount {
        words
      }

      timeToRead

      html
    }
  }
`;

function Post(props) {
  const node = props.data.markdownRemark;

  return (
    <Layout>
      <SEO title="Post" />

      <Content>
        <section className="section">
          <div className="columns is-centered">
            <div className="column max-800px">
              <h2 className="title is-2">{node.frontmatter.title}</h2>

              <div className="title subtitle heading is-6">
                <div className="columns is-vcentered">
                  <div className="column">
                    <div className="columns is-vcentered is-mobile">
                      <div className="column">
                        <p>{node.frontmatter.date}</p>

                        <p>
                          {node.wordCount.words} words | {node.timeToRead}{" "}
                          minutes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="column" />
                </div>
              </div>

              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </div>
          </div>
        </section>
      </Content>
    </Layout>
  );
}

export default Post;
