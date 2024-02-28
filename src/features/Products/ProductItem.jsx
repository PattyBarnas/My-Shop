import React, { useContext } from "react";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import tShirtImg from "../../data/Images/t-shirt-2.jpg";
import { useCart } from "../../store/CartContext";

const StyledProductItem = styled.li`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 85%;
  height: 100%;
  list-style: none;
  gap: 1.6rem;
  margin: 0 auto;
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
  width: 100%;
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  width: 65%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 4px 16px 24px rgba(0, 0, 0, 0.1);
`;

const StyledCartButton = styled.button`
  padding: 1.4rem 0rem;
  width: 90%;
  background-color: #c92a2a;
  color: #fff;
  border: 1px solid #c92a2a;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
`;

const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductItem = ({ product }) => {
  const { cart, onAddItem, onCartOpen } = useCart();
  return (
    <StyledProductItem>
      <StyledProductContainer>
        <div>
          <Image src={tShirtImg} alt="T-shirt Image"></Image>
        </div>
        <div></div>
        <Description>
          <Title>{product.title}</Title>
          <Price>${product.price}</Price>
          <p>{product.color}</p>
          <p>{product.description}</p>
          <p>{product.size}</p>

          <StyledCartButton
            onClick={() => {
              onAddItem(product);
              onCartOpen();
            }}
          >
            ADD TO CART
          </StyledCartButton>
        </Description>
      </StyledProductContainer>
    </StyledProductItem>
  );
};

export default ProductItem;
