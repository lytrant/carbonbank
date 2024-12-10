// LayoutRoute.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayoutRoute = () => {
  return (
    <>
      <Header />
      <main style={{marginTop: "6rem"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutRoute;
