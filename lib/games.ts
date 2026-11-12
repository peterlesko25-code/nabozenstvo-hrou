import type { GameDefinition } from "@/lib/game-types";

/**
 * Activity content lives here, separately from the React game templates.
 * Add another activity by supplying data that follows GameDefinition.
 */
export const games: GameDefinition[] = [
  {
    slug: "utisenie-burky",
    title: "Ježiš utíši búrku",
    subtitle: "Biblické pexeso",
    description:
      "Nájdi dvojice pojmov a vysvetlení z evanjeliového príbehu o utíšení búrky.",
    type: "memory",
    topic: "Biblické príbehy",
    ageRange: { min: 8, max: 11 },
    learningGoal:
      "Deti si pripomenú hlavné prvky príbehu a rozpoznajú jeho posolstvo o dôvere v Ježiša.",
    sources: ["Mk 4, 35–41"],
    reviewStatus: "draft",
    estimatedMinutes: 5,
    pairs: [
      {
        id: "jazero",
        concept: "Genezaretské jazero",
        explanation: "Cez jazero sa Ježiš s učeníkmi plavili na druhý breh.",
      },
      {
        id: "búrka",
        concept: "Silná búrka",
        explanation: "Vietor a vlny naplnili loď vodou a učeníci sa zľakli.",
      },
      {
        id: "jezis-spi",
        concept: "Ježiš odpočíva",
        explanation: "Ježiš spal na zadnej časti lode, kým ho učeníci nezobudili.",
      },
      {
        id: "utisenie",
        concept: "Pokoj na mori",
        explanation: "Ježiš prikázal vetru a moru, aby stíchli, a nastalo veľké ticho.",
      },
      {
        id: "otazka",
        concept: "Otázka učeníkov",
        explanation: "Učeníci sa pýtali: Ktože je to, že ho počúva aj vietor a more?",
      },
      {
        id: "dôvera",
        concept: "Dôvera v Ježiša",
        explanation: "Príbeh nás pozýva obrátiť sa na Ježiša aj vtedy, keď prežívame strach.",
        teachingNote: "Pri rozhovore zdôrazni, že viera neznamená, že človek nikdy nepocíti strach.",
      },
    ],
  },
];

export function getGameBySlug(slug: string): GameDefinition | undefined {
  return games.find((game) => game.slug === slug);
}
