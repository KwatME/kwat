import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Content from "../components/content";

function NotFound() {
  return (
    <Layout>
      <SEO pageTitle="Not Found" />

      <Content>
        <h1>404: Page Not Found</h1>

        <p>
          <Link to="/">Let&#39;s go home.</Link>
        </p>
      </Content>
    </Layout>
  );
}

export default NotFound;
