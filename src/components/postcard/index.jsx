import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import styleUnit from "../../helpers/styleunit";

function PostCard({ node }) {
  return (
    <Link to={node.fields.slug}>
      <div className="card">
        <div className="card-image">
          <BackgroundImage fluid={node.frontmatter.cover.childImageSharp.fluid}>
            <figure className="image is-3by2" />
          </BackgroundImage>
        </div>
        <section className="card-content">
          <h4 className="title is-4">{node.frontmatter.title}</h4>
          <section className="subtitle heading">
            <p>{node.frontmatter.time}</p>
            <p>
              {styleUnit(node.wordCount.words, "word")} |{" "}
              {styleUnit(node.timeToRead, "minute")}
            </p>
          </section>
          <section className="content">{node.excerpt}</section>
        </section>
        <section className="tags is-pulled-right">
          {node.frontmatter.tags.map((tag) => (
            <Link className="tag is-radiusless is-primary" to={`/tags/${tag}`}>
              {tag}
            </Link>
          ))}
        </section>
      </div>
    </Link>
  );
}

export default PostCard;
