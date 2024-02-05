import React from "react";
import styled from "styled-components";

interface SideMenuProps {
  icon?: React.ReactNode;
  text?: string;
}

const ItemContainer = styled.div`
  display: flex;
  height: 24px;
  height: 24px;
  padding: 8px;
  gap: 12px;

  &:hover {
    background-color: #0c314e;
    border-radius: 6px;
    cursor: pointer;
    color: white;
  }
`;

const TextContainer = styled.div`
  color: #0c314e;
  font-family: Medium;
  font-size: 14px;
`;

const SideMenuItem: React.FC<SideMenuProps> = ({ icon, text }) => {
  return (
    <ItemContainer className="side-menu-item">
      <TextContainer className="icon">{icon}</TextContainer>
      <span className="text">{text}</span>
    </ItemContainer>
  );
};

export default SideMenuItem;
