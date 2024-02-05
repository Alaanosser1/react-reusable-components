// Import necessary dependencies from React and styled-components
import React, { ReactNode, MouseEvent } from "react";
import styled, { Interpolation, css } from "styled-components";

// Define the properties that the Button component accepts
interface ButtonProps {
  children?: ReactNode;
  customStyles?: Interpolation<object>[];
  disabled?: boolean;
  onClickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
}

// Define the styled component for a normal button with optional icon styling
const StyledNormalButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 8px;
  font-family: Regular;
  cursor: pointer;
  gap: 8px;

  i.left {
    display: inherit;
  }
  i.right {
    display: inherit;
  }

  &:disabled {
    cursor: default;
  }

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

// Define the Button component that takes in the specified properties
const Button: React.FC<ButtonProps> = ({
  children,
  customStyles,
  onClickHandler,
  disabled,
}) => {
  return (
    <>
      {/* // Render the styled button with provided properties */}
      <StyledNormalButton
        customStyles={customStyles}
        onClick={onClickHandler}
        disabled={disabled}
      >
        {children}
      </StyledNormalButton>
    </>
  );
};

export default Button;
