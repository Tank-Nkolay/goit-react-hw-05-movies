import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { routes } from 'routes';
import Loader from 'components/Loader';
import Logo from '../../images/logo-film.png';
import {
  Container,
  Header,
  Navigation,
  NavigationItem,
  Footer,
} from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <Navigation>
          <div to="/">
            <StyledLogo src={Logo} alt="logo" />
            <span>Movie Time</span>
          </div>
          <NavigationItem to={routes.HOME} end>
            HOME
          </NavigationItem>
          <NavigationItem to={routes.MOVIES}>MOVIES</NavigationItem>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer>FOOTER</Footer>
    </Container>
  );
}
