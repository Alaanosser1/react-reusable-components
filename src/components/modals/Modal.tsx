import React, { ReactNode, CSSProperties, useState, useEffect } from "react";
import styled, { Interpolation } from "styled-components";
import CloseIcon from "../../assets/icons/Close";

interface ModalDetails {
  title?: ReactNode;
  actions?: ReactNode;
}

interface ModalProps {
  modalDetails: ModalDetails;
  customStyles?: Interpolation<object>[];
  children?: ReactNode;
  closed: boolean;
  setClosed: (closed: boolean) => void;
}

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

const ModalWrapper = styled.div<{ customStyles?: Interpolation<object>[] }>`
  display: flex;
  width: 600px;
  height: 450px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid#d1d4d9;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media (max-width: 743px) {
    width: 100%;
    height: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    border-radius: 0px;
    border: 1px solid #d1d4d9;
  }
  ${(props) => props.customStyles}
`;

const ModalContent = styled.div`
  padding: 32px;
  font-family: Regular;
  color: #2f353c;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;

  @media (max-width: 743px) {
    width: calc(100% - 64px);
    height: calc(100% - 80px);
    padding: 40px 32px;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 32px);
  height: 58px;
  padding: 16px;
  color: #344054;
  font-family: Medium;
  font-size: 18px;
  line-height: 16px;
  text-transform: capitalize;
  @media (max-width: 743px) {
    padding: 15px 16px;
    margin-top: auto;
    width: calc(100% - 32px);
    background-color: #cedaea;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  width: calc(100% - 32px);
  padding: 16px;
  @media (max-width: 743px) {
    background-color: #f3faff;
  }
`;

const Modal: React.FC<ModalProps> = ({
  modalDetails,
  customStyles,
  children,
  closed,
  setClosed,
}) => {
  const [closeIconFill, setCloseIconFill] = useState("#667085");
  const [closeIconWidth, setCloseIconWidth] = useState("20");
  const [closeIconHeight, setCloseIconHeight] = useState("20");

  useEffect(() => {
    // Add event listener to handle scrolling when the modal is open
    if (!closed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleResize = () => {
      // Update iconFill based on screen size
      setCloseIconFill(window.innerWidth >= 743 ? "#667085" : "#015C9A");
      setCloseIconWidth(window.innerWidth >= 743 ? "20" : "40");
      setCloseIconHeight(window.innerWidth >= 743 ? "20" : "40");
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove event listener when the modal is closed
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [closed]);

  const handleOnClose = () => {
    setClosed(true);
  };

  return (
    <>
      {!closed && (
        <>
          <ModalDimmedBackground onClick={handleOnClose} />
          <ModalWrapper customStyles={customStyles}>
            {modalDetails.title && (
              <ModalTitle>
                {modalDetails.title}
                <CloseButton onClick={handleOnClose}>
                  <CloseIcon
                    fill={closeIconFill}
                    width={closeIconWidth}
                    height={closeIconHeight}
                  />
                </CloseButton>
              </ModalTitle>
            )}
            <ModalContent>{children}</ModalContent>
            {modalDetails.actions && (
              <ModalActions>{modalDetails.actions}</ModalActions>
            )}
          </ModalWrapper>
        </>
      )}
    </>
  );
};

export default Modal;
