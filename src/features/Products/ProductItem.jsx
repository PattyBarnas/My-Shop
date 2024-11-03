import React, { useContext, useState } from "react";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import tShirtImg from "../../data/Images/t-shirt.jpg";
import { useCart } from "../../store/CartContext";
import ProductAccordian from "./ProductAccordian";

const StyledProductItem = styled.li`
  width: 85%;
  height: 100%;
  list-style: none;
  gap: 1.6rem;
  margin: 6.2rem auto 0;
`;
const Title = styled.p`
  margin: 0;
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
`;
const Price = styled.p`
  font-size: 2rem;
  color: #0b7285;
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
  padding: 1.8rem;
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  width: 60rem;
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

const StyledDiv = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 1.2rem;
`;

const StyledSizeButton = styled.button`
  padding: 1.2rem 2.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #e9ecef;
  border: none;
  cursor: pointer;
  margin-bottom: 2.2rem;
`;

const ProductItem = ({ product }) => {
  const { cart, onAddItem, onCartOpen, size, setSize } = useCart();

  function handleSetSize(e) {
    const userInput = e.target.id;
    const userSizeSelected = e.target.value;

    if (userInput === "1") {
      setSize(userSizeSelected);
    }
    if (userInput === "2") {
      setSize(userSizeSelected);
    }
    if (userInput === "3") {
      setSize(userSizeSelected);
    }
    if (userInput === "4") {
      setSize(userSizeSelected);
    }
  }

  return (
    <StyledProductItem>
      <StyledProductContainer>
        <div>
          <Image src={product.image} alt="T-shirt Image"></Image>
        </div>

        <Description>
          <Title>{product.title}</Title>
          <Price>${product.price}</Price>
          <p
            style={{
              fontSize: `1.4rem`,
              fontWeight: "500",
            }}
          >
            SELECT SIZE:
          </p>
          <StyledDiv>
            <StyledSizeButton
              id={1}
              className={size === "small" ? "active" : ""}
              value="small"
              onClick={handleSetSize}
            >
              S
            </StyledSizeButton>

            <StyledSizeButton
              id={2}
              className={size === "medium" ? "active" : ""}
              value="medium"
              onClick={handleSetSize}
            >
              M
            </StyledSizeButton>

            <StyledSizeButton
              id={3}
              className={size === "large" ? "active" : ""}
              value="large"
              onClick={handleSetSize}
            >
              L
            </StyledSizeButton>

            <StyledSizeButton
              id={4}
              className={size === "x-large" ? "active" : ""}
              value="x-large"
              onClick={handleSetSize}
            >
              XL
            </StyledSizeButton>
          </StyledDiv>
          <ProductAccordian product={product} />

          <StyledCartButton
            onClick={() => {
              onAddItem(product, size);
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
