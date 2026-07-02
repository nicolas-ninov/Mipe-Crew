function CTA() {
  return (
    <section className="cta" id="contato">
      <div className="container">
        <span className="tag">Vamos construir algo marcante?</span>

        <h2>Pronto para destacar sua concessionária no digital?</h2>

        <p>
          Fale com a Mipe Crew e descubra como vídeos profissionais podem
          valorizar seu estoque, fortalecer sua presença online e gerar mais
          interesse nos seus veículos.
        </p>

        <div className="cta-actions">
          <a
            className="btn primary"
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>

          <a className="btn secondary" href="#portfolio">
            Ver portfólio
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;