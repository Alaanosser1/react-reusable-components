import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import HelpCircle from "../assets/icons/help-circle";
import helpCircleHovered from "../assets/icons/help-circle-hovered.svg";

interface TooltipProps {
  text: string;
  position?: any;
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const TooltipIconContainer = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
`;

const TooltipIcon = styled.div`
  width: 100%;
  height: 100%;
  /* position: absolute; */
  /* right: 0; */
  background-size: cover;

  &:hover {
    background: url(${helpCircleHovered}) no-repeat center center;
    background-size: cover;
  }
`;
const TooltipContainer = styled.div<TooltipProps>`
  position: absolute;
  z-index: 2;
  margin-top: 4px;
  padding: 8px;
  color: #101828;
  min-width: 200px;
  font-family: poppins;
  font-size: 12px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  display: none;
  border-radius: 8px;

  ${TooltipIconContainer}:hover + & {
    display: block;
  }

  /* Position the tooltip above the icon */
  left: 50%;
  transform: translateX(-50%);

  /* Adjust the vertical position */
  top: ${(props) => (props.position ? props.position.top : "auto")};
  bottom: ${(props) => (props.position ? props.position.bottom : "auto")};
`;

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  const [position, setPosition] = useState<{ top?: string; bottom?: string }>(
    {}
  );
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTooltipPosition = () => {
      if (tooltipRef.current) {
        const iconRect = tooltipRef.current.getBoundingClientRect();
        const tooltipWidth = tooltipRef.current.offsetWidth;
        const tooltipHeight = tooltipRef.current.offsetHeight;

        // Calculate the center above the icon horizontally
        let left = iconRect.left + iconRect.width / 2 - tooltipWidth / 2;

        // Adjust the vertical position
        let top = iconRect.top - tooltipHeight - 10; // Adjust 10px for spacing

        // Check if the tooltip is going off the right edge of the screen
        if (left + tooltipWidth > window.innerWidth) {
          left = window.innerWidth - tooltipWidth;
        }

        // Check if the tooltip is going off the top edge of the screen
        if (top < 0) {
          top = iconRect.bottom + 10; // Adjust 10px for spacing
        }

        setPosition({
          top: `${top}px`,
        });
      }
    };

    const handleResize = () => {
      updateTooltipPosition();
    };

    window.addEventListener("resize", handleResize);
    updateTooltipPosition();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container>
        <TooltipIconContainer ref={tooltipRef}>
          <TooltipIcon>
            <HelpCircle />
          </TooltipIcon>
        </TooltipIconContainer>
        <TooltipContainer position={position} text={text}>
          <span>{text}</span>
        </TooltipContainer>
      </Container>
    </>
  );
};

export default Tooltip;
