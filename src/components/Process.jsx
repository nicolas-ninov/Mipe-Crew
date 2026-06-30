const steps = [
  "Planejamento",
  "Captação",
  "Entrega",
  "Recorrência",
];

function Process() {
  return (
    <section className="section">
      <div className="container">
        <h2>Como trabalhamos</h2>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;