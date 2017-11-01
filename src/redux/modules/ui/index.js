const UI_SHOW_MODAL = "UI_SHOW_MODAL";
const UI_HIDE_MODAL = "UI_HIDE_MODAL";

const initialState = {
  showModal: true
};

export const uiShowModal = () => ({
  type: UI_SHOW_MODAL
});

export const uiHideModal = () => ({
  type: UI_HIDE_MODAL
});

const ui = (state = initialState, action) => {
  switch (action.type) {
    case UI_SHOW_MODAL:
      return { ...state, showModal: true };
    case UI_HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default ui;
