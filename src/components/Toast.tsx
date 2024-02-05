import React, { ReactNode, useState, useEffect } from "react";
import styled, { Interpolation, css, keyframes } from "styled-components";
import closeIcon from "../assets/icons/close.svg";

interface ToastProps {
  customStyles?: Interpolation<object>[];
  toastDetails?: {
    title?: string;
    content?: string;
    icon?: ReactNode;
  };
  duration?: number; // Duration in milliseconds
  closeButton?: boolean;
  autoClose?: boolean;
}
// Animation keyframes for sliding in the toast
const slideIn = keyframes`
  from {
    transform: translateY(300%);
  }
  to {
    transform: translateX(0);
  }
`;

// Animation keyframes for fading out the toast
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
  }
`;

// Styled component for the toast container
const ToastContainer = styled.div<ToastProps>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 320px;
  height: 70px;
  padding: 6px 16px;
  background-color: #ffffff;
  border-radius: 11px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.8s ease-in-out,
    ${(props) => props.autoClose && fadeOut} 0.6s 4.5s ease-in-out;
  z-index: 9;
  color: #fff;
  opacity: 1;

  div.icon {
    margin-right: 12px;
    height: 100%;
    margin-top: 8px;
  }

  .close-icon {
    position: absolute;
    right: 20px;
    top: 12px;
  }

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

// Styled component for the close button
const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

// Styled component for the toast body
const ToastBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 12px;

  .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }

  .content {
    margin-top: 4px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

const Toast: React.FC<ToastProps> = ({
  customStyles,
  toastDetails,
  duration,
  closeButton = true,
  autoClose = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (autoClose) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, duration || 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [autoClose, duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <ToastContainer customStyles={customStyles} autoClose={autoClose}>
      {toastDetails?.icon && <div className="icon">{toastDetails.icon}</div>}
      <ToastBody>
        <div className="title">{toastDetails?.title}</div>
        <div className="content">{toastDetails?.content}</div>
      </ToastBody>
      <div className="close-icon">
        {closeButton && (
          <CloseButton onClick={handleClose}>
            <img src={closeIcon} alt="Close" />
          </CloseButton>
        )}
      </div>
    </ToastContainer>
  ) : null;
};

export default Toast;
