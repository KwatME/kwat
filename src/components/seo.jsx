import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO(props) {
  const pageTitle = props.pageTitle;

  const pageDescription = "";

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title

          description

          author
        }
      }
    }
  `);

  let description = "";

  if (pageDescription) {
    description = pageDescription;
  } else {
    description = data.site.siteMetadata.description;
  }

  return (
    <Helmet
      title={pageTitle}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: "description",

          content: description,
        },
        {
          property: "og:title",

          content: pageTitle,
        },
        {
          property: "og:description",

          content: description,
        },
        {
          property: "og:type",

          content: "website",
        },
        {
          name: "twitter:card",

          content: "summary",
        },
        {
          name: "twitter:creator",

          content: data.site.siteMetadata.author,
        },
        {
          name: "twitter:title",

          content: pageTitle,
        },
        {
          name: "twitter:description",

          content: description,
        },
      ]}
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
      />
    </Helmet>
  );
}

export default SEO;
