import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { routes } from 'routes';
import Loader from 'components/Loader';
import { Container, Header, Nav, NavItem, Footer } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header as="header">
        <Nav as="nav">
          <NavItem to={routes.HOME} end>
            Home
          </NavItem>
          <NavItem to={routes.MOVIES}>Movies</NavItem>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer>FOOTER</Footer>
    </Container>
  );
}
