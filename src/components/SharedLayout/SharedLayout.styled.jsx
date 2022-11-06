import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.div`
  background-color: #9bb9f4;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const NavigationItem = styled(NavLink)`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
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
