import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: #fff;
  padding: 0rem;
  margin: 0;
  cursor: pointer;
`;

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
