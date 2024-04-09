import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import DeleteIcon from "../Icons/DeleteIcon";
import { useCart } from "../../store/CartContext";
import img from "../../data/Images/t-shirt.jpg";
import toast from "react-hot-toast";

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 35%;
  list-style: none;
  gap: 2.4rem;
  margin: 1.2rem auto;
  overflow: hidden;
  scroll-behavior: auto;
`;
const Title = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-bottom: 0.6rem;
`;

const Image = styled.img`
  height: 20rem;
  width: 100%;
  padding: 1.2rem;
`;

const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-bottom: 1.2rem;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

const Span = styled.span`
  color: green;
  font-size: 1.6rem;
`;

const QuantitySpan = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0 1.2rem;
  border: 1px solid #888;
  border-radius: 2px;
  margin: 0 0.6rem;
`;

const QuantityButtons = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 6px;
  font-size: 2rem;
  cursor: pointer;
`;

const DescriptionDiv = styled.div`
  margin: 0 auto;
`;

const StlyedHr = styled.hr`
  width: 90%;
`;

const itemDeletedNotify = () =>
  toast.success("Item has been removed from cart.", {
    style: {
      minWidth: "250px",
      height: "4rem",
      fontSize: "1.4rem",
    },
  });

function CartItem({ id, image, price, title, color, size, quantity }) {
  const { cart, onRemoveItem, onUpdateQuantity } = useCart();

  return (
    <>
      <StyledCartItem key={id}>
        <div>
          <Image src={image} alt="T-shirt Image" />
        </div>
        <DescriptionDiv>
          <Title>{title}</Title>
          <p>
            {color} / {size}
          </p>
          <div>
            <QuantityButtons
              value="decrease"
              onClick={(e) => onUpdateQuantity(id, e)}
            >
              -
            </QuantityButtons>
            <QuantitySpan>{quantity}</QuantitySpan>
            <QuantityButtons
              value="increase"
              onClick={(e) => {
                onUpdateQuantity(id, e);
              }}
            >
              +
            </QuantityButtons>
          </div>
        </DescriptionDiv>
        <StyledDiv>
          <RemoveBtn
            onClick={() => {
              onRemoveItem(id);
              itemDeletedNotify("Here is your toast.");
            }}
          >
            <DeleteIcon />
          </RemoveBtn>
          <Span>${price}</Span>
        </StyledDiv>
      </StyledCartItem>
      <StlyedHr />
    </>
  );
}

export default CartItem;
