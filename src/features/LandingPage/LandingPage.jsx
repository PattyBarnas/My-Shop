import React from "react";
import styled from "styled-components";
import LandingPageImg from "../../data/Images/landing-page.jpg";
import Quality from "./Quality";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 99%;
  background-color: #929274;
  margin: 0 auto;
  clip-path: ellipse(100% 100% at 30% 0);
  border-radius: 5px;
  margin-bottom: 6.4rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
`;
const H1 = styled.h1`
  font-family: "Satisfy", cursive;
  font-weight: 500;
  font-style: normal;
  font-size: 5.4rem;
  width: 75%;
  color: #fff;
  letter-spacing: 0.9px;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 3.8rem;
`;
const Image = styled.img`
  width: 58%;
  transform: rotate(5deg);
  box-shadow: 2px 16px 24px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-left: 3.8rem;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const Text = styled.p`
  font-size: 1.9rem;
  font-weight: 400;
  letter-spacing: 0.9px;
  width: 75%;
  margin-bottom: 4.4rem;
  color: #fff;
`;

const A = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.9px;
  font-weight: 500;
  font-size: 1.6rem;
  gap: 2px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
const Div2 = styled.div`
  position: absolute;
  bottom: 7%;
`;

function LandingPage(props) {
  return (
    <>
      <StyledHeader>
        <Div>
          <H1>Elevating Comfort to a Stylish Standard</H1>
          <Text>
            From cozy fabrics, we redefine fashion. Each outfit blends comfort
            seamlessly with sophistication.
          </Text>
        </Div>
        <Container>
          <Image src={LandingPageImg} alt="Cover image of fashion" />
        </Container>
        <Div2>
          <A href="#quality">
            Learn More
            <ion-icon
              id="ion-arrow-down"
              size="large"
              name="arrow-down-sharp"
            ></ion-icon>
          </A>
        </Div2>
      </StyledHeader>
      <Quality />
    </>
  );
}

export default LandingPage;
