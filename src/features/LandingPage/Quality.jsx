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
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 0;
  text-transform: uppercase;
`;
const P = styled.p`
  margin-top: 0;
  width: 75%;
  font-size: 1.6rem;
`;

function Quality() {
  return (
    <StyledQuality>
      <Div>
        <H5>Quality</H5>
        <P>
          Lorem IPsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </P>
      </Div>
      <Div>
        <H5>Style</H5>
        <P>
          Lorem IPsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </P>
      </Div>
      <Div>
        <H5>Comfort</H5>
        <P>
          Lorem IPsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </P>
      </Div>
    </StyledQuality>
  );
}

export default Quality;
