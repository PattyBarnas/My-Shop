import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 80vh;
  width: 99%;
  background-color: #ff8787;
  margin: 0 auto;
  clip-path: ellipse(100% 100% at 30% 0);
  border-radius: 5px;
`;

function LandingPage(props) {
  return <StyledDiv>Find your comfort and confidence</StyledDiv>;
}

export default LandingPage;
