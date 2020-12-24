import React from "react";

import SEO from "./seo";
import Bar from "./navigation/bar";
import Footer from "./footer";

function Layout(props) {
  return (
    <>
      <SEO
        pageTitle={props.pageTitle}
        pageDescription={props.pageDescription}
      />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Bar />
        <main style={{ flex: 1 }}>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
