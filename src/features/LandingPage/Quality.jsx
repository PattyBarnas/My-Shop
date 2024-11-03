import styled from "styled-components";

const StyledQuality = styled.section`
  margin: 4.8rem auto;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  padding: 6.8rem;
  width: 75%;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const H5 = styled.h5`
  letter-spacing: 1.2px;
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 0;
  text-transform: uppercase;
`;
const P = styled.p`
  margin-top: 0;
  width: 75%;
  font-size: 1.6rem;
  letter-spacing: 1.2px;
  color: #495057;
`;

function Quality() {
  return (
    <StyledQuality id="quality">
      <Div>
        <H5>Quality</H5>
        <P>
          Crafted with precision and care, our products embody excellence that
          stands the test of time.
        </P>
      </Div>
      <Div>
        <H5>Style</H5>
        <P>
          Elevate your look with timeless designs that bring sophistication to
          every occasion.
        </P>
      </Div>
      <Div>
        <H5>Comfort</H5>
        <P>
          Designed for ultimate comfort, our pieces make feeling good as
          effortless as looking good.
        </P>
      </Div>
    </StyledQuality>
  );
}

export default Quality;
