import React, { useState } from "react";
import Cart from "../features/Cart/Cart";
import Button from "./Button";
import styled from "styled-components";
import CartIcon from "../features/Icons/CartIcon";
import UserIcon from "../features/Icons/UserIcon";

const StyledNav = styled.nav`
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
  margin: 0 auto;
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
  return (
    <StyledNav>
      <UL>
        <LogoDiv>
          <span>LOGO</span>
        </LogoDiv>
        <StyledList>
          <StyledAnchor href="/account/login">
            <UserIcon />
            <span>Account</span>
          </StyledAnchor>
        </StyledList>

        <StyledList>
          <Button onClick={props.onClick}>
            <StyledDiv>
              <CartIcon />
              <ButtonSpan>Cart</ButtonSpan>
            </StyledDiv>
          </Button>
        </StyledList>
      </UL>
    </StyledNav>
  );
}

export default NavBar;
