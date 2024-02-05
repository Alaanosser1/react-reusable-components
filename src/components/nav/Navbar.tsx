import React from "react";
import styled from "styled-components";
import groupIcon from "../../assets/icons/sideMenu/group-burger.svg";
import nawyLogo from "../../assets/icons/sideMenu/nawy-blue-logo.svg";

interface NavbarProps {
  setIsCollapsed: (value: boolean) => void;
  isCollapsed: boolean;
}

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #0c314e;
  z-index: 8;
`;

const LeftSideItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const CollapseSideMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Navbar: React.FC<NavbarProps> = ({ setIsCollapsed, isCollapsed }) => {
  return (
    <>
      <NavbarContainer>
        <LeftSideItemsContainer>
          <CollapseSideMenuButton
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              console.log("clicked");
            }}
          >
            <img src={groupIcon} alt="" />
          </CollapseSideMenuButton>
          <LogoButton>
            <img src={nawyLogo} alt="" />
          </LogoButton>
        </LeftSideItemsContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
