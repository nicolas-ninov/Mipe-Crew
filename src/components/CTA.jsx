function CTA() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site da Mipe Crew e gostaria de conhecer melhor os serviços de produção de conteúdo para minha concessionária. Podemos conversar?"
  );

  return (
    <section className="cta" id="contato">
      <div className="container">
        <h2>Pronto para destacar seu estoque?</h2>

        <p>
          Produza conteúdos que valorizam seus veículos, fortalecem sua marca e
          despertam o interesse dos clientes antes mesmo da primeira visita.
        </p>

        <a
          className="btn primary"
          href={`https://wa.me/5548991924827?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

export default CTA;