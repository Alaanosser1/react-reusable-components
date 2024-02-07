import React from "react";
import styled from "styled-components";
import groupIcon from "../../assets/icons/sideMenu/group-burger.svg";
import nawyLogo from "../../assets/icons/sideMenu/nawy-blue-logo.svg";
import DownArrow from "../../assets/icons/sideMenu/DownArrow";
import TableToggleMobile from "../../assets/icons/sideMenu/TableToggleMobile";

interface NavbarProps {
  setIsCollapsed: (value: boolean) => void;
  isCollapsed: boolean;
  // user: user[];
  user: any;
}

const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  width: calc(100vw - 48px);
  height: 60px;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  background: #0c314e;
  z-index: 8;
  @media (min-width: 1279px) {
    /* justify-content: start; */
  }
`;

const LeftSideItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: 743px) {
    min-width: 60vw;
    justify-content: space-between;
  }
`;

const RightSideItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-self: end;
`;

const CollapseSideMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  background-color: #8da788;
  border-radius: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-right: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  cursor: pointer;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 743px) {
    display: none;
  }
`;

const TableToggleMobileButton = styled.div`
  border: none;
  background-color: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (min-width: 744px) {
    display: none;
  }
`;

const Navbar: React.FC<NavbarProps> = ({
  setIsCollapsed,
  isCollapsed,
  user,
}) => {
  const getUserName = (name: string): string => {
    return name.split(" ").slice(0, 2).join(" ");
  };

  const getInitials = (name: string): string => {
    const username = getUserName(name);
    const initials = username
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
    return initials.toUpperCase();
  };

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
        <RightSideItemsContainer>
          <TableToggleMobileButton>
            <TableToggleMobile />
          </TableToggleMobileButton>
          <UserName>
            <UserAvatar>
              {!user.image ? getInitials(user.name) : <img src={user.image} />}
            </UserAvatar>
            {user.name} <DownArrow />
          </UserName>
        </RightSideItemsContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
