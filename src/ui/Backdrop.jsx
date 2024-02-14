import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../store/CartContext";

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

function Backdrop(props) {
  const dispatch = useCart().dispatch;
  return (
    <BackdropStyled
      onClick={() => {
        dispatch({ type: "openCart" });
      }}
    />
  );
}

export default Backdrop;
