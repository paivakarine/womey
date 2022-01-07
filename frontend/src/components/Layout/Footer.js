import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Logo from "../../assets/images/favicon.png"

const Footer = () => {
  return (
    <Wrap>
      <Container className="d-flex flex-column flex-lg-row align-items-center">
        <Link to="/" className="mr-lg-auto">
          <img src={Logo} alt="Womey" />
        </Link>
        <Nav className="flex-column flex-lg-row">
          <LinkStyled
            to="#"
            target="_blank"
            rel="noreferrer noopener"
            className="px-2"
          >
            Termos de uso
          </LinkStyled>
          <LinkStyled
            to="#"
            target="_blank"
            rel="noreferrer noopener"
            className="px-2"
          >
            <FaInstagram size="40" />
          </LinkStyled>
          <LinkStyled
            to="#"
            target="_blank"
            rel="noreferrer noopener"
            className="px-2"
          >
            <FaFacebookSquare size="40" />
          </LinkStyled>
        </Nav>
      </Container>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.footer`
  background-color: var(--layout-footer);
  padding: 30px 0;
`;


const LinkStyled = styled(Link)`
    color: var(--color-light);
    display: flex;
    align-items: center;
`