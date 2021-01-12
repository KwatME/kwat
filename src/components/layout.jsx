import React from "react";

import SEO from "./seo";
import NavigationBar from "./navigationbar";
import Footer from "./footer";

function Layout({ pageTitle, pageDescription, children }) {
  return (
    <>
      <SEO pageTitle={pageTitle} pageDescription={pageDescription} />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavigationBar />
        <main role="main" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
