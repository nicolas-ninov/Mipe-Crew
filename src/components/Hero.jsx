function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="tag">Conteúdo automotivo profissional</span>

          <h1>Vídeos que fazem seus veículos chamarem atenção antes da visita.</h1>

          <p>
            Produzimos conteúdos visuais para concessionárias que querem apresentar
            melhor seus carros, aumentar a percepção de valor do estoque e gerar
            mais interesse nos clientes antes mesmo do primeiro contato.
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