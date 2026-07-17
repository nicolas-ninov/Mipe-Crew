import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        
        <a
          href="https://www.instagram.com/mipecrewfilms/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
          aria-label="Acessar o Instagram da Mipe Crew"
        >
          <FaInstagram className="instagram-icon" />
          <span>@mipecrew</span>
        </a>

        <p>© 2026 Mipe Crew. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;