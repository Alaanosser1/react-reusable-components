import React from "react";
import styled, { css, Interpolation } from "styled-components";
import HelpCircle from "../assets/icons/help-circle";
import helpCircleHovered from "../assets/icons/help-circle-hovered.svg";

interface FieldLabelProps {
  required?: boolean;
  tooltip?: string;
  children: React.ReactNode;
  customStyles?: Interpolation<object>[];
  customToolTipStyles?: Interpolation<object>[];
}

const LabelContainer = styled.label<FieldLabelProps>`
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #2f353c;
  font-family: Poppins;
  font-size: 12px;
  line-height: 16px;
  position: relative;
  cursor: text;
  max-width: 100%;

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

const TooltipIcon = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: #98a2b3;

  &:hover {
    fill: #006694;
  }
`;
const TooltipContainer = styled.div<FieldLabelProps>`
  position: absolute;
  bottom: 130%;
  left: 0;
  margin-top: 4px;
  padding: 8px;
  color: #101828;
  width: 200px;
  font-family: poppins;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  display: none;
  border-radius: 8px;

  ${TooltipIcon}:hover + & {
    display: block;
  }

  ${(props) =>
    props.customToolTipStyles &&
    css`
      ${props.customToolTipStyles}
    `}
`;

const LabelText = styled.div`
  margin-right: 8px;

  span {
    color: #a61a14;
    margin-left: 0px;
  }
`;

const FieldLabel: React.FC<FieldLabelProps> = ({
  children,
  required,
  tooltip,
  customStyles,
}) => (
  <LabelContainer customStyles={customStyles}>
    <LabelText>
      {children}
      {required && <span>*</span>}
    </LabelText>
    {tooltip && (
      <>
        <TooltipIcon>
          <HelpCircle />
        </TooltipIcon>
        <TooltipContainer>
          <span>{tooltip}</span>
        </TooltipContainer>
      </>
    )}
  </LabelContainer>
);

export default FieldLabel;
