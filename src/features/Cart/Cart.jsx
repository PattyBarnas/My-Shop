import styled, { keyframes } from "styled-components";
import CartItem from "../Cart/CartItem";
import { useCart } from "../../store/CartContext";

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
  const { cart } = useCart();

  return (
    <StyledCart>
      <h1>Your Cart</h1>
      <hr />
      {cart.map((item) => {
        return (
          <CartItem
            key={item._id}
            id={item._id}
            title={item.title}
            size={item.size}
            quantity={1}
            color={item.color}
            price={item.price}
          />
        );
      })}

      <hr />
    </StyledCart>
  );
}

export default Cart;
