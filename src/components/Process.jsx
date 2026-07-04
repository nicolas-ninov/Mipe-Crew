const steps = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Entendemos os objetivos da concessionária, o público-alvo e os diferenciais dos veículos antes de iniciar a produção.",
  },
  {
    number: "02",
    title: "Captação",
    description:
      "Realizamos gravações com foco em iluminação, enquadramento e movimento para destacar cada detalhe do veículo.",
  },
  {
    number: "03",
    title: "Edição",
    description:
      "Transformamos as imagens em vídeos dinâmicos, prontos para redes sociais, anúncios e campanhas digitais.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Você recebe o material otimizado e pronto para publicar, fortalecendo sua presença digital e valorizando seu estoque.",
  },
];

function Process() {
  return (
    <section className="section">
      <div className="container">
        <h2>Como transformamos veículos em conteúdo de impacto.</h2>

        <p className="section-text">
          Cada projeto segue um processo pensado para garantir qualidade,
          agilidade e um resultado que represente o padrão da sua concessionária.
        </p>

        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <span>{step.number}</span>

              <h3>{step.title}</h3>

              <hr />

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;