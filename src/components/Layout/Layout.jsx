import { NavLink, Outlet } from 'react-router-dom';
import { LayoutWrap, Navigation } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <header>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Navigation>
      </header>
      <Outlet />
    </LayoutWrap>
  );
};
