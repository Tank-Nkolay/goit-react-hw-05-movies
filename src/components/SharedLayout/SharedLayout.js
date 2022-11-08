import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { routes } from 'routes';
import Loader from 'components/Loader';
import Logo from '../../images/logoKino.png';
import {
  Container,
  Header,
  Navigation,
  StyledLogo,
  NavigationItem,
  Footer,
  NavBox,
  LogoBox,
  LogoSpan,
} from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <Navigation>
          <LogoBox to="/">
            <StyledLogo src={Logo} alt="logo" />
            <LogoSpan>Pokemon FILM</LogoSpan>
          </LogoBox>
          <NavBox>
            <NavigationItem to={routes.HOME} end>
              HOME
            </NavigationItem>
            <NavigationItem to={routes.MOVIES}>MOVIES</NavigationItem>
          </NavBox>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer>FOOTER</Footer>
    </Container>
  );
}
