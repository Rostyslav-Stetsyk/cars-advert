import ReactModal from "react-modal";

ReactModal.setAppElement("#root-modal");

export const Modal = ({ children }) => {
  return <ReactModal>{children}</ReactModal>;
};
