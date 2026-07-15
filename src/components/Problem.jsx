import { EyeOff, Smartphone, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    title: "Conteúdo que não chama atenção",
    text: "Fotos e vídeos genéricos fazem veículos diferentes parecerem iguais nas redes sociais.",
  },
  {
    icon: EyeOff,
    title: "Estoque com menor percepção de valor",
    text: "Quando os detalhes não são bem apresentados, acabamento, design e diferenciais passam despercebidos.",
  },
  {
    icon: TrendingDown,
    title: "Menos interesse antes da visita",
    text: "Sem uma apresentação profissional, o comprador tem menos motivos para entrar em contato ou visitar a loja.",
  },
];

function Problem() {
  return (
    <section className="section problem-section">
      <div className="container problem-layout">
        <div className="problem-copy">
          <span className="section-label">O desafio</span>

          <h2>
            Seu estoque pode estar sendo ignorado antes mesmo do cliente visitar
            a loja.
          </h2>

          <p>
            No mercado automotivo, a decisão começa no digital. Quando fotos,
            vídeos e anúncios não valorizam o veículo, carros bons parecem
            comuns e deixam de gerar interesse real nos compradores.
          </p>
        </div>

        <div className="problem-panel">
          {problems.map(({ icon: Icon, title, text }) => (
            <article className="problem-item" key={title}>
              <div className="problem-icon">
                <Icon size={25} strokeWidth={1.8} />
              </div>

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problem;