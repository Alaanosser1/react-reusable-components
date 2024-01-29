import React from "react";
import styled, { Interpolation, css } from "styled-components";

interface CheckboxProps {
  onCheckedBackground: string;
  onToggle?: (checked: string) => void;
  disabled?: boolean;
  customStyles?: Interpolation<object>[];
}

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})<CheckboxProps>`
  position: relative;
  appearance: none;
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  max-width: 20px;
  cursor: pointer;
  border: 1px solid #d0d5dd;
  border-radius: 7px;
  transition: background-image 0.2s;

  &:checked {
    ${(props) =>
      props.onCheckedBackground &&
      css`
        background: url(${props.onCheckedBackground}) center/cover;
      `}
    color: #ffffff;
    text-align: center;
    line-height: 18px;
  }

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
  }

  &:disabled {
    background: #f2f4f7;
    cursor: default;
  }

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

const Checkbox: React.FC<CheckboxProps> = ({
  onCheckedBackground,
  onToggle,
  disabled,
  customStyles,
}) => {
  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onToggle) {
      onToggle(e.target.value);
    }
  };

  return (
    <StyledCheckbox
      onCheckedBackground={onCheckedBackground}
      onChange={handleToggleChange}
      disabled={disabled}
      customStyles={customStyles}
    />
  );
};

export default Checkbox;
