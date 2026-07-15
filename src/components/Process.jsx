const steps = [
  {
    number: "01",
    title: "Briefing",
    text: "Entendemos os objetivos da concessionária, o público-alvo e os diferenciais dos veículos antes de iniciar a produção.",
  },
  {
    number: "02",
    title: "Captação",
    text: "Realizamos gravações com foco em iluminação, enquadramento e movimento para destacar cada detalhe do veículo.",
  },
  {
    number: "03",
    title: "Edição",
    text: "Transformamos as imagens em vídeos dinâmicos, prontos para redes sociais, anúncios e campanhas digitais.",
  },
  {
    number: "04",
    title: "Entrega",
    text: "Você recebe o material otimizado e pronto para publicar, fortalecendo sua presença digital e valorizando seu estoque.",
  },
];

function Process() {
  return (
    <section className="section">
      <div className="container">
        <div className="process-header">
          <h2>
            Como transformamos veículos em conteúdo de impacto
          </h2>

          <p>
            Cada projeto segue um processo pensado para garantir qualidade,
            agilidade e um resultado que represente o padrão da sua
            concessionária.
          </p>
        </div>

        <div className="steps">
          {steps.map(({ number, title, text }) => (
            <article className="step" key={number}>
              <span>{number}</span>

              <h3>{title}</h3>

              <hr />

              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;