import React from "react";
import styled from "styled-components";
import AuthSignInModal from "../auth-signin-modal";

const Wrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
`;

const AuthSignIn = ({ authSignIn, showModal, uiShowModal, uiHideModal }) => {
  return (
    <Wrapper>
      <button onClick={showModal}>Sign in</button>
      {showModal && <AuthSignInModal authSignIn={authSignIn} />}
    </Wrapper>
  );
};

export default AuthSignIn;
