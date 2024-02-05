import React, { ChangeEvent, ReactNode, useState } from "react";
import styled, { Interpolation, css } from "styled-components";
import clearIcon from "../assets/icons/clear.svg";

// Interface defining props for the TextInput component
interface TextInputProps {
  leftIcon?: ReactNode;
  isLeftIconPresent?: boolean;
  rightIcon?: ReactNode;
  type?: string;
  placeholder?: string;
  name?: string;
  ref?: string;
  error?: boolean;
  errorLabel?: string;
  value?: string | number;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
  customStyles?: Interpolation<object>[];
  disabled?: boolean;
}

// Styled components for the TextInput
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: #fff;
  width: 100%;

  .right-icon {
    left: auto;
    right: 8px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
  display: flex;
`;

const ClearIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-right: 8px;
`;

const InputElement = styled.input<TextInputProps>`
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  padding-left: ${(props) => (props.isLeftIconPresent ? "30px" : "10px")};
  border: 1px solid ${(props) => (props.error ? "#FF0000" : "#ccc")};
  border-radius: 4px;
  outline: none;
  color: #848e9c;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &:focus {
    outline-style: solid;
    border: 0px;
    ${(props) =>
      props.error
        ? css`
            outline-color: #ff0000;
          `
        : css`
            outline-color: #1589ee;
          `}
    color: #2f353c;
  }

  &:disabled {
    border-radius: 4px;
    border: 1px solid #d0d5dd;
    background: #d0d5dd;
    cursor: default;
  }

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

// TextInput component
const TextInput: React.FC<TextInputProps> = ({
  leftIcon,
  rightIcon,
  type,
  placeholder,
  name,
  ref,
  error,
  customStyles,
  errorLabel,
  value,
  handleChange,
  disabled,
}) => {
  // Check if a left icon is present
  const isLeftIconPresent = React.isValidElement(leftIcon);

  // State to track if the input is focused
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleClearInputValue = () => {
    handleChange("");
  };

  return (
    <InputContainer>
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      <InputElement
        placeholder={placeholder}
        type={type}
        name={name}
        ref={ref}
        value={value}
        onChange={handleInputChange}
        customStyles={customStyles}
        error={error}
        errorLabel={errorLabel}
        isLeftIconPresent={isLeftIconPresent}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        handleChange={handleChange}
        disabled={disabled}
      />
      {value && (
        <IconWrapper className="right-icon">
          <ClearIcon
            src={clearIcon}
            alt="Clear"
            onClick={handleClearInputValue}
          />
        </IconWrapper>
      )}
      {rightIcon && !isInputFocused && !value && (
        <IconWrapper className="right-icon">{rightIcon}</IconWrapper>
      )}
    </InputContainer>
  );
};

export default TextInput;
