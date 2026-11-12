"use client";

import { useState } from "react";
import type { QuizGameDefinition } from "@/lib/game-types";

export function QuizActivity({ game }: { game: QuizGameDefinition }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = game.questions[questionIndex];
  const answered = selectedAnswer !== null;
  const correct = selectedAnswer === question?.correctAnswerIndex;

  function chooseAnswer(index: number) {
    if (answered || !question) return;
    setSelectedAnswer(index);
    if (index === question.correctAnswerIndex) setScore((current) => current + 1);
  }

  function nextQuestion() {
    if (questionIndex === game.questions.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIndex((current) => current + 1);
    setSelectedAnswer(null);
  }

  function restart() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <section className="activity-panel quiz-panel" aria-label={game.title}>
        <div className="quiz-result" role="status">
          <span className="completion-star" aria-hidden="true">✦</span>
          <p className="quiz-result-kicker">KONIEC KVÍZU</p>
          <h2>{score} z {game.questions.length} správnych odpovedí</h2>
          <p>Skúste si spoločne povedať, čo príbeh hovorí o dôvere v Ježiša.</p>
          <button className="primary-button small-button" type="button" onClick={restart}>Zahrať znova</button>
        </div>
      </section>
    );
  }

  if (!question) return null;

  return (
    <section className="activity-panel quiz-panel" aria-label={game.title}>
      <div className="quiz-toolbar" aria-live="polite">
        <span>OTÁZKA {questionIndex + 1} / {game.questions.length}</span>
        <strong>Body {score}</strong>
      </div>
      <div className="quiz-progress" aria-hidden="true">
        <span style={{ width: `${((questionIndex + 1) / game.questions.length) * 100}%` }} />
      </div>
      <h2 className="quiz-question">{question.prompt}</h2>
      <div className="quiz-choices" role="group" aria-label="Možnosti odpovede">
        {question.choices.map((choice, index) => {
          const isCorrectChoice = index === question.correctAnswerIndex;
          const isSelected = selectedAnswer === index;
          const stateClass = answered && isCorrectChoice
            ? " is-correct"
            : answered && isSelected
              ? " is-incorrect"
              : "";

          return (
            <button
              key={`${question.id}-${index}`}
              type="button"
              className={`quiz-choice${stateClass}`}
              onClick={() => chooseAnswer(index)}
              disabled={answered}
              aria-pressed={isSelected}
            >
              <span className="choice-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span>
              <span>{choice}</span>
              {answered && isCorrectChoice && <span className="choice-mark" aria-label="Správna odpoveď">✓</span>}
              {answered && isSelected && !isCorrectChoice && <span className="choice-mark" aria-label="Tvoja odpoveď">×</span>}
            </button>
          );
        })}
      </div>

      {answered ? (
        <div className={`quiz-feedback${correct ? " is-correct" : " is-incorrect"}`} role="status">
          <strong>{correct ? "Správne!" : "Skúsme si to zapamätať."}</strong>
          <p>{question.explanation}</p>
          {question.teachingNote && <p className="quiz-teaching-note">Tip pre rozhovor: {question.teachingNote}</p>}
          <button className="primary-button small-button" type="button" onClick={nextQuestion}>
            {questionIndex === game.questions.length - 1 ? "Zobraziť výsledok" : "Ďalšia otázka"}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : (
        <p className="game-hint">Vyber jednu odpoveď. Potom si prečítame krátke vysvetlenie.</p>
      )}
    </section>
  );
}
