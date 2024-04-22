import React from "react";
import styled from "styled-components";
import LandingPageImg from "../../data/Images/landing-page-3.jpg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 99%;
  background-color: #ffc078;
  margin: 0 auto;
  clip-path: ellipse(100% 100% at 30% 0);
  border-radius: 5px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
`;
const H1 = styled.h1`
  font-size: 3.8rem;
  font-weight: 500;
  width: 75%;
  color: #222;
  letter-spacing: 0.8px;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 5.8rem;
`;
const Image = styled.img`
  height: 100%;
  width: 65%;
  transform: rotate(5deg);
  border-radius: 10px;
  margin-left: 3.8rem;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.7rem;
  letter-spacing: 0.8px;
  width: 75%;
  margin-bottom: 4.4rem;
`;

const A = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.9px;
  font-weight: 500;
  font-size: 1.6rem;
  gap: 2px;
  text-decoration: none;
  color: #222;
  cursor: pointer;
`;

function LandingPage(props) {
  return (
    <StyledHeader>
      <Div>
        <H1>Elevating Comfort to a Stylish Standard</H1>
        <Text>
          - From cozy fabrics we redefine fashion, every outfit blends comfort
          seamlessly with sophistication.
        </Text>
        <A href="#products">
          Learn More
          <ion-icon size="large" name="arrow-down-sharp"></ion-icon>
        </A>
      </Div>
      <Container>
        <Image src={LandingPageImg} alt="Cover image of fashion" />
      </Container>
    </StyledHeader>
  );
}

export default LandingPage;
