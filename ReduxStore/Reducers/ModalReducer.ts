let initalState = {
  modalData: {},
  setShowModal: null,
  showModal: false,
  isLoginModal: false,
  profileSideBar: false,
};

export default function setModal(state = initalState, action) {
  switch (action.type) {
    case "MODAL":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
