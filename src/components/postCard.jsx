import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styleUnit from "../functions/styleunit";

function PostCard(edge) {
  const node = edge.node;

  return (
    <>
      <Link to={node.fields.slug}>
        <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
      </Link>
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      {node.frontmatter.date}
      {styleUnit(node.wordCount.words, "word")}
      {styleUnit(node.timeToRead, "minute")}
      {node.excerpt}
      {node.frontmatter.topics.map((topic) => (
        <Link to="/">{topic}</Link>
      ))}
    </>
  );
}

export default PostCard;
