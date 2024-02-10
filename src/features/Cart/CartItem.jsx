import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";

const StyledCartItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 85%;
  height: 25%;
  list-style: none;
  gap: 1.6rem;
`;
const Title = styled.p`
  margin: 0;
  font-size: 1rem;
  background-color: red;
  margin-bottom: 0.6rem;
`;

const Image = styled.img``;

const Span = styled.span``;

function CartItem({ title, color, size, quantity }) {
  return (
    <StyledCartItem>
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
    </StyledCartItem>
  );
}

export default CartItem;
