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
const StyledCartHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`;

const StyledCartP = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 4.4rem auto;
`;
const StyledPText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2.2rem;
`;
const StyledCartButton = styled.button`
  padding: 1.6rem;
  width: 90%;
  background-color: transparent;
  font-weight: 700;
  cursor: pointer;
`;

const StyledCheckoutDiv = styled.div`
  display: flex;
  padding: 1.8rem;
  font-size: 1.6rem;
  justify-content: space-between;
`;
const StyledSubTotal = styled.p``;
const StyledCheckOutBtn = styled.button`
  padding: 1.4rem 0rem;
  width: 93%;
  background-color: #c92a2a;
  color: #111;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 2px;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
`;

function Cart({ children }) {
  const { cart, onCartOpen } = useCart();
  const navigate = useNavigate();

  let totalAmount = cart.reduce((acc, item) => {
    return (acc += item.price * item.qty);
  }, 0);

  let totalItemQty = cart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  const totalItemsText = totalItemQty === 1 ? "item" : "items";
  console.log(cart, "cart");
  return (
    <StyledCart>
      <StyledCartHeader>YOUR CART</StyledCartHeader>
      <hr />

      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <ul key={item.product._id}>
              <CartItem
                key={item.product._id}
                id={item.product._id}
                title={item.product.title}
                size={item.size}
                quantity={item.qty}
                color={item.product.color}
                price={item.product.price}
              />
            </ul>
          );
        })
      ) : (
        <div>
          <StyledCartP>Your Cart is empty!</StyledCartP>
          <StyledPText>Add your favorite items to your cart!</StyledPText>
          <StyledCartButton
            onClick={() => {
              navigate("/");
              onCartOpen();
            }}
          >
            SHOP NOW 👈🏼
          </StyledCartButton>
        </div>
      )}
      {cart.length > 0 && (
        <div>
          <StyledCheckoutDiv>
            <StyledSubTotal>
              Subtotal ({totalItemQty}) {totalItemsText}
            </StyledSubTotal>
            <p> Total: ${totalAmount}</p>
          </StyledCheckoutDiv>
          <div>
            <StyledCheckOutBtn onClick={() => navigate("/checkout")}>
              CHECKOUT
            </StyledCheckOutBtn>
          </div>
        </div>
      )}
    </StyledCart>
  );
}

export default Cart;
