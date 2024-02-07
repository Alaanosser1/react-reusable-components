import React from "react";
import styled, { css } from "styled-components";
import SideMenuItem from "./SideMenuItem";
import sideMenuItemsArray from "./constants/SideMenuItems";
import useUserNameAndInitials from "../../hooks/useUserNameAndInitials";
import DownArrow from "../../assets/icons/sideMenu/DownArrow";

interface SideMenuProps {
  isCollapsed: boolean;
  user: any;
}

// Styled component for the SideMenuContainer
const SideMenuContainer = styled.div<{
  isCollapsed: boolean;
}>`
  display: flex;
  position: sticky;
  flex-direction: column;
  gap: 8px;
  padding: 16px 8px;
  height: calc(100vh - 92px);
  background-color: #f3faff;
  top: 60px;
  left: 0;
  min-width: 256px;
  transition: 0.5s ease-in-out;
  z-index: 1;

  // Styles for side menu items
  .side-menu-item {
    position: relative;
    .text {
      white-space: nowrap;
      position: ${(props) => !props.isCollapsed && "absolute"};
      left: 48px;
      visibility: ${(props) => props.isCollapsed && "none"};
      opacity: ${(props) => props.isCollapsed && "0"};
      transition: 0.1s ease-in-out;
    }

    &:hover {
      background: #b0d0de;
      color: #0c314e;
      width: fit-content;
      width: ${(props) => !props.isCollapsed && "100%"};
      .text {
        visibility: visible;
        opacity: 1;
      }
      svg {
        fill: #b0d0de;
        path {
          stroke: #0c314e;
        }
      }
    }

    // Styles for the SVG icon
    svg {
      fill: #ffffff;
      path {
        stroke: #0c314e;
      }
    }
  }

  // Media query styles for collapsed state
  ${(props) =>
    props.isCollapsed
      ? css`
          min-width: 40px;
          max-width: 40px;
          @media (max-width: 1279px) {
            position: absolute;
            visibility: none;
            opacity: 0;
            pointer-events: none;
          }
        `
      : css`
          @media (max-width: 743px) {
            position: fixed;
            overflow: auto;
            background: #fff;
            width: calc(100vw - 48px);
            padding: 24px 16px;
            z-index: 11;
            .side-menu-item {
              border-bottom: 1px solid #a9c7db;
              padding: 16px 8px;
              .text {
                padding-left: 8px;
              }
            }
          }
        `}
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
  color: #0c314e;
  cursor: pointer;
  margin-top: 8px;
  padding: 8px;
  @media (min-width: 743px) {
    display: none;
  }
`;

const SideMenu: React.FC<SideMenuProps> = ({ isCollapsed, user }) => {
  const { userName, userInitials } = useUserNameAndInitials(user.name);

  return (
    <>
      {/* Render SideMenuItem for each item in the sideMenuItemsArray */}
      <SideMenuContainer isCollapsed={isCollapsed}>
        {sideMenuItemsArray.map((item, index) => (
          <SideMenuItem
            key={index}
            text={item.text}
            icon={React.cloneElement(item.icon)}
          />
        ))}
        <UserName className="user-name">
          <UserAvatar>
            {!user.image ? userInitials : <img src={user.image} />}
          </UserAvatar>
          {userName} <DownArrow fill="#0c314e" />
        </UserName>
      </SideMenuContainer>
    </>
  );
};

export default SideMenu;
