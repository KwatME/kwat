import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />

      <main style={{ flex: 1 }}>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
