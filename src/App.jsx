import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
