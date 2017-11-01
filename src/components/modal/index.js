import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const ModalContentWrapper = styled.div`
  position: fixed;
  width: 480px;
  height: 480px;
  top: 50%;
  margin-top: -240px;
  z-index: 2;
`;

const Modal = ({ children }) => (
  <ModalWrapper>
    <ModalContentWrapper>{children}</ModalContentWrapper>
    <ModalOverlay />
  </ModalWrapper>
);

export default Modal;
