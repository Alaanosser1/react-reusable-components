import React from "react";
import styled, { css } from "styled-components";
import SideMenuItem from "./SideMenuItem";
import sideMenuItemsArray from "./constants/SideMenuItems";

interface SideMenuProps {
  isCollapsed: boolean;
}

// Styled component for the SideMenuContainer
const SideMenuContainer = styled.div<{
  isCollapsed: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 8px;
  height: calc(100vh - 92px);
  background-color: #f3faff;
  position: sticky;
  top: 60px;
  left: 0;
  min-width: 256px;
  transition: 0.5s ease-in-out;

  // Styles for side menu items
  .side-menu-item {
    .text {
      white-space: nowrap;
      // Conditionally set position, visibility, and opacity based on isCollapsed prop
      position: ${(props) => !props.isCollapsed && "absolute"};
      left: 48px;
      visibility: ${(props) => props.isCollapsed && "none"};
      opacity: ${(props) => props.isCollapsed && "0"};
      transition: 0.1s ease-in-out;
      pointer-events: none;
    }

    // Styles for the SVG icon
    svg {
      fill: #ffffff;
      path {
        stroke: #0c314e;
      }
    }

    // Hover styles for the SVG icon
    &:hover {
      svg {
        fill: #0c314e;
        path {
          stroke: #ffffff;
        }
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
            overflow-y: auto;
            background: #fff;
            width: calc(100vw - 48px);
            height: 100%;
            padding: 24px 16px;
            z-index: 11;
            // Styles for side menu items in expanded state
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

const SideMenu: React.FC<SideMenuProps> = ({ isCollapsed }) => {
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
      </SideMenuContainer>
    </>
  );
};

export default SideMenu;
