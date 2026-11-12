"use client";

import { BoatMark } from "@/components/story-art";
import { useEffect, useRef, useState } from "react";
import type { MemoryGameDefinition, MemoryPair } from "@/lib/game-types";

interface MemoryCard {
  id: string;
  pairId: string;
  side: "concept" | "explanation";
  text: string;
}

function makeCards(pairs: MemoryPair[]): MemoryCard[] {
  return pairs.flatMap((pair) => [
    { id: `${pair.id}-concept`, pairId: pair.id, side: "concept" as const, text: pair.concept },
    { id: `${pair.id}-explanation`, pairId: pair.id, side: "explanation" as const, text: pair.explanation },
  ]);
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

export function MemoryActivity({ game }: { game: MemoryGameDefinition }) {
  const [cards, setCards] = useState(() => makeCards(game.pairs));
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setCards(shuffle(makeCards(game.pairs)));
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [game]);

  const complete = matchedPairIds.length === game.pairs.length;

  function resetGame() {
    if (timer.current) clearTimeout(timer.current);
    setCards(shuffle(makeCards(game.pairs)));
    setOpenIds([]);
    setMatchedPairIds([]);
    setLocked(false);
    setMoves(0);
  }

  function turnCard(card: MemoryCard) {
    if (locked || matchedPairIds.includes(card.pairId) || openIds.includes(card.id)) return;

    if (openIds.length === 0) {
      setOpenIds([card.id]);
      return;
    }

    const firstCard = cards.find((item) => item.id === openIds[0]);
    setMoves((current) => current + 1);
    setOpenIds([openIds[0], card.id]);

    if (firstCard?.pairId === card.pairId) {
      setMatchedPairIds((current) => [...current, card.pairId]);
      setOpenIds([]);
      return;
    }

    setLocked(true);
    timer.current = setTimeout(() => {
      setOpenIds([]);
      setLocked(false);
    }, 950);
  }

  return (
    <section className="activity-panel" aria-label={game.title}>
      <div className="activity-toolbar">
        <div className="progress-copy" aria-live="polite">
          <span className="progress-label">Nájdené dvojice</span>
          <strong>{matchedPairIds.length} <span>/</span> {game.pairs.length}</strong>
        </div>
        <div className="move-count">Ťahy <strong>{moves}</strong></div>
        <button className="quiet-button" type="button" onClick={resetGame}>Zamiešať znova</button>
      </div>

      <div className="memory-grid" aria-label="Pexeso – otoč dve karty a nájdi súvisiacu dvojicu">
        {cards.map((card, index) => {
          const isOpen = openIds.includes(card.id);
          const isMatched = matchedPairIds.includes(card.pairId);
          const isVisible = isOpen || isMatched;

          return (
            <button
              key={card.id}
              type="button"
              className={`memory-card${isVisible ? " is-open" : ""}${card.side === "explanation" ? " is-explanation" : ""}${isMatched ? " is-matched" : ""}`}
              onClick={() => turnCard(card)}
              disabled={locked || isMatched || isOpen}
              aria-label={isVisible ? `${card.side === "concept" ? "Pojem" : "Vysvetlenie"}: ${card.text}` : `Otočiť kartu ${index + 1}`}
              aria-pressed={isVisible}
            >
              {isVisible ? (
                <span className="card-face-content">
                  <span className="card-kind">{isMatched && <span aria-hidden="true">✓ </span>}{card.side === "concept" ? "POJEM" : "VYSVETLENIE"}</span>
                  <span className="card-text">{card.text}</span>
                  {isMatched && card.side === "explanation" && game.pairs.find((pair) => pair.id === card.pairId)?.teachingNote && (
                    <span className="card-note">Tip pre rozhovor: {game.pairs.find((pair) => pair.id === card.pairId)?.teachingNote}</span>
                  )}
                </span>
              ) : (
                <span className="card-back" aria-hidden="true"><BoatMark /><span className="card-number">{index + 1}</span></span>
              )}
            </button>
          );
        })}
      </div>

      {complete ? (
        <div className="completion-banner" role="status">
          <span className="completion-star" aria-hidden="true">✦</span>
          <div>
            <strong>Výborne, našli ste všetky dvojice!</strong>
            <p>Skúste si teraz vlastnými slovami povedať, čo nám príbeh hovorí o dôvere.</p>
          </div>
          <button type="button" className="primary-button small-button" onClick={resetGame}>Zahrať znova</button>
        </div>
      ) : (
        <p className="game-hint">Otoč dve karty. Skús spojiť pojem s jeho vysvetlením.</p>
      )}
    </section>
  );
}
