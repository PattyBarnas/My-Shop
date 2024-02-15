import React from "react";
import ProductItem from "./ProductItem";
import TShirt from "../../data/Images/t-shirt.jpg";
import TShirt2 from "../../data/Images/t-shirt-2.jpg";
import TShirt3 from "../../data/Images/t-shirt-3.jpg";
import TShirt4 from "../../data/Images/t-shirt-4.jpg";
import styled from "styled-components";

const temp = [
  {
    id: `${Math.trunc(Math.random() * 1000)}`,
    image: `${TShirt}`,
    title: "Black t-shirt 705 collab.",
    color: "Black/White",
    size: "Large",
    description: "100% cotton original t-shirt",
    price: 30.0,
  },
  {
    id: `${Math.trunc(Math.random() * 1000)}`,
    image: `${TShirt2}`,
    title: "Clean white t-shirt short sleeve.",
    color: "red",
    size: "medium",
    description: "100% cotton original t-shirt",
    price: 26.0,
  },
  {
    id: `${Math.trunc(Math.random() * 1000)}`,
    image: `${TShirt3}`,
    title: "KJJXII Original T-shirt",
    color: "blue",
    size: "small",
    description: "100% cotton original t-shirt",
    price: 45.0,
  },
  {
    id: `${Math.trunc(Math.random() * 1000)}`,
    image: `${TShirt4}`,
    title: "long sleeve T-shirt",
    color: "red",
    size: "large",
    description: "100% cotton original t-shirt",
    price: 50.0,
  },
];

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 95%;
`;

const ProductList = () => {
  return (
    <StyledUL>
      {temp.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          image={prod.image}
          title={prod.title}
          description={prod.description}
          size={prod.size}
          color={prod.color}
          price={prod.price}
        />
      ))}
    </StyledUL>
  );
};

export default ProductList;
