import React from "react";
import { Link } from "react-router-dom";

import ProductItem from "./ProductItem";

import styled from "styled-components";
import "./ProductList.css";
import tShirtImg from "../../data/Images/t-shirt.jpg";

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 95%;
  text-decoration: none;
  gap: 1.8rem;
  margin-bottom: 5.4rem;
`;

const StyledLi = styled.li`
  display: flex;
  border-radius: 12px;
  box-shadow: 2px 12px 18px rgba(0, 0, 0, 0.05);

  overflow: hidden;
`;
const Image = styled.img`
  width: 45rem;
  height: 100%;
`;
const StyledProductItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  height: 100%;
  list-style: none;
  gap: 1.6rem;
`;
const Price = styled.p`
  font-size: 2rem;
  color: green;
  font-weight: 500;
  text-decoration: none;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledH3 = styled.h3`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 500;
  /* width: 73.5%; */
  margin: 2.2rem auto;
`;

const ProductList = ({ products }) => {
  return (
    <div>
      <StyledH3>Products.</StyledH3>
      <StyledUL>
        {products.map((prod) => (
          <StyledLi key={prod.id} id={prod.id}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/products/${prod.id}`}
            >
              <div>
                <Image src={tShirtImg} alt={prod.image} />
              </div>
              <Description>
                <p>{prod.description}</p>
                <Price>{prod.price}</Price>
              </Description>
            </Link>
          </StyledLi>
        ))}
      </StyledUL>
    </div>
  );
};

export default ProductList;
