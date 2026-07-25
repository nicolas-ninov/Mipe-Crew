import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-social">

          <a
            href="https://www.instagram.com/mipecrewfilms/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram da Mipe Crew"
          >
            <FaInstagram className="social-icon" />
            <span>@mipecrewfilms</span>
          </a>

          <a
            href="https://www.tiktok.com/@mipe.crew"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="TikTok da Mipe Crew"
          >
            <FaTiktok className="social-icon" />
            <span>@mipe.crew</span>
          </a>

        </div>

        <div className="footer-info">
          <p>© 2026 Mipe Crew. Todos os direitos reservados.</p>
          <p>CNPJ: 68.182.874/0001-40</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;