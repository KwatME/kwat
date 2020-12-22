import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />

      <main style={{ flex: 1 }}>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
