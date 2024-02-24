import React, { useContext } from "react";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import tShirtImg from "../../data/Images/t-shirt-2.jpg";
import { useCart } from "../../store/CartContext";

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

const ProductItem = ({ product }) => {
  const { cart, onAddItem } = useCart();

  return (
    <StyledProductItem>
      <div>{<Image src={tShirtImg} alt="T-shirt Image"></Image>}</div>
      <Description>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <p>{product.color}</p>
        <p>{product.description}</p>
        <p>{product.size}</p>
        <button
          onClick={() => {
            onAddItem(product);
          }}
        >
          ADD TO CART
        </button>
      </Description>
    </StyledProductItem>
  );
};

export default ProductItem;
