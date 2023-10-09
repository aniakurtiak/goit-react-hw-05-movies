import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutWrap, Navigation } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrap>
      <header>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Navigation>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </LayoutWrap>
  );
};
export default Layout;
