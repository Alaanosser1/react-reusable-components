import React, { ReactNode, useEffect, useState } from "react";
import styled, { Interpolation, css } from "styled-components";
import CloseIcon from "../../assets/icons/Close";
import Button from "../Buttons";

// Define TypeScript interfaces
interface AlertDetails {
  image?: ReactNode;
  title?: ReactNode;
  message?: ReactNode;
  onConfirm?: () => void;
  onClose?: () => void;
}

interface ConfirmationMessageModalProps {
  alertDetails?: AlertDetails;
  customStyles?: Interpolation<object>[];
  closed: boolean;
  setClosed: (closed: boolean) => void;
}

// Styled components
const ModalDimmedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00000040;
  z-index: 9;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  padding: 32px;
  border-radius: 10px;
  border: 1px solid #d1d4d9;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  img {
    margin: 14px;
  }

  @media (max-width: 743px) {
    padding: 24px;
    width: 250px;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  align-self: flex-end;
`;

const ModalTitle = styled.div`
  font-family: Bold;
  font-size: 18px;
  line-height: 28px;
  margin-top: 24px;
`;

const ModalMessage = styled.div<{ customStyles?: Interpolation<object>[] }>`
  font-family: Regular;
  font-size: 14px;
  line-height: 20px;
  ${(props) => props.customStyles}
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;

  @media (max-width: 743px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 32px;

    button {
      width: 100%;
    }
  }
`;

const confirmButtonStyles = css`
  color: #fff;
  background: #006694;
  font-size: 16px;
  line-height: 24px;
  width: 150px;
  padding: 10px 16px;
  border: none;

  &:hover {
    background: #004869;
  }
  &:active {
    background: #006694;
  }
  &:disabled {
    background: #e6f0f4;
    cursor: default;
  }
`;

const cancelButtonStyles = css`
  color: #344054;
  background: #fff;
  width: 150px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  font-family: SemiBold;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  &:hover {
    background: #f9fafb;
  }
  &:active {
    background: #fff;
    box-shadow: 0px 0px 0px 4px #f2f4f7, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }
  &:disabled {
    background: #fff;
    color: #d0d5dd;
    cursor: default;
  }
`;

// Component
const ConfirmationMessageModal: React.FC<ConfirmationMessageModalProps> = ({
  alertDetails,
  customStyles,
  closed,
  setClosed,
}) => {
  useEffect(() => {
    // Add event listener to handle scrolling when the modal is open
    if (!closed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Remove event listener when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, [closed]);

  const handleOnClose = () => {
    setClosed(true);
    alertDetails?.onClose?.();
  };

  const handleOnConfirm = () => {
    alertDetails?.onConfirm?.();
    setClosed(true);
  };

  const actions = (
    <>
      <Button customStyles={cancelButtonStyles} onClickHandler={handleOnClose}>
        Cancel
      </Button>
      <Button
        customStyles={confirmButtonStyles}
        onClickHandler={handleOnConfirm}
      >
        Confirm
      </Button>
    </>
  );

  return (
    <>
      {!closed && (
        <>
          <ModalDimmedBackground onClick={handleOnClose} />
          <ModalWrapper>
            <CloseButton onClick={handleOnClose}>
              <CloseIcon fill={"#667085"} />
            </CloseButton>
            {alertDetails?.image}
            {alertDetails?.title && (
              <ModalTitle>{alertDetails.title}</ModalTitle>
            )}
            {alertDetails?.message && (
              <ModalMessage customStyles={customStyles}>
                {alertDetails.message}
              </ModalMessage>
            )}
            <ModalActions>{actions}</ModalActions>
          </ModalWrapper>
        </>
      )}
    </>
  );
};

export default ConfirmationMessageModal;
