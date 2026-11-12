import Link from "next/link";
import { StoryArt } from "@/components/story-art";
import { notFound } from "next/navigation";
import { MemoryActivity } from "@/components/memory-activity";
import { QuizActivity } from "@/components/quiz-activity";
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
        <div className="play-intro">
          <div className="play-heading">
            <div className="eyebrow"><span className="eyebrow-dot" />{game.topic} <span className="eyebrow-divider">·</span> {game.ageRange.min}–{game.ageRange.max} rokov</div>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <div className="game-meta-row">
              <span>◷ {game.estimatedMinutes} min</span>
              <span>✧ {game.type === "memory" ? `${game.pairs.length} dvojíc` : `${game.questions.length} otázky`}</span>
              <span>Zdroj: {game.sources.join(", ")}</span>
            </div>
            {game.reviewStatus === "draft" && <p className="review-note" role="note">Pracovný návrh obsahu — pred použitím skontrolovať.</p>}
          </div>
          <div className="play-illustration"><StoryArt variant={game.type === "memory" ? "lake" : "book"} /></div>
        </div>

        <div className="learning-goal"><span className="goal-icon" aria-hidden="true">✦</span><p><strong>Čo si pripomenieme</strong>{game.learningGoal}</p></div>
        {game.type === "memory" ? <MemoryActivity game={game} /> : <QuizActivity key={game.slug} game={game} />}
      </div>
      <footer className="play-footer">Hráme, aby sme lepšie porozumeli. <span>✦</span></footer>
    </main>
  );
}
