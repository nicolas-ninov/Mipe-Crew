import { Camera, Clapperboard, Car } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Vídeos que valorizam cada veículo",
    text: "Produções que destacam acabamento, tecnologia, design e diferenciais para aumentar o interesse dos compradores.",
  },
  {
    icon: Clapperboard,
    title: "Conteúdo estratégico para redes sociais",
    text: "Reels, vídeos e materiais prontos para fortalecer a presença digital da concessionária e manter o perfil sempre ativo.",
  },
  {
    icon: Car,
    title: "Apresentação profissional do estoque",
    text: "Conteúdo visual organizado para transmitir mais confiança e facilitar a apresentação dos veículos disponíveis.",
  },
];

function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="services-header">
          <h2>
            Mais do que vídeos: conteúdo que fortalece a imagem da sua
            concessionária
          </h2>

          <p>
            Criamos materiais que ajudam cada veículo a transmitir mais valor,
            fortalecer a presença digital da loja e despertar o interesse do
            comprador antes mesmo da visita.
          </p>
        </div>

        <div className="cards">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <Icon className="card-icon" size={34} strokeWidth={1.8} />

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;