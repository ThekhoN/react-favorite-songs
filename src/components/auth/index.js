import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import AuthSignIn from "../auth-signin";
import AuthSignOut from "../auth-signout";
import AuthSignUp from "../auth-signup";
import {
  dummyAuthState,
  authSignIn,
  authSignOut,
  authSignUp
} from "../../redux/modules/auth";
import { uiShowModal, uiHideModal } from "../../redux/modules/ui";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Auth = ({ auth, authSignIn, authSignOut, authSignUp, showModal }) => {
  if (auth) {
    return (
      <Wrapper>
        <AuthSignOut authSignOut={authSignOut} />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <AuthSignIn authSignIn={authSignIn} showModal={showModal} />
        <AuthSignUp authSignUp={authSignUp} />
      </Wrapper>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth,
  showModal: state.ui.showModal
});
const mapDispatchToProps = dispatch => ({
  authSignIn: () => dispatch(authSignIn(dummyAuthState)),
  authSignUp: () => dispatch(authSignUp(dummyAuthState)),
  authSignOut: () => dispatch(authSignOut()),
  uiShowModal: () => dispatch(uiShowModal()),
  uiHideModal: () => dispatch(uiShowModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
