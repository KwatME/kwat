import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ pageTitle, pageDescription = "", meta = [] }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title

            description

            author
          }
        }
      }
    `
  );

  const description = pageDescription || data.site.siteMetadata.description;

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
      ].concat(meta)}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
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
