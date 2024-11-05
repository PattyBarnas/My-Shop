import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import CartIcon from "../features/Icons/CartIcon";
import UserIcon from "../features/Icons/UserIcon";
import SettingsIcon from "../features/Icons/SettingsIcon";
import Cart from "../features/Cart/Cart";
import Backdrop from "./Backdrop";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { useCart } from "../store/CartContext";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../store/AuthContext";

const StyledNav = styled.nav`
  position: relative;
  padding: 1.8rem;
`;

const ButtonSpan = styled.p`
  font-size: 1.3rem;
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
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  font-size: 1.3rem;
  font-weight: 600;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

const StyledLogo = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
`;

const P = styled.p`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0 auto 0 0;
`;

function NavBar(props) {
  const { onCartOpen, isOpen } = useCart();
  const { handleLogout } = useAuth();
  const token = useRouteLoaderData("root");
  const navigate = useNavigate();
  const user = token && jwtDecode(token);

  return (
    <StyledNav>
      <LogoDiv>
        <StyledLogo onClick={() => navigate("/")}>
          <span>LOGO x Patty</span>
        </StyledLogo>
      </LogoDiv>
      <UL>
        {token && <P>Welcome back, {user.firstName}!</P>}
        {token && (
          <StyledList>
            <StyledAnchor href="/">
              👤
              <span onClick={() => handleLogout()}>logout</span>
            </StyledAnchor>
          </StyledList>
        )}
        {token && (
          <StyledList>
            <StyledAnchor href="/account/settings">
              <SettingsIcon />
              <span>Settings</span>
            </StyledAnchor>
          </StyledList>
        )}
        {!token && (
          <StyledList>
            <StyledAnchor href="/account/login">
              <UserIcon />
              <span>Account</span>
            </StyledAnchor>
          </StyledList>
        )}

        <StyledList>
          <Button onClick={() => onCartOpen()}>
            <StyledDiv>
              <CartIcon />
              <ButtonSpan>Cart</ButtonSpan>
            </StyledDiv>
          </Button>
        </StyledList>
      </UL>

      {isOpen && <Cart />}
      {isOpen && <Backdrop onClick={() => onCartOpen()} />}
    </StyledNav>
  );
}

export default NavBar;
