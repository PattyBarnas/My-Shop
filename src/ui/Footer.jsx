import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #222;
  width: 100%;
  height: 2.4rem;
  padding: 1rem 0;
  font-size: 1.4rem;
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: 0;
`;

const Footer = () => {
  return <StyledFooter>2024 Patryk Barnas</StyledFooter>;
};

export default Footer;
