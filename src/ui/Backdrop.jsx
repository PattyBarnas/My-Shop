import React, { useState } from "react";
import styled from "styled-components";

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

function Backdrop(props) {
  return <BackdropStyled onClick={props.onClick} />;
}

export default Backdrop;
