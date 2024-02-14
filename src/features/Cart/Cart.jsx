import styled from "styled-components";
import CartItem from "../Cart/CartItem";
import Backdrop from "../../ui/Backdrop";

const StyledCart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  width: 25%;
  height: 100%;
  text-align: center;
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
