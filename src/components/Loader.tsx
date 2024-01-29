import React from "react";
import styled, { keyframes } from "styled-components";
import loaderIcon from "../assets/icons/ellipse.png";

// Animation keyframes for rotating the loader
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the loader container
const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Styled component for the rotating icon
const RotatingIcon = styled.img`
  animation: ${rotateAnimation} 1.2s linear infinite;
`;

// Reusable Loader component
const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <RotatingIcon src={loaderIcon} alt="Loader" />
    </LoaderContainer>
  );
};

export default Loader;
