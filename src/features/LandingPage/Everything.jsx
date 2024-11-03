import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSection = styled.section`
  background-color: #929274;
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
  line-height: 6rem;
  width: 40%;
  color: #c92a2a;
`;
const StyledButton = styled.button`
  border: none;
  font-size: 1.7rem;
  font-weight: 300;
  text-decoration: none;
  background-color: #c92a2a;
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
  const navigate = useNavigate();

  return (
    <StyledSection>
      <Div>
        <H4>Everything you need for your (wardrobe). With love</H4>
        <StyledButton onClick={() => navigate("products")}>
          SHOP ALL
        </StyledButton>
      </Div>
    </StyledSection>
  );
}

export default Everything;
