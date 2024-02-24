import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import DeleteIcon from "../Icons/DeleteIcon";
import { useCart } from "../../store/CartContext";

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
  margin-bottom: 0.6rem;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Span = styled.span``;

function CartItem({ id, image, price, title, color, size, quantity }) {
  const { cart, onRemoveItem } = useCart();

  return (
    <StyledCartItem key={id}>
      <div>
        <Image src={image} alt="T-shirt Image" />
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
      <div>
        <button onClick={() => onRemoveItem(id)}>
          <DeleteIcon />
        </button>
        <p>${price}</p>
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
