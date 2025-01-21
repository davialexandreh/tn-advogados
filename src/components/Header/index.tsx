import { useState } from "react";
import Logo from "../../assets/logo_white_transparent.png";
import { Container } from "./styles";
import { Link } from "react-scroll";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollProps = {
    smooth: true,
    duration: 900,
    offset: -70,
  };

  return (
    <Container>
      <Link to="home" {...scrollProps} className="header-link">
        <img alt="logo" src={Logo} />
      </Link>

      {/* Botão do menu hamburger */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Menu */}
      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="home" {...scrollProps} onClick={() => setMenuOpen(false)}>
            Início
          </Link>
        </li>
        <li>
          <Link to="office" {...scrollProps} onClick={() => setMenuOpen(false)}>
            Escritório
          </Link>
        </li>
        <li>
          <Link
            to="performance"
            {...scrollProps}
            onClick={() => setMenuOpen(false)}
          >
            Atuaçãokk
          </Link>
        </li>
        <li>
          <Link
            to="contacts"
            {...scrollProps}
            onClick={() => setMenuOpen(false)}
          >
            Contatos
          </Link>
        </li>
      </ul>
    </Container>
  );
}
