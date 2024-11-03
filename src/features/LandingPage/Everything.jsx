import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #d1d1b9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8.4rem;
  padding: 6.4rem;
`;
const H4 = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 6.2rem;
  font-weight: 300;
  letter-spacing: 1.2px;
  width: 40%;
  color: #e03131;
  align-self: flex-start;
  margin-bottom: auto;
`;
const StyledA = styled.a`
  font-size: 1.7rem;
  font-weight: 300;
  text-decoration: none;
  background-color: #e03131;
  padding: 0.6rem 3.2rem;
  border-radius: 50px;
  color: #fff;
  margin-bottom: 4.2rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function Everything() {
  return (
    <StyledSection>
      <Div>
        <H4>Everything you need for your (wardrobe). With Style</H4>
        <StyledA href="#products">SHOP ALL</StyledA>
      </Div>
    </StyledSection>
  );
}

export default Everything;
