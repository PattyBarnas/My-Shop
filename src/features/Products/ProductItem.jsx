import React from "react";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledProductItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  height: 100%;
  list-style: none;
  gap: 1.6rem;
  text-decoration: none;
`;
const Title = styled.p`
  margin: 0;
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
`;
const Price = styled.p`
  font-size: 2rem;
  color: green;
  font-weight: 500;
  text-decoration: none;
`;

const Span = styled.span``;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  margin-left: 1.2rem;
  width: 20rem;
  height: 100%;
`;

const ProductItem = ({ id, title, image, color, size, quantity, price }) => {
  const params = useParams();
  return (
    <StyledProductItem>
      <div>
        <Image src={image} alt="T-shirt Image"></Image>
      </div>
      <Description>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Description>
    </StyledProductItem>
  );
};

export default ProductItem;
