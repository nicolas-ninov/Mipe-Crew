import bmwHero from "../assets/images/bmwHero.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bmwHero})` }}
    >
      <div className="container-wide">
        <div className="hero-content">
          <span className="tag">Conteúdo automotivo profissional</span>

          <h1>Seus veículos merecem mais atenção.</h1>

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