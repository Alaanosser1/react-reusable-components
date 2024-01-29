import React from "react";
import styled, { Interpolation, css } from "styled-components";
import untoggledCheckbox from "../assets/icons/untoggled-checkbox.svg";
import toggledCheckbox from "../assets/icons/toggled-checkbox.svg";
import unToggledDisabledCheckbox from "../assets/icons/untoggled-disabled-checkbox.svg";

interface ToggleProps {
  onToggle: (checked: boolean) => void;
  disabled?: boolean;
  customStyles?: Interpolation<object>[];
}

const ToggleCheckbox = styled.input.attrs({ type: "checkbox" })<ToggleProps>`
  position: relative;
  appearance: none;
  background-color: #ffffff;
  background: url(${untoggledCheckbox}) center/cover;
  width: 36px;
  height: 20px;
  max-width: 36px;
  max-height: 20px;
  cursor: pointer;
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  transition: background-image 0.4s;
  margin-right: 10px;
  margin-top: -1px;

  &:checked {
    background: url(${toggledCheckbox}) center/cover;
    color: #ffffff;
    text-align: center;
    line-height: 18px;
  }

  &:disabled {
    background: url(${unToggledDisabledCheckbox}) center/cover;
    color: #ffffff;
    text-align: center;
    line-height: 18px;
    cursor: default;
  }

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
  }

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

const Toggle: React.FC<ToggleProps> = ({
  onToggle,
  disabled,
  customStyles,
}) => {
  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(e.target.checked);
  };

  return (
    <ToggleCheckbox
      customStyles={customStyles}
      disabled={disabled}
      onChange={handleToggleChange}
      onToggle={onToggle}
    />
  );
};

export default Toggle;
