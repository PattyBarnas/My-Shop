import React, { useMemo, useState } from "react";
import { useCart } from "../../store/CartContext";
import styled from "styled-components";
import "./ProductAccordion.css";

const StyledAccordionButton = styled.button`
  width: 42%;
  padding: 1.2rem;
  display: block;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #e9ecef;
  color: #666;
  cursor: pointer;
  font-size: 1.2rem;
  text-align: left;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
`;

const Div = styled.div`
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 1.6rem;
`;

const P = styled.p`
  margin: 0 auto;
  font-size: 1.2rem;
  font-weight: 500;
  width: 70%;
`;

function ProductAccordian({ product }) {
  const cart = useCart();
  const [isActiveIndex, setIsActiveIndex] = useState({
    tab1: false,
    tab2: false,
  });

  //   const active = isActiveIndex ? "active" : "hidden";

  const handleActiveAccordion = function (e) {
    const userInput = e.target.id;

    console.log(isActiveIndex, "ai");

    if (userInput === "1") {
      setIsActiveIndex({ tab1: !isActiveIndex.tab1 });
    }
    if (userInput === "2") {
      setIsActiveIndex({ tab2: !isActiveIndex.tab2 });
    }
  };

  return (
    <Div>
      <div>
        <StyledAccordionButton id={1} onClick={handleActiveAccordion}>
          Product Details
        </StyledAccordionButton>
        <Div className={`${isActiveIndex.tab1 ? "active" : "hidden"}`}>
          <P>{product.color}</P>
          <P>{product.description}</P>
          {/* <p>{product.size}</p> */}
        </Div>
      </div>
      <div>
        <StyledAccordionButton id={2} onClick={handleActiveAccordion}>
          Shipping Details
        </StyledAccordionButton>
        <div className={`${isActiveIndex.tab2 ? "active" : "hidden"}`}>
          <P>
            Shipping Time: 2 - 5 weeks Customs Notice: All customers outside of
            the United States are responsible for the customers fees/duties that
            may be charged by their country for import. This amount may vary
            depending on your country.
          </P>
        </div>
      </div>
    </Div>
  );
}

export default ProductAccordian;
