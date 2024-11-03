import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  background-color: #f9f9f9;
  padding: 2.2rem;
`;

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 95%;
  text-decoration: none;
  gap: 3.2rem;
  margin-bottom: 5.4rem;
`;

const StyledLi = styled.li`
  display: flex;
  border-radius: 12px;
  box-shadow: 2px 16px 24px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
const Image = styled.img`
  overflow: hidden;
  width: 100%;
  height: 45rem;
`;
const ImageContainer = styled.div`
  width: 45rem;
  max-height: 45rem;
  transition: transform 0.6s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Price = styled.p`
  font-size: 2rem;
  color: #0b7285;
  font-weight: 500;
  text-decoration: none;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const StyledH3 = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  /* width: 73.5%; */
  margin: 4.6rem auto;
  text-decoration: overline;
`;

const P = styled.p`
  font-size: 1.5rem;
  letter-spacing: 1.2px;
  color: #495057;
`;

const Overflow = styled.div`
  overflow: hidden;
`;

const ProductList = ({ products }) => {
  return (
    <Div id="products">
      <StyledH3>Shop.</StyledH3>
      <StyledUL>
        {products.map((prod) => (
          <StyledLi key={prod.id} id={prod.id}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/products/${prod.id}`}
            >
              <Overflow>
                <ImageContainer>
                  <Image src={prod.image} alt={prod.image} />
                </ImageContainer>
              </Overflow>

              <Description>
                <P>{prod.description}</P>
                <Price>${prod.price}</Price>
              </Description>
            </Link>
          </StyledLi>
        ))}
      </StyledUL>
    </Div>
  );
};

export default ProductList;
