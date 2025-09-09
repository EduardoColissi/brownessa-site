import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';

// Componente de Navegação
const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Brownessa
        </motion.div>
        <div className="nav-links">
          {['sobre', 'cardapio', 'delivery', 'contato'].map((section) => (
            <motion.button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

// Componente Hero
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="hero" id="hero">
      <motion.div 
        className="hero-background"
        style={{ y }}
      />
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Brownessa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Doces artesanais feitos com amor
        </motion.p>
        <motion.button
          className="cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('cardapio').scrollIntoView({ behavior: 'smooth' })}
        >
          Ver Cardápio
        </motion.button>
      </div>
    </section>
  );
};

// Componente Sobre
const Sobre = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActiveSection('sobre');
  }, [inView, setActiveSection]);

  return (
    <section className="section sobre" id="sobre" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Sobre a Brownessa</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                A Brownessa nasceu da paixão por criar doces únicos e especiais. 
                Especializados em brownies e brigadeiros artesanais, cada doce é 
                preparado com ingredientes selecionados e muito carinho.
              </p>
              <h3>Como Funcionam as Encomendas</h3>
              <div className="encomendas-info">
                <div className="info-item">
                  <span className="step">1</span>
                  <p>Entre em contato via WhatsApp ou telefone</p>
                </div>
                <div className="info-item">
                  <span className="step">2</span>
                  <p>Escolha seus doces favoritos do nosso cardápio</p>
                </div>
                <div className="info-item">
                  <span className="step">3</span>
                  <p>Definimos data de entrega (mínimo 48h de antecedência)</p>
                </div>
                <div className="info-item">
                  <span className="step">4</span>
                  <p>Seus doces são preparados fresquinhos para você!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Componente Cardápio
const Cardapio = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) setActiveSection('cardapio');
  }, [inView, setActiveSection]);

  const produtos = [
    {
      categoria: "Brigadeiros",
      items: [
        { nome: "Brigadeiro Tradicional", individual: "R$ 3,50", cento: "R$ 300,00" },
        { nome: "Brigadeiro Gourmet", individual: "R$ 4,50", cento: "R$ 400,00" },
        { nome: "Brigadeiro de Nutella", individual: "R$ 5,00", cento: "R$ 450,00" },
        { nome: "Brigadeiro de Maracujá", individual: "R$ 4,50", cento: "R$ 400,00" }
      ]
    },
    {
      categoria: "Brownies",
      items: [
        { nome: "Brownie Tradicional", individual: "R$ 8,00", cento: "R$ 700,00" },
        { nome: "Brownie com Nozes", individual: "R$ 10,00", cento: "R$ 900,00" },
        { nome: "Brownie Red Velvet", individual: "R$ 12,00", cento: "R$ 1.100,00" },
        { nome: "Brownie de Doce de Leite", individual: "R$ 11,00", cento: "R$ 1.000,00" }
      ]
    }
  ];

  return (
    <section className="section cardapio" id="cardapio" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Nosso Cardápio</h2>
          <div className="cardapio-grid">
            {produtos.map((categoria, index) => (
              <motion.div
                key={categoria.categoria}
                className="categoria-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3>{categoria.categoria}</h3>
                <div className="produtos-lista">
                  {categoria.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.nome}
                      className="produto-item"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4>{item.nome}</h4>
                      <div className="precos">
                        <span className="preco">Individual: {item.individual}</span>
                        <span className="preco">Cento: {item.cento}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Componente Delivery
const Delivery = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActiveSection('delivery');
  }, [inView, setActiveSection]);

  return (
    <section className="section delivery" id="delivery" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Delivery</h2>
          <p>Peça também pelos nossos parceiros de delivery:</p>
          <div className="delivery-links">
            <motion.a
              href="#"
              className="delivery-card ifood"
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="delivery-icon">🍴</div>
              <h3>iFood</h3>
              <p>Entrega rápida e segura</p>
            </motion.a>
            <motion.a
              href="#"
              className="delivery-card anotaai"
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="delivery-icon">📝</div>
              <h3>AnotaAí</h3>
              <p>Praticidade em suas mãos</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Componente Contato
const Contato = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActiveSection('contato');
  }, [inView, setActiveSection]);

  return (
    <section className="section contato" id="contato" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Contato</h2>
          <div className="contato-grid">
            <motion.div
              className="contato-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contato-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>(11) 99999-9999</p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Enviar Mensagem
              </a>
            </motion.div>
            <motion.div
              className="contato-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contato-icon">📧</div>
              <h3>Email</h3>
              <p>contato@brownessa.com.br</p>
              <a href="mailto:contato@brownessa.com.br">
                Enviar Email
              </a>
            </motion.div>
            <motion.div
              className="contato-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contato-icon">📍</div>
              <h3>Endereço</h3>
              <p>Rua dos Doces, 123<br />São Paulo - SP</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Ver no Mapa
              </a>
            </motion.div>
            <motion.div
              className="contato-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contato-icon">🕒</div>
              <h3>Horário</h3>
              <p>Segunda a Sábado<br />8h às 18h</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Brownessa. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para adoçar seu dia</p>
        </motion.div>
      </div>
    </footer>
  );
};

// Componente Principal
function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="App">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Sobre setActiveSection={setActiveSection} />
      <Cardapio setActiveSection={setActiveSection} />
      <Delivery setActiveSection={setActiveSection} />
      <Contato setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}

export default App;
