import * as React from "react";
import * as style from "./style";
import Button from "../Button";

interface Props {
  machine: Array<any>;
}

const Modal: React.FC<Props> = ({ machine }: Props) => {
  const [parentState, send] = machine;
  const { value } = parentState;

  if (value === "open") {
    return (
      <style.ModalOverlay data-testid="modal">
        <style.ModalContainer>
          <h1>Simple modal</h1>
          <Button data-testid="btn-close-modal" onClick={() => send("CLOSE")}>
            Close modal
          </Button>
        </style.ModalContainer>
      </style.ModalOverlay>
    );
  }

  return null;
};

export default Modal;
