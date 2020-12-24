import React from "react";

import SEO from "./seo";
import NavigationBar from "./navigationbar";
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
        <NavigationBar />
        <main style={{ flex: 1 }}>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
