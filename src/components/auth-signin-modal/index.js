import React from "react";
import Modal from "../modal";

const AuthSignInModal = ({ authSignIn }) => (
  <Modal>
    <button onClick={authSignIn}>Login in with Google</button>
  </Modal>
);

export default AuthSignInModal;
