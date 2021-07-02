import "./styles";
import { Overlay, ModalContainer } from "./styles";

function Modal({ title, children, handleClose, color }) {
  return (
    <Overlay>
      <ModalContainer color={color}>
        <span onClick={handleClose}>&times;</span>
        <header>{title}</header>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
