const highlights = [
  {
    number: '01',
    title: 'Agenda organizada',
    description: 'Uma visão clara dos horários, atendimentos e profissionais.',
  },
  {
    number: '02',
    title: 'Relacionamento com clientes',
    description: 'Construa um histórico de atendimento para cuidar melhor de cada cliente.',
  },
  {
    number: '03',
    title: 'Gestão em um só lugar',
    description: 'Serviços, equipe e operação preparados para crescer com seu negócio.',
  },
]

export default function App() {
  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Navegação principal">
        <a className="brand" href="/" aria-label="Beleza Digital, início">
          <span className="brand-mark">b.</span>
          <span>beleza<span className="brand-light">digital</span></span>
        </a>
        <span className="status-pill"><span className="status-dot" /> Fundação do produto</span>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">GESTÃO QUE VALORIZA SUA BELEZA</p>
          <h1>Seu talento merece uma gestão <em>à altura.</em></h1>
          <p className="hero-description">
            Estamos construindo um espaço para simplificar a rotina de salões,
            estúdios e profissionais da beleza — para você dedicar mais tempo
            ao que faz de melhor.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#produto">Conheça a proposta <span aria-hidden="true">↗</span></a>
            <span className="quiet-note">Uma base nova, feita para crescer.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Painel conceitual de gestão">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-card">
            <div className="art-card-top"><span>VISÃO DO DIA</span><span className="mini-menu">•••</span></div>
            <div className="art-date">Seu negócio, em harmonia.</div>
            <div className="appointment">
              <span className="appointment-time">09:30</span>
              <span className="appointment-person"><b>Coloração + corte</b><small>Atendimento de demonstração</small></span>
              <span className="appointment-dot" />
            </div>
            <div className="appointment">
              <span className="appointment-time">11:00</span>
              <span className="appointment-person"><b>Design de sobrancelhas</b><small>Atendimento de demonstração</small></span>
              <span className="appointment-dot dot-gold" />
            </div>
            <div className="appointment">
              <span className="appointment-time">14:30</span>
              <span className="appointment-person"><b>Manicure</b><small>Atendimento de demonstração</small></span>
              <span className="appointment-dot dot-green" />
            </div>
            <div className="art-footer"><span>Organização para florescer</span><span>✳</span></div>
          </div>
          <div className="floating-note"><span className="floating-icon">✦</span><span><b>Mais leveza</b><small>na rotina do negócio</small></span></div>
        </div>
      </section>

      <section id="produto" className="highlights">
        <div className="section-heading">
          <p className="eyebrow">UM NOVO JEITO DE CUIDAR DO NEGÓCIO</p>
          <h2>Menos correria. Mais <em>presença.</em></h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="/"><span className="brand-mark">b.</span><span>beleza<span className="brand-light">digital</span></span></a>
        <span>Uma nova experiência de gestão para o mercado da beleza.</span>
      </footer>
    </main>
  )
}