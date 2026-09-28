import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { siteConfig, whatsappUrl } from "./config/site";
import { services } from "./data/services";
import { projects } from "./data/projects";

const iconPaths = {
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.3 2.4 3.5 5.4 3.5 9S14.3 18.6 12 21c-2.3-2.4-3.5-5.4-3.5-9S9.7 5.4 12 3Z"/></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  workflow: <><rect x="3" y="4" width="7" height="5" rx="1"/><rect x="14" y="4" width="7" height="5" rx="1"/><rect x="8.5" y="15" width="7" height="5" rx="1"/><path d="M6.5 9v3h9v3M17.5 9v3h-3"/></>,
  smartphone: <><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/></>,
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  x: <><path d="m6 6 12 12M18 6 6 18"/></>,
  message: <><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-3.2-.6L4 20l1.7-3.7A7.3 7.3 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5a7.5 7.5 0 0 1 8 7Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
};

function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">{iconPaths[name]}</svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className={`header ${menuOpen ? "menu-open" : ""}`}>
        <div className="container nav">
          <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Gabriel Tech - início">
            <span className="brand-mark">G</span>
            <span>Gabriel <b>Tech</b></span>
          </a>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>

          <nav className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#precos">Valores</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="button button-small button-outline nav-cta"
            href={whatsappUrl()} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>

        <div className="mobile-nav">
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#precos" onClick={closeMenu}>Valores</a>
          <a href="#processo" onClick={closeMenu}>Como funciona</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
            Falar no WhatsApp <Icon name="arrow" size={17} />
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Gabriel Tech</div>
              <h1>{siteConfig.hero.title}</h1>
              <p className="hero-subtitle">{siteConfig.hero.subtitle}</p>
              <div className="hero-actions">
                <a className="button button-primary button-large" href={whatsappUrl()} target="_blank" rel="noreferrer">
                  Quero criar meu site <Icon name="arrow" size={18} />
                </a>
                <a className="button button-ghost button-large" href="#servicos">
                  Ver serviços
                </a>
              </div>
              <div className="trust-line">
                <span><Icon name="check" size={16} /> Responsivo</span>
                <span><Icon name="check" size={16} /> Personalizado</span>
                <span><Icon name="check" size={16} /> Feito para o seu negócio</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Prévia ilustrativa de um site">
              <div className="browser-card">
                <div className="browser-top">
                  <div className="browser-dots"><i /><i /><i /></div>
                  <div className="browser-url">gabrieltech.com.br</div>
                </div>
                <div className="browser-content">
                  <div className="mock-nav"><strong>SEU NEGÓCIO</strong><span /><span /><span /></div>
                  <div className="mock-hero">
                    <div>
                      <small>UMA PRESENÇA DIGITAL PROFISSIONAL</small>
                      <h3>Seu negócio merece<br />ser bem apresentado.</h3>
                      <div className="mock-button">Conheça nosso trabalho</div>
                    </div>
                    <div className="mock-orb"><div /></div>
                  </div>
                  <div className="mock-cards"><div /><div /><div /></div>
                </div>
              </div>
              <div className="floating-badge"><span className="badge-dot" /> Site responsivo</div>
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">Serviços</div>
              <h2>O que posso fazer pelo seu negócio</h2>
              <p>Uma presença digital clara, profissional e pensada para o objetivo do seu negócio.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="card-number">0{index + 1}</div>
                  <div className="icon-box"><Icon name={service.icon} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contato">Saiba mais <Icon name="arrow" size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="tipos">
          <div className="container custom-grid">
            <div>
              <div className="eyebrow">Projetos sob medida</div>
              <h2>Seu negócio tem uma necessidade diferente?</h2>
              <p className="lead">Cada projeto pode ser desenvolvido de acordo com o objetivo do negócio. Desde uma landing page simples até uma estrutura mais completa.</p>
              <div className="type-list">
                {["Restaurante", "Pastelaria", "Barbearia", "Loja", "Profissional autônomo", "Prestador de serviço", "Empresa", "Portfólio"].map(item => (
                  <span key={item}><Icon name="check" size={15} /> {item}</span>
                ))}
              </div>
              <p className="micro-note">Exemplos de projetos que podem ser desenvolvidos.</p>
            </div>
            <div className="industry-showcase">
              <div className="showcase-main"><span>NEGÓCIO</span><strong>Uma página<br />que apresenta<br />o que você faz.</strong><small>Layout demonstrativo</small></div>
              <div className="showcase-mini mini-one">RESTAURANTE</div>
              <div className="showcase-mini mini-two">BARBEARIA</div>
              <div className="showcase-mini mini-three">SERVIÇOS</div>
            </div>
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="container">
            <div className="section-heading row-heading">
              <div>
                <div className="eyebrow">Portfólio</div>
                <h2>Projetos</h2>
              </div>
              <p>Alguns conceitos para mostrar possibilidades de criação. Projetos demonstrativos, não trabalhos de clientes.</p>
            </div>
            <div className="project-grid">
              {projects.map(project => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img src={project.image} alt={`Prévia conceitual de ${project.title}`} />
                    <span className="project-status">{project.status}</span>
                  </div>
                  <div className="project-body">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="precos">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow">Investimento</div>
              <h2>Planos e valores</h2>
              <p>Valores iniciais configuráveis. O preço final depende do escopo e das necessidades do projeto.</p>
            </div>
            <div className="pricing-grid">
              <PriceCard title="Landing Page" price={siteConfig.prices.landing}
                text="Para empresas que precisam de uma página profissional e objetiva."
                features={["Página responsiva", "Estrutura personalizada", "Botão de contato"]} />
              <PriceCard featured title="Site Profissional" price={siteConfig.prices.site}
                text="Para negócios que precisam de uma apresentação mais completa."
                features={["Estrutura personalizada", "Seções sob medida", "Responsivo em todos os dispositivos"]} />
              <PriceCard title="Projeto Personalizado" price="Orçamento personalizado"
                text="Para projetos que possuem necessidades específicas."
                features={["Análise da necessidade", "Escopo sob medida", "Orçamento individual"]} />
            </div>
          </div>
        </section>

        <section className="section" id="processo">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">Processo</div>
              <h2>Como funciona</h2>
              <p>Do primeiro contato até a entrega, de forma simples e transparente.</p>
            </div>
            <div className="process-grid">
              {[
                ["01", "Você entra em contato", "Me explica o que precisa."],
                ["02", "Conversamos sobre o projeto", "Entendo seu negócio e o que o site precisa ter."],
                ["03", "Desenvolvimento", "O projeto é criado de acordo com o combinado."],
                ["04", "Entrega", "Você recebe seu site pronto para apresentar seu negócio na internet."],
              ].map(([number, title, text], i) => (
                <div className="process-item" key={number}>
                  <span className="process-number">{number}</span>
                  {i < 3 && <span className="process-line" />}
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section automation-section">
          <div className="container automation-card">
            <div className="automation-copy">
              <div className="eyebrow">Além dos sites</div>
              <h2>Automatize tarefas do seu negócio</h2>
              <p>Além de sites, posso desenvolver soluções para ajudar a organizar e automatizar processos do seu negócio.</p>
              <a className="button button-outline" href="#contato">Conversar sobre uma solução <Icon name="arrow" size={17} /></a>
            </div>
            <div className="automation-list">
              {["Atendimento", "Formulários", "Organização de informações", "Processos repetitivos", "Integrações"].map((item, i) => (
                <div key={item} className="automation-row">
                  <span>0{i + 1}</span><strong>{item}</strong><Icon name="plus" size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section expectation-section">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow">Experiência</div>
              <h2>O que você pode esperar</h2>
              <p>Enquanto a Gabriel Tech constrói seu portfólio de clientes, estes são os princípios que orientam cada projeto.</p>
            </div>
            <div className="expect-grid">
              {[
                ["01", "Atendimento direto", "Comunicação simples e sem complicação."],
                ["02", "Projeto personalizado", "A estrutura é pensada para a necessidade do negócio."],
                ["03", "Comunicação clara", "Você sabe o que está sendo feito e por quê."],
                ["04", "Site responsivo", "Uma boa experiência em celular, tablet e computador."],
                ["05", "Fácil de evoluir", "Estrutura preparada para futuras alterações."],
              ].map(([n, t, d]) => (
                <div className="expect-card" key={t}>
                  <span>{n}</span><h3>{t}</h3><p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-glow" />
          <div className="container contact-inner">
            <div className="eyebrow">Vamos conversar</div>
            <h2>Vamos tirar seu projeto do papel?</h2>
            <p>Me conte o que você precisa e vamos conversar sobre o seu projeto.</p>
            <a className="button button-primary button-large" href={whatsappUrl("Olá! Quero conversar sobre um projeto para o meu negócio.")} target="_blank" rel="noreferrer">
              <Icon name="message" size={19} /> Falar comigo pelo WhatsApp
            </a>
            <div className="social-contact">
              <span>Prefere Instagram?</span>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer">@seuinstagram <Icon name="arrow" size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#inicio" className="brand"><span className="brand-mark">G</span><span>Gabriel <b>Tech</b></span></a>
          <p>Criação de sites e soluções digitais para negócios.</p>
          <span>© {new Date().getFullYear()} Gabriel Tech</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar com Gabriel Tech pelo WhatsApp">
        <Icon name="message" size={23} />
      </a>
    </div>
  );
}

function PriceCard({ title, price, text, features, featured }) {
  return (
    <article className={`price-card ${featured ? "featured" : ""}`}>
      {featured && <span className="popular">Mais procurado</span>}
      <div className="price-top"><span>Plano</span><h3>{title}</h3></div>
      <div className="price">{price}</div>
      <p>{text}</p>
      <ul>{features.map(feature => <li key={feature}><Icon name="check" size={16} /> {feature}</li>)}</ul>
      <a className={`button ${featured ? "button-primary" : "button-outline"}`} href={whatsappUrl(`Olá! Tenho interesse no ${title}.`)} target="_blank" rel="noreferrer">
        Solicitar orçamento <Icon name="arrow" size={16} />
      </a>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);