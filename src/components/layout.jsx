import React from "react";

import SEO from "./SEO";
import Header from "./navigation/Header";
import Footer from "./Footer";

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
        <Header />
        <main style={{ flex: 1 }}>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
