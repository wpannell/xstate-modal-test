import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  background-color: rgba(000, 000, 000, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalContainer = styled.div`
  width: 220px;
  height: 200px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;

  h1 {
    text-align: center;
  }

  button {
    position: absolute;
    bottom: 10px;
    right: 0px;
    left: 0px;
    margin: 0 auto;
  }
`;
