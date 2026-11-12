# Katechéza hrou

Rozšíriteľná webová knižnica interaktívnych hier pre katechézu. Prvý prototyp obsahuje jedno textové pexeso k evanjeliovému príbehu o utíšení búrky.

## Spustenie

Vyžaduje Node.js 20.9 alebo novší.

```bash
npm install
npm run dev
```

Aplikácia sa otvorí na `http://localhost:3000`.

## Architektúra

- `lib/game-types.ts` – spoločný typový kontrakt pre obsah hier.
- `lib/games.ts` – obsahové záznamy, oddelené od vykresľovania.
- `components/memory-activity.tsx` – samostatná šablóna pexesa.
- `app/page.tsx` – katalóg aktivít.
- `app/play/[slug]/page.tsx` – stránka prehrávania konkrétnej aktivity.

Nový obsah, ktorý používa existujúci typ, sa pridáva do katalógu dát. Nový herný typ má dostať vlastný typ v `GameType`, dátový kontrakt a samostatnú React komponentu. Katalóg potom vyberie šablónu podľa `type`.

## Zásady projektu

- Hry sú určené na použitie na počítači, tablete a dotykovej tabuli.
- Dieťa nepotrebuje účet; prototyp neukladá osobné údaje ani výsledky.
- Katechetický obsah má pred zverejnením skontrolovať človek.
- Zatiaľ nie je pridaná databáza, administrácia, platby ani AI generovanie v aplikácii.

## Ďalšie kroky

1. Vyskúšať pexeso na dotykovej obrazovke a doladiť ovládanie.
2. Pridať ďalšie aktivity typu `memory` bez kopírovania hernej logiky.
3. Pridať samostatný typ, napríklad radenie udalostí.
4. Neskôr doplniť editor obsahu s konceptom, kontrolou a publikovaním.
5. Databázu a prihlasovanie zaviesť až vtedy, keď bude potrebná zdieľaná správa knižnice.
