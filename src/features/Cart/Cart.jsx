import styled, { keyframes } from "styled-components";
import CartItem from "../Cart/CartItem";
import { useCart } from "../../store/CartContext";
import { useNavigate } from "react-router-dom";

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
  width: 27.5%;
  height: 100%;
  text-align: center;
  animation: ${slideIn} 0.2s;
  z-index: 1;
  overflow: scroll;
`;

const StyledCartP = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

function Cart({ children }) {
  const { cart, onCartOpen } = useCart();
  const navigate = useNavigate();

  return (
    <StyledCart>
      <h1>Your Cart</h1>
      <hr />
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <CartItem
              key={item.product._id}
              id={item.product._id}
              title={item.product.title}
              size={item.product.size}
              quantity={item.qty}
              color={item.product.color}
              price={item.product.price}
            />
          );
        })
      ) : (
        <div>
          <StyledCartP>Your Cart is empty! Check out our store.</StyledCartP>
          <button
            onClick={() => {
              navigate("/");
              onCartOpen();
            }}
          >
            STORE 👈🏼
          </button>
        </div>
      )}
    </StyledCart>
  );
}

export default Cart;
