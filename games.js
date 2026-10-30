// The list of games. A new game adds one entry here (newest first). Spoiler-free blurbs only.
// save: optional localStorage key + function that reads "times finished" (same origin, so the page can see it).
window.GAMES = [
  {
    name: 'Tørlagt', repo: 'kan-du-det', date: '2026-10-30', chapters: 'Kap. 3.2–3.3',
    genre: 'Bizar historie · lektioner + mini-spil', status: 'prototype',
    blurb: 'A sponge is sent to a rehab camp in the desert to dry out. A lesson first, then the story and a game drill it. Six nights, three offers.',
    save: { key: 'dk.toerlagt', done: (s) => s.stats && s.stats.done },
  },
  {
    name: 'Kan du det?!', repo: 'kan-du-det/kandudet', date: '2026-10-29', chapters: 'Kap. 3.2–3.3',
    genre: 'Mini-spil · bullet heaven', status: 'final',
    blurb: 'A recycling station where the words you choose decide what things become. Adjective endings, colours, reactions.',
    save: { key: 'kandudet.v1', done: (s) => s.stats && s.stats.done },
  },
  {
    name: 'Ravnsted', repo: 'ravnsted', date: '2026-10-27', chapters: 'Kap. 3.2–3.3',
    genre: 'Mørk historie · mini-spil', status: 'final',
    blurb: 'A grim town between the marsh and the hill. One day and one night of contracts, told hour by hour.',
  },
  {
    name: 'Pumpen', repo: null, date: '2026-10-26', chapters: 'Kap. 3.2–3.3',
    genre: 'Sci-fi historie', status: 'preview',
    blurb: 'A pump between two universes that only accepts exactly described objects. Only a preview so far.',
  },
  {
    name: 'Hertil', repo: 'hertil', date: '2026-10-15', chapters: 'Kap. 1–3',
    genre: 'RPG · terninger', status: 'final',
    blurb: 'An absurd other dimension with no humans, where Danish grammar is the physics.',
  },
  {
    name: 'Det var ikke noget', repo: 'det-var-ikke-noget', date: '2026-10-11', chapters: 'Kap. 1–2',
    genre: 'RPG · kontrakter', status: 'final',
    blurb: 'Witcher-style contracts in Vandmark, solved by talking. Folklore treated as fact.',
  },
  {
    name: 'Ordværket', repo: 'The-Word-Engine', date: '2026-10-11', chapters: 'Kap. 1–3',
    genre: 'Bullet heaven · roguelike', status: 'final',
    blurb: 'Five-minute runs in a medieval city built on a brass machine. Collect words in the right order to cast spells.',
  },
  {
    name: 'Mellemrum', repo: 'sprogaander', date: '2026-10-10', chapters: 'Kap. 1–2',
    genre: 'Fortælling · eventyr', status: 'final',
    blurb: 'A story adventure: walk, talk, and build sentences woven into the story.',
  },
];
// The starter kit every new game is built from (shown at the bottom).
window.KIT = { name: 'Dansk kit · demo', repo: 'dansk-kit', blurb: 'The starter kit every new game copies. A two-minute demo.' };
