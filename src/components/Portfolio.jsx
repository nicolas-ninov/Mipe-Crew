import { portfolioItems } from "../data/portifolio";

function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2>Produções automotivas criadas para destacar veículos.</h2>

          <p>
            Uma prévia dos conteúdos produzidos para valorizar design,
            acabamento, presença visual e diferenciais de cada veículo.
          </p>
        </div>

        <div className="video-grid">
          {portfolioItems.map((item) => (
            <article className="video-card" key={item.title}>
              <iframe
                src={item.embedUrl}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;