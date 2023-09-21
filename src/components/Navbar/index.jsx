// styled components
import { NavbarStyled, Brand, BrandSpan, LinksList, LinkStyled } from "./syle";

// hook
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <NavbarStyled>
      <Brand to="/">
        Mini <BrandSpan>Blog</BrandSpan>
      </Brand>
      <LinksList>
        <li>
          <LinkStyled to="/">Home</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/about">About</LinkStyled>
        </li>

        {user ? (
          <>
            <li>
              <LinkStyled to="/dashboard">Dashboard</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/posts/create">New Post</LinkStyled>
            </li>
            <li>
              <button onClick={logout}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <LinkStyled to="/Login">Login</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/register">Register</LinkStyled>
            </li>
          </>
        )}
      </LinksList>
    </NavbarStyled>
  );
};

export default Navbar;
