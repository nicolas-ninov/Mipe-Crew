import { portfolioItems } from "../data/portifolio";

function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2>Portfólio em construção com produções reais.</h2>

        <p className="section-text">
          Em breve, esta seção contará com vídeos reais produzidos para veículos
          e concessionárias parceiras. Por enquanto, estamos estruturando a
          apresentação visual da Mipe Crew.
        </p>

        <div className="video-grid">
          {portfolioItems.map((item) => (
            <article className="video-card" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;