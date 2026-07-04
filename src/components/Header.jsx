import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-content">
        <a href="/" className="brand">
          <img src={logo} alt="Mipe Crew" className="logo" />
          <strong>Mipe Crew</strong>
        </a>

        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;