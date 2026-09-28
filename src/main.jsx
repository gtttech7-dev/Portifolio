import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { siteConfig, whatsappUrl } from "./config/site";
import { services } from "./data/services";
import { projects } from "./data/projects";
import "./styles.css";

const Icon = ({ name }) => {
  const paths = {
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3c-2.3 2.5-3.5 5.5-3.5 9S9.7 18.5 12 21"/></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 9v11"/></>,
    zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    message: <><path d="M20 11.5a7.5 7.5 0 0 1-7.7 7.5 8.4 8.4 0 0 1-3.3-.7L4 20l1.7-4.1A7.3 7.3 0 0 1 4.5 11 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/></>,
    code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">{paths[name]}</svg>;
};

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#inicio" onClick={close}><span className="brand-mark">G</span><span>{siteConfig.name}</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu"><Icon name={menuOpen ? "close" : "menu"}/></button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#servicos" onClick={close}>Serviços</a><a href="#projetos" onClick={close}>Projetos</a><a href="#precos" onClick={close}>Preços</a><a href="#processo" onClick={close}>Como funciona</a>
            <a className="nav-cta" href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={close}>Falar comigo <Icon name="arrow"/></a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="dot"/> GOMARK TECH</div>
              <h1>{siteConfig.hero.title}</h1>
              <p>{siteConfig.hero.subtitle}</p>
              <div className="hero-actions"><a className="button primary" href={whatsappUrl("Olá! Quero criar um site para meu negócio.")} target="_blank" rel="noreferrer">Quero criar meu site <Icon name="arrow"/></a><a className="button secondary" href="#servicos">Ver serviços</a></div>
              <div className="hero-points"><span><Icon name="check"/> Responsivo</span><span><Icon name="check"/> Rápido</span><span><Icon name="check"/> Personalizado</span></div>
            </div>
            <div className="browser-card" aria-label="Prévia de um site moderno">
              <div className="browser-top"><span/><span/><span/><div className="address">gomark.com.br</div></div>
              <div className="browser-content"><div className="mock-nav"><b>Gomark</b><i/><i/><i/></div><div className="mock-main"><div><small>SUA PRESENÇA DIGITAL</small><h3>Seu negócio merece um site profissional.</h3><div className="mock-line"/><div className="mock-button"/></div><div className="mock-orb"><span>G</span></div></div><div className="mock-cards"><div/><div/><div/></div></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container"><SectionTitle eyebrow="Serviços" title="O que posso criar para o seu negócio" text="Soluções digitais pensadas para apresentar seu trabalho, facilitar processos e fortalecer sua presença online."/><div className="cards four">{services.map((s, i) => <article className="card service-card" key={s.title}><div className="card-icon"><Icon name={i === 2 ? "zap" : i === 3 ? "globe" : "layout"}/></div><h3>{s.title}</h3><p>{s.text}</p><a href={whatsappUrl(`Olá! Tenho interesse em ${s.title}.`)} target="_blank" rel="noreferrer">Saiba mais <Icon name="arrow"/></a></article>)}</div></div>
        </section>

        <section className="section section-alt" id="tipos"><div className="container split"><div><SectionTitle eyebrow="Possibilidades" title="Posso criar diferentes tipos de site" text="Estes são exemplos do que pode ser desenvolvido. Cada projeto é adaptado ao objetivo do negócio."/><a className="text-link" href={whatsappUrl("Olá! Quero conversar sobre um site para meu negócio.")} target="_blank" rel="noreferrer">Conversar sobre meu projeto <Icon name="arrow"/></a></div><div className="type-grid">{["Restaurante", "Pastelaria", "Barbearia", "Loja", "Profissional autônomo", "Prestador de serviço", "Empresa", "Portfólio"].map(t => <div className="type-item" key={t}><Icon name="check"/><span>{t}</span></div>)}</div></div></section>

        <section id="projetos" className="section"><div className="container"><SectionTitle eyebrow="Projetos demonstrativos" title="Ideias de projetos para diferentes negócios" text="Os exemplos abaixo são conceitos demonstrativos e podem ser substituídos por projetos reais conforme o portfólio crescer."/><div className="projects-grid">{projects.map(p => <article className="project" key={p.title}><div className="project-image"><img src={p.image} alt={p.alt}/><span>{p.status}</span></div><div className="project-info"><h3>{p.title}</h3><a href={whatsappUrl(`Olá! Gostei do conceito de ${p.title} e quero saber mais.`)} target="_blank" rel="noreferrer">Quero algo assim <Icon name="arrow"/></a></div></article>)}</div></div></section>

        <section id="precos" className="section section-alt"><div className="container"><SectionTitle eyebrow="Investimento" title="Opções para começar" text="Os valores abaixo são editáveis no arquivo de configuração do projeto."/><div className="pricing"><article className="price-card"><span>Para começar</span><h3>Landing Page</h3><p>Uma página objetiva para apresentar seu negócio, serviço ou oferta.</p><strong>{siteConfig.prices.landing}</strong><a className="button secondary" href={whatsappUrl("Olá! Quero saber sobre a Landing Page.")} target="_blank" rel="noreferrer">Tenho interesse <Icon name="arrow"/></a></article><article className="price-card featured"><span>Mais completo</span><h3>Site Profissional</h3><p>Uma estrutura mais completa para apresentar sua empresa e seus serviços.</p><strong>{siteConfig.prices.site}</strong><a className="button primary" href={whatsappUrl("Olá! Quero saber sobre o Site Profissional.")} target="_blank" rel="noreferrer">Tenho interesse <Icon name="arrow"/></a></article><article className="price-card"><span>Feito sob medida</span><h3>Projeto Personalizado</h3><p>Uma solução adaptada ao que o seu negócio realmente precisa.</p><strong>Orçamento personalizado</strong><a className="button secondary" href={whatsappUrl("Olá! Quero conversar sobre um Projeto Personalizado.")} target="_blank" rel="noreferrer">Pedir orçamento <Icon name="arrow"/></a></article></div></div></section>

        <section id="processo" className="section"><div className="container"><SectionTitle eyebrow="Como funciona" title="Do primeiro contato à entrega"/><div className="process">{["Você entra em contato", "Conversamos sobre o projeto", "Desenvolvimento", "Entrega"].map((t, i) => <div className="step" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{["Você me conta o que precisa e qual é o objetivo do site.", "Alinhamos estrutura, conteúdo e detalhes do projeto.", "O projeto é desenvolvido de acordo com o que foi combinado.", "Você recebe o site pronto para colocar seu negócio na internet."][i]}</p></div>)}</div></div></section>

        <section className="section section-alt"><div className="container split automation"><div><SectionTitle eyebrow="Automações" title="Automatize tarefas do seu negócio" text="Além de sites, também posso desenvolver soluções para organizar processos e reduzir tarefas repetitivas."/><a className="button primary" href={whatsappUrl("Olá! Quero conversar sobre uma automação para meu negócio.")} target="_blank" rel="noreferrer">Quero conversar <Icon name="arrow"/></a></div><div className="automation-list">{["Atendimento", "Formulários", "Organização de informações", "Processos repetitivos", "Integrações"].map(t => <div key={t}><span><Icon name="check"/></span>{t}</div>)}</div></div></section>

        <section className="section"><div className="container"><SectionTitle eyebrow="Experiência" title="O que você pode esperar"/><div className="expectations">{["Atendimento direto", "Projeto personalizado", "Comunicação clara", "Site responsivo", "Facilidade para futuras alterações"].map(t => <div key={t}><Icon name="check"/><span>{t}</span></div>)}</div></div></section>

        <section id="contato" className="contact section"><div className="container contact-box"><div><span className="eyebrow">Vamos conversar</span><h2>Vamos tirar seu projeto do papel?</h2><p>Me conte o que você precisa e vamos conversar sobre o seu projeto.</p></div><div className="contact-actions"><a className="button primary large" href={whatsappUrl()} target="_blank" rel="noreferrer"><Icon name="message"/> Falar comigo pelo WhatsApp</a><a className="social" href={siteConfig.instagram} target="_blank" rel="noreferrer"><Icon name="instagram"/> {siteConfig.instagramHandle}</a></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><div><a className="brand" href="#inicio"><span className="brand-mark">G</span><span>{siteConfig.techName}</span></a><p>Sites e soluções digitais para negócios.</p></div><div className="footer-links"><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#precos">Preços</a><a href="#contato">Contato</a></div><span>© {new Date().getFullYear()} {siteConfig.techName}. Todos os direitos reservados.</span></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><Icon name="message"/></a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
