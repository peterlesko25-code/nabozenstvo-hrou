import Link from "next/link";
import { games } from "@/lib/games";

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <Link href="/" className="brand-lockup" aria-label="Katechéza hrou – domov">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span className="brand-name">katechéza<span>hrou</span></span>
        </Link>
        <div className="nav-note"><span className="status-dot" /> Malá knižnica, ktorá bude rásť</div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> HRY PRE DETI · GRÉCKOKATOLÍCKA TRADÍCIA</div>
          <h1>Viera, ktorú<br /><em>objavujeme spolu.</em></h1>
          <p className="hero-description">Krátke interaktívne hry, ktoré deťom pomáhajú spoznávať Bibliu a život Cirkvi.</p>
          <a href="#knižnica" className="primary-button">Pozrieť hry <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun-glow" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-symbol">✦</div>
          <div className="hero-caption">HRA · ROZHOVOR · OBJAVENIE</div>
        </div>
        <div className="hero-bottomline"><span>PRE KATECHÉZU A RODINY</span><span>PRVÁ UKÁŽKA JE PRIPRAVENÁ</span></div>
      </section>

      <section className="library-section" id="knižnica">
        <div className="section-heading">
          <div>
            <div className="eyebrow">KNIŽNICA AKTIVÍT</div>
            <h2>Vyberme si, čo dnes objavíme.</h2>
          </div>
          <p className="section-intro">Každá hra má svoj cieľ, vekové odporúčanie a podklad na rozhovor.</p>
        </div>

        <div className="library-filters" aria-label="Informácie o knižnici">
          <span className="filter-pill active">Všetky témy <b>{games.length}</b></span>
          <span className="filter-pill">Deti 8–11 rokov</span>
          <span className="filter-pill">Biblické príbehy</span>
        </div>

        <div className="game-grid">
          {games.map((game, index) => (
            <article className="game-card" key={game.slug}>
              <Link href={`/play/${game.slug}`} className="game-card-link" aria-label={`Otvoriť hru: ${game.title}`}>
                <div className={`game-art game-art-${index + 1}${game.type === "quiz" ? " quiz-art" : ""}`} aria-hidden="true">
                  {game.type === "memory" ? (
                    <><span className="art-moon">◔</span><span className="art-wave wave-a" /><span className="art-wave wave-b" /><span className="art-boat">⛵</span><span className="art-star">✦</span></>
                  ) : (
                    <div className="quiz-art-symbol"><span>?</span><i>✦</i></div>
                  )}
                  <span className="art-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="game-card-body">
                  <div className="card-topline"><span>{game.topic}</span><span>{game.ageRange.min}–{game.ageRange.max} ROKOV</span></div>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <div className="card-bottomline"><span>{game.subtitle}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
                </div>
              </Link>
            </article>
          ))}
          <article className="next-card" aria-label="Ďalšie hry pripravujeme">
            <div className="next-card-symbol" aria-hidden="true">＋</div>
            <p>Ďalšie hry<br />budeme tvoriť postupne.</p>
            <span>PEXESO · KVÍZ · TRIEDENIE · PRÍBEHY</span>
          </article>
        </div>
      </section>

      <section className="principles-row">
        <div><span className="principle-number">01</span><strong>Najprv zmysel</strong><p>Každá aktivita má jasný cieľ a tému rozhovoru.</p></div>
        <div><span className="principle-number">02</span><strong>Obsah pod kontrolou</strong><p>Návrhy hier pred použitím kontroluje katechéta.</p></div>
        <div><span className="principle-number">03</span><strong>Jednoduché hranie</strong><p>Bez účtu pre dieťa. Otvorí sa priamo v prehliadači.</p></div>
      </section>

      <footer className="site-footer"><Link href="/">katechéza<span>hrou</span></Link><span>Prvá verzia · Obsah sa bude rozširovať</span><span>✦</span></footer>
    </main>
  );
}
