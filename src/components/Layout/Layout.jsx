import { NavLink, Outlet } from "react-router-dom";
import { Header, Navigation, Wrapper } from "./Layout.styled";

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Navigation>
      </Header>
      <Outlet />
    </Wrapper>
  );
};
