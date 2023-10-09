import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutWrap, Navigation } from './Layout.styled';
import { GlobalStyle } from 'components/GlobalStyle';

const Layout = () => {
  return (
    <LayoutWrap>
      <header>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Navigation>
      </header>
      <GlobalStyle />
      <Suspense>
        <Outlet />
      </Suspense>
    </LayoutWrap>
  );
};
export default Layout;
