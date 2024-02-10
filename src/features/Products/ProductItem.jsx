import React from "react";
import styled from "styled-components";

const ProductItem = ({ title, color, size, quantity }) => {
  return (
    <StyledProductItem>
      <div>
        <Image alt="T-shirt Image"></Image>
      </div>
      <div>
        <Title>{title}</Title>
        <Span>
          {color} / {size}
        </Span>
        <Button>+</Button>
        {quantity}
        <Button>-</Button>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
