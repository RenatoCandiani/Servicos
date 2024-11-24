import React from "react";
import "./App.css";

const App = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "rotateY(180deg)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "rotateY(0deg)";
  };

  return (
    <>
    {/* Título */}
      <div className="container">
        <img className="hospitalimg" src="/images/hospital.png" alt="" />
        <div className="conheca-alguns-container">
          <span className="conheca-alguns">Conheça alguns</span>
          <span className="servicos-publicos"> Serviços Públicos</span>
          <span className="do"> do </span>
          <span className="brasil">Brasil!</span>
        </div>
      </div>

      {/* Primeiro Fundo */}
      <img className="fundo1" src="/images/fundo.png" alt="" />

      {/* Começo */}
      <div className="tudo">
        <div className="rectangle-div"></div>
        <div className="estar-com-a-container">
          <span className="facilitando-a">Descubra a gama de</span>
          <b className="em-dia"> Serviços Públicos</b>
          <span className="facilitando-a"> oferecidos no Brasil e como eles podem</span>
          <b className="em-dia2"> facilitar o seu dia a dia.</b>
        </div>

        {/* Segundo Fundo */}
        <img className="fundo2" src="/images/fundo2.png" alt="" />

        {/* FAQ */}
        <div className="faq-grid">
          {[
            {
              front: "Renda Brasil",
              back: "Voltado para garantir renda mínima às famílias em situação de vulnerabilidade, promovendo inclusão social.",
            },
            {
              front: "Assistência Social",
              back: "Atendimento e proteção a brasileiros em vulnerabilidade social, assegurando direitos e acesso a serviços essenciais.",
            },
            {
              front: "Educação",
              back: "Sistema público de ensino gratuito no Brasil, abrangendo desde a educação básica até o ensino superior.",
            },
            {
              front: "Auxílio Moradia",
              back: "Programa brasileiro que oferece apoio habitacional para famílias de baixa renda, garantindo moradia digna.",
            },
            {
              front: "Saúde",
              back: "O Sistema Único de Saúde (SUS) oferece atendimento gratuito a todos os brasileiros, com foco na prevenção e tratamento.",
            },
          ].map((item, index) => (
            <div key={index} className={`pergunta-resposta card-${index + 1}`}>
              <div
                className="card"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s",
                }}
              >
                <div className="card-front">{item.front}</div>
                <div className="card-back">{item.back}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
