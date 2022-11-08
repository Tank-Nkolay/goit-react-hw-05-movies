import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1000 px;
`;

export const Header = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1000;
  box-shadow: rgb(0 0 0 / 16%) 4px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
  background-color: #9bb9f4;
  padding-left: 32px;
  padding-right: 32px;
  width: 1000 px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: 1000 px;
`;

export const StyledLogo = styled.img`
  width: 64px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoSpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #0e0f69;
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const NavigationItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: white;
  &.active {
    color: #0e0f69;
  }
  :hover,
  :focus {
    color: #0e0f69;
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
  font-weight: 700;
  font-size: 16px;
  color: white;
`;
