import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import styleUnit from "../../helpers/styleunit";

function PostCard({ node }) {
  return (
    <Link to={node.fields.slug}>
      <div className="card">
        <div className="card-image">
          <BackgroundImage fluid={node.frontmatter.image.childImageSharp.fluid}>
            <figure className="image is-3by2" />
          </BackgroundImage>
        </div>
        <div className="card-content">
          <p className="title is-4">{node.frontmatter.title}</p>
          <div className="subtitle heading">
            <p>{node.frontmatter.date}</p>
            <p>
              {styleUnit(node.wordCount.words, "word")} |{" "}
              {styleUnit(node.timeToRead, "minute")}
            </p>
          </div>
          <div className="content">{node.excerpt}</div>
        </div>
        <div className="tags is-pulled-right">
          {node.frontmatter.topics.map((topic) => (
            <span className="tag is-radiusless is-primary">
              <Link to={`/topics/${topic}`}>
                <div className="has-text-white">{topic}</div>
              </Link>
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
