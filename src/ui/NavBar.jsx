import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import CartIcon from "../features/Icons/CartIcon";
import UserIcon from "../features/Icons/UserIcon";
import Cart from "../features/Cart/Cart";
import Backdrop from "./Backdrop";
import { useNavigate } from "react-router-dom";

const StyledNav = styled.nav`
  position: relative;
  padding: 1.2rem;
`;

const ButtonSpan = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  column-gap: 2.4rem;
  list-style: none;
`;

const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const LogoDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledAnchor = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.6rem;

  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  font-size: 0.8rem;
  font-weight: 600;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.6rem;
`;

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleCartOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledNav>
      <LogoDiv>
        <button onClick={() => navigate("/")}>
          <span>LOGO x Patty</span>
        </button>
      </LogoDiv>
      <UL>
        <StyledList>
          <StyledAnchor href="/account/login">
            <UserIcon />
            <span>Account</span>
          </StyledAnchor>
        </StyledList>

        <StyledList>
          <Button onClick={handleCartOpen}>
            <StyledDiv>
              <CartIcon />
              <ButtonSpan>Cart</ButtonSpan>
            </StyledDiv>
          </Button>
        </StyledList>
      </UL>
      {isOpen && <Cart />}
      {isOpen && <Backdrop onClick={handleCartOpen} />}
    </StyledNav>
  );
}

export default NavBar;
