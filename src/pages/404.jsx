import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFound() {
  return (
    <Layout>
      <SEO pageTitle="Not Found" />
      404: Page Not Found
      <Link to="/">Let&#39;s go home.</Link>
    </Layout>
  );
}

export default NotFound;
