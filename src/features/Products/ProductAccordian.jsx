import React, { useMemo, useState } from "react";
import { useCart } from "../../store/CartContext";
import styled from "styled-components";
import "./ProductAccordion.css";

const StyledAccordionButton = styled.button`
  width: 100%;
  padding: 1.2rem;

  display: block;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #888;
  color: #555;
  cursor: pointer;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
`;

function ProductAccordian({ product }) {
  const cart = useCart();
  const [isActiveIndex, setIsActiveIndex] = useState();
  const [isActive, setIsActive] = useState(false);
  //   const active = isActiveIndex ? "active" : "hidden";

  const handleActiveAccordion = function (e) {
    const userInput = e.target.id;

    setIsActiveIndex(userInput);
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <StyledAccordionButton id={1} onClick={handleActiveAccordion}>
          Product Details
        </StyledAccordionButton>
        <div
          className={`${
            isActiveIndex === "1" && isActive ? "active" : "hidden"
          }`}
        >
          <p>{product.color}</p>
          <p>{product.description}</p>
          {/* <p>{product.size}</p> */}
        </div>
      </div>
      <div>
        <StyledAccordionButton id={2} onClick={handleActiveAccordion}>
          Shipping Details
        </StyledAccordionButton>
        <div
          className={`${
            isActiveIndex === "2" && isActive ? "active" : "hidden"
          }`}
        >
          <p>
            Shipping Time: 2 - 5 weeks Customs Notice: All customers outside of
            the United States are responsible for the customers fees/duties that
            may be charged by their country for import. This amount may vary
            depending on your country.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductAccordian;
