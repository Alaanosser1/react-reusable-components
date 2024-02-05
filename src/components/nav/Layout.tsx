import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Layout = () => {
  const isCollapsedStored = localStorage.getItem("isCollapsed");
  const initialIsCollapsed = isCollapsedStored
    ? JSON.parse(isCollapsedStored)
    : false;
  const [isCollapsed, setIsCollapsed] = useState(initialIsCollapsed);

  useEffect(() => {
    localStorage.setItem("isCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  return (
    <>
      <>
        <Navbar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
        <SideMenu isCollapsed={isCollapsed} />
      </>
    </>
  );
};

export default Layout;
