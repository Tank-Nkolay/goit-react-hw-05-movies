import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.div`
  background-color: #9bb9f4;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const NavItem = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;

  color: #ffffff;
  text-decoration: none;

  &.active {
    color: #ff001b;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ff001b;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #9bb9f4;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
