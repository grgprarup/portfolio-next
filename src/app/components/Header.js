import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Portfolio</h1>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
