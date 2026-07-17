import { useEffect, useRef } from "react";

import heroVideo from "../assets/videos/hero-porsche8s.mp4";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section className="hero">
      {/* Vídeo de fundo */}
      <div className="hero-video">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>

      {/* Overlay escuro */}
      <div className="hero-overlay"></div>

      {/* Conteúdo */}
      <div className="container-wide">
        <div className="hero-content">
          <span className="tag">Conteúdo automotivo profissional</span>

          <h1>Seus veículos merecem mais atenção</h1>

          <p>
            Produzimos conteúdos visuais para concessionárias que querem
            valorizar seu estoque e gerar mais interesse antes mesmo do primeiro
            contato.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#contato">
              Solicitar orçamento
            </a>

            <a className="btn secondary" href="#portfolio">
              Ver portfólio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;