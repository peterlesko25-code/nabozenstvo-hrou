import Link from "next/link";
import { notFound } from "next/navigation";
import { MemoryActivity } from "@/components/memory-activity";
import { getGameBySlug } from "@/lib/games";

export default async function PlayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  return (
    <main className="play-page">
      <div className="play-topbar">
        <Link className="back-link" href="/">← Späť do knižnice</Link>
        <span className="brand-mark small-mark" aria-hidden="true">✦</span>
        <span className="topbar-label">KATECHÉZA HROU</span>
      </div>

      <div className="play-content">
        <div className="play-heading">
          <div className="eyebrow"><span className="eyebrow-dot" />{game.topic} <span className="eyebrow-divider">·</span> {game.ageRange.min}–{game.ageRange.max} rokov</div>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
          <div className="game-meta-row">
            <span>◷ {game.estimatedMinutes} min</span>
            <span>✧ {game.pairs.length} dvojíc</span>
            <span>Zdroj: {game.sources.join(", ")}</span>
          </div>
          {game.reviewStatus === "draft" && <p className="review-note" role="note">Pracovný návrh obsahu — pred použitím skontrolovať.</p>}
        </div>

        <div className="learning-goal"><span className="goal-icon" aria-hidden="true">✦</span><p><strong>Čo si pripomenieme</strong>{game.learningGoal}</p></div>
        <MemoryActivity game={game} />
      </div>
      <footer className="play-footer">Hráme, aby sme lepšie porozumeli. <span>✦</span></footer>
    </main>
  );
}
