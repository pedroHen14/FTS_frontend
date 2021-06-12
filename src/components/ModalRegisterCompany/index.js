import React from "react";
import Modal from "../Modal";

import { Container } from "./styles";

function ModalRegisterCompany({ idPlan, planName }) {
  return (
    <Modal title={planName}>
      <Container></Container>
    </Modal>
  );
}

export default ModalRegisterCompany;
