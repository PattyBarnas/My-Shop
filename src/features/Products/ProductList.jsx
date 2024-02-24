import React from "react";
import { Link } from "react-router-dom";

import ProductItem from "./ProductItem";

import styled from "styled-components";
import "./ProductList.css";
import tShirtImg from "../../data/Images/t-shirt-2.jpg";

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 95%;
`;
const Image = styled.img`
  margin-left: 1.2rem;
  width: 20rem;
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
  text-decoration: none;
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

const ProductList = ({ products }) => {
  return (
    <div>
      <StyledUL>
        {products.map((prod) => (
          <li className="product-item" key={prod.id} id={prod.id}>
            <Link to={`/products/${prod.id}`}>
              <div>
                <Image src={tShirtImg} alt={prod.image} />
              </div>
              <Description>
                <p>{prod.description}</p>
                <Price>{prod.price}</Price>
              </Description>
            </Link>
          </li>
        ))}
      </StyledUL>
    </div>
  );
};

export default ProductList;
