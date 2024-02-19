import styled, { keyframes } from "styled-components";
import CartItem from "../Cart/CartItem";

const slideIn = keyframes`
0%{
  width: 0%;
}

100%{
  width: 30%;
}`;
const slideOut = keyframes`
0%{
  width: 30%;
}

100%{
  width: 0%;
}`;

const StyledCart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  width: 30%;
  height: 100%;
  text-align: center;
  animation: ${slideIn} 0.2s;
  z-index: 1;
`;

function Cart({ children }) {
  return (
    <StyledCart>
      <h1>Your Cart</h1>
      <hr />
      <CartItem
        title={"Step Dad T-shirt"}
        size={"Large"}
        quantity={1}
        color={"red"}
      />
      <hr />
    </StyledCart>
  );
}

export default Cart;
