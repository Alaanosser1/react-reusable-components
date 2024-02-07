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
        <Navbar
          user={{
            name: "Abdelrahman Abdallah",
          }}
          setIsCollapsed={setIsCollapsed}
          isCollapsed={isCollapsed}
        />
        <SideMenu
          user={{
            name: "Abdelrahman Abdallah",
          }}
          isCollapsed={isCollapsed}
        />
      </>
    </>
  );
};

export default Layout;
