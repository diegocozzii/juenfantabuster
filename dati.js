// 1. ANAGRAFICA, PRESIDENTI, CREDITI E ROSE UFFICIALI (POST-SCAMBI)
const SQUADRE_INFO = {
  "FC SCROTONE": {
    presidente: "Festa",
    motto: "George Floyd",
    crediti: 0,
    por: ["Meret", "Provedel", "Paleari"],
    dif: ["Zortea", "Tavares N.", "Ramon", "Bellanova", "Badiashile", "Gabbia", "Bernasconi", "Miranda J."],
    cen: ["Zambo Anguissa", "Samardzic", "Cissè A.", "Caqueret", "Gudmundsson A.", "Ricci S.", "Thorstvedt"],
    att: ["Kean", "Thuram", "Douvikas", "De Ketelaere", "Maldini", "Pinamonti"]
  },
  "NDICKAZZATE": {
    presidente: "Campa",
    motto: "don lyfans",
    crediti: 21,
    por: ["Okoye", "Bijlow", "Stolz"],
    dif: ["Spinazzola", "Ostigard", "Gila", "Vojvoda", "Stones", "Halhal", "Cambiaso"],
    cen: ["Rabiot", "Orsolini", "Isaksen", "Ederson D.S.", "Taylor K.", "Perrone", "Vergara", "Gonzalez N."],
    att: ["Adams C.", "Bowie", "Malen", "Cutrone", "Soulè", "Dia"]
  },
  "JAGERBOMBERAS": {
    presidente: "Nico",
    motto: "MR ALCOLS",
    crediti: 41,
    por: ["Martinez Jo.", "Falcone", "Caprile"],
    dif: ["Obert", "Gallo", "Kalulu", "Dimarco", "Valle", "Kelly L.", "Kempf", "Marusic"],
    cen: ["Douglas Luiz", "Konè M.", "Calhanoglu", "Odgaard", "Adzic", "Loftus-Cheek", "Mkhitaryan", "McKennie"],
    att: ["Esposito F.P.", "Kolo Muani", "Adams A.", "Vitinha O.", "Zapata D.", "Bonny"]
  },
  "FC ETTANERA": {
    presidente: "Ciotto",
    motto: "ZioBenito",
    crediti: 11,
    por: ["Skorupski", "Carnesecchi", "Sportiello"],
    dif: ["Dragusin", "Chalobah T.", "Valdepenas", "Wesley", "Molina N.", "Holm", "Hien", "Scalvini"],
    cen: ["Bernabè", "Baturina", "Atta", "Ekkelenkamp", "Alajbegovic", "Da Cunha", "Colpani", "Zaniolo"],
    att: ["Davis K.", "Dovbyk", "Boga", "Bobcek", "Ghedjemis"]
  },
  "VANNACHESTER CITY": {
    presidente: "Ste",
    motto: "Toxico",
    crediti: 26,
    por: ["Muric", "Vicario", "De Gea"],
    dif: ["Hermoso", "Bremer", "Vasquez", "Di Lorenzo", "Lucumi", "Pavard", "Buongiorno", "Mina"],
    cen: ["Mora", "Paz N.", "De Bruyne", "Chukwueze", "Lobotka", "Ferguson", "Fagioli", "Thuram K."],
    att: ["Tourè E.", "Hojlund", "Diao", "Raspadori", "Santos A.", "Ekhator"]
  },
  "TOTORÍINO": {
    presidente: "Prave",
    motto: "Jeffrey Epstein",
    crediti: 7,
    por: ["Maignan", "Mandas"],
    dif: ["Rrahmani", "Pavlovic", "Celik", "Dodò", "Zappacosta", "Jimenez A.", "Gaspar K.", "Spence"],
    cen: ["Zaccagni", "Calò", "Diouf", "Barella", "Conceicao", "Saelemaekers", "Mastantuono", "Liberali"],
    att: ["Piccoli", "Martinez L.", "Colombo", "Esposito Se.", "Kevin Carlos"]
  },
  "YOUNG GIRLS": {
    presidente: "Manno",
    motto: "macs bossets",
    crediti: 3,
    por: ["Svilar", "Daffara", "Milinkovic-Savic"],
    dif: ["Valeri", "Mancini", "Bastoni", "Akanji", "Kossounou", "Tiago Gabriel", "N'Dicka", "Heggem"],
    cen: ["Frattesi", "Modric", "Cristante", "Baldanzi", "Politano", "Rodriguez Je.", "Pulisic", "Rowe"],
    att: ["Raimondo", "Krstovic", "Dybala", "Berardi", "Yeboah J.", "Scamacca"]
  },
  "BORUSSIA PDORTMUND": {
    presidente: "Marra",
    motto: "pdor figlio di kmher",
    crediti: 14,
    por: ["Butez", "Stankovic F."],
    dif: ["Delprato", "Solet", "Couto", "Bisseck", "Bartesaghi", "Carlos Augusto", "Kristensen T.", "Martin"],
    cen: ["Jones C.", "Vlasic", "Zielinski", "Bernardeschi", "Casadei", "Mandragora", "McTominay", "Moreira", "Varela G."],
    att: ["Pellegrino M.", "Ramos G.", "Castro S.", "Laurienté", "Simeone"]
  }
};

// 2. BACHECA CALCIOMERCATO
const CALCIOMERCATO = [
  {
    status: "🚨 HERE WE GO! - MAXI SCAMBIO POST-ASTA",
    data: "Post Asta Iniziale (Pre-Campionato)",
    squadraA: "FC ETTANERA",
    squadraB: "NDICKAZZATE",
    dettagli: `
      • <strong>FC Ettanera riceve:</strong> 12 Crediti 💰 + Da Cunha (C) + Colpani (C) + Dovbyk (A)<br>
      • <strong>NDICKAZZATE riceve:</strong> Orsolini (C) + Isaksen (C) + Bowie (A)
    `
  },
  {
    status: "🚨 HERE WE GO! - SCAMBIO BOMBER POST-ASTA",
    data: "Post Asta Iniziale (Pre-Campionato)",
    squadraA: "NDICKAZZATE",
    squadraB: "TOTORÍINO",
    dettagli: `
      • <strong>NDICKAZZATE riceve:</strong> Adams C. (A, Torino)<br>
      • <strong>TOTORÍINO riceve:</strong> Piccoli (A, Bologna)
    `
  }
];

// 3. TOP 11 E FLOP 11 (3-4-3)
const TOP_FLOP_ROUNDS = {
  1: {
    top11: {
      por: [{ name: "Svilar", team: "YG", fv: "5.0", panca: false }],
      dif: [
        { name: "Hermoso", team: "VAN", fv: "10 ⚽", panca: false },
        { name: "Valle", team: "JAG", fv: "8.0", panca: true },
        { name: "Couto", team: "BPD", fv: "8.0", panca: false }
      ],
      cen: [
        { name: "Soulè", team: "NDI", fv: "11.5 ⚽", panca: true },
        { name: "Mandragora", team: "BPD", fv: "10.5 ⚽", panca: true },
        { name: "Paz N.", team: "VAN", fv: "10 ⚽", panca: false },
        { name: "Frattesi", team: "YG", fv: "10 ⚽", panca: false }
      ],
      att: [
        { name: "Diao", team: "VAN", fv: "13.5 ⚽⚽", panca: false },
        { name: "Raimondo", team: "YG", fv: "13.5 ⚽⚽", panca: false },
        { name: "Martinez L.", team: "TOT", fv: "13 ⚽⚽", panca: false }
      ]
    },
    flop11: {
      por: [{ name: "Bijlow", team: "NDI", fv: "1.5", panca: true }],
      dif: [
        { name: "Ostigard", team: "NDI", fv: "4.0", panca: false },
        { name: "Halhal", team: "NDI", fv: "4.0", panca: true },
        { name: "Gaspar K.", team: "TOT", fv: "4.5", panca: true }
      ],
      cen: [
        { name: "Rabiot", team: "NDI", fv: "5.0", panca: false },
        { name: "Vergara", team: "NDI", fv: "5.0", panca: true },
        { name: "Moreira", team: "BPD", fv: "5.0", panca: true },
        { name: "Barella", team: "TOT", fv: "5.5", panca: false }
      ],
      att: [
        { name: "Kolo Muani", team: "JAG", fv: "4.5", panca: false },
        { name: "Ramos G.", team: "BPD", fv: "5.0", panca: false },
        { name: "Krstovic", team: "YG", fv: "5.0", panca: false }
      ]
    }
  },
  2: {
    top11: {
      por: [{ name: "Svilar", team: "YG", fv: "7.5 🧤", panca: false }],
      dif: [
        { name: "Carlos Augusto", team: "BPD", fv: "10.5 ⚽", panca: true },
        { name: "Tiago Gabriel", team: "YG", fv: "10 ⚽", panca: true },
        { name: "Ramon", team: "SCR", fv: "10 ⚽", panca: false }
      ],
      cen: [
        { name: "Mastantuono", team: "TOT", fv: "17.5 ⚽⚽⚽", panca: true },
        { name: "Moreira", team: "BPD", fv: "14 ⚽⚽", panca: true },
        { name: "Barella", team: "TOT", fv: "10.5 ⚽", panca: false },
        { name: "Lobotka", team: "VAN", fv: "10.5 ⚽", panca: true }
      ],
      att: [
        { name: "Thuram", team: "SCR", fv: "11.5 ⚽", panca: false },
        { name: "Esposito Se.", team: "TOT", fv: "10.5 ⚽", panca: true },
        { name: "Bowie", team: "ETT", fv: "10 ⚽", panca: false }
      ]
    },
    flop11: {
      por: [{ name: "Stankovic F.", team: "BPD", fv: "2.0", panca: true }],
      dif: [
        { name: "Bremer", team: "VAN", fv: "5.0", panca: false },
        { name: "Kalulu", team: "JAG", fv: "5.0", panca: false },
        { name: "Gila", team: "NDI", fv: "5.0 🟨", panca: false }
      ],
      cen: [
        { name: "Douglas Luiz", team: "JAG", fv: "4.0 🟨", panca: false },
        { name: "Bernabè", team: "ETT", fv: "4.5", panca: true },
        { name: "Samardzic", team: "SCR", fv: "5.0", panca: false },
        { name: "Bernardeschi", team: "BPD", fv: "5.0", panca: false }
      ],
      att: [
        { name: "Colombo", team: "TOT", fv: "2.0", panca: true },
        { name: "Kolo Muani", team: "JAG", fv: "4.5", panca: false },
        { name: "Ramos G.", team: "BPD", fv: "5.0", panca: false }
      ]
    }
  },
  3: {
    top11: {
      por: [{ name: "Mandas", team: "TOT", fv: "11.5 🧤", panca: true }],
      dif: [
        { name: "Bremer", team: "VAN", fv: "11.0 ⚽", panca: false },
        { name: "Jimenez A.", team: "TOT", fv: "10.0 ⚽", panca: true },
        { name: "Molina N.", team: "ETT", fv: "7.5", panca: true }
      ],
      cen: [
        { name: "Konè M.", team: "JAG", fv: "14.0 ⚽⚽", panca: false },
        { name: "Varela G.", team: "BPD", fv: "14.0 ⚽", panca: true },
        { name: "Pulisic", team: "YG", fv: "11.5 ⚽", panca: false },
        { name: "Adzic", team: "JAG", fv: "10.0 ⚽", panca: false }
      ],
      att: [
        { name: "Martinez L.", team: "TOT", fv: "13.5 ⚽⚽", panca: true },
        { name: "Maldini", team: "SCR", fv: "11.0 ⚽", panca: true },
        { name: "Adams A.", team: "JAG", fv: "9.5", panca: false }
      ]
    },
    flop11: {
      por: [{ name: "Muric", team: "VAN", fv: "2.5", panca: false }],
      dif: [
        { name: "Couto", team: "BPD", fv: "5.0 🟨", panca: false },
        { name: "Bisseck", team: "BPD", fv: "5.0", panca: false },
        { name: "Ostigard", team: "NDI", fv: "5.0", panca: false }
      ],
      cen: [
        { name: "Jones C.", team: "BPD", fv: "5.5", panca: false },
        { name: "Vlasic", team: "BPD", fv: "5.5", panca: false },
        { name: "Da Cunha", team: "NDI", fv: "5.5", panca: false },
        { name: "Atta", team: "ETT", fv: "5.5", panca: false }
      ],
      att: [
        { name: "Yeboah J.", team: "YG", fv: "1.5 🟥", panca: true },
        { name: "Diao", team: "VAN", fv: "5.0 🟨", panca: false },
        { name: "Piccoli", team: "NDI", fv: "5.5", panca: false }
      ]
    }
  }
};

// 4. GAZZETTA DELLO JUENFANTA
const GAZZETTA_DATA = {
  1: {
    titolo: "URAGANO VANNACHESTER: 85 PUNTI! FANTACULO ILLUSORIO PER NDICKAZZATE, SCROTONE GODE",
    sommario: "Parte col botto la stagione: Vannachester a valanga, Young Girls cinico e Scrotone di misura.",
    mvps: [{ nome: "Diao (Vannachester City)", punti: "13.5", motivazione: "Doppietta micidiale." }],
    topScore: { squadra: "VANNACHESTER CITY", punti: "85.0" },
    fantasfiga: { squadra: "TOTORÍINO (75 pt)", descrizione: "Fa 75 punti ma trova un Vannachester da 85." },
    gufataPanchina: [{ mister: "NDICKAZZATE", rimpianto: "Soulè entra con 11.5 ma non basta." }],
    pagellone: [{ nome: "VANNACHESTER CITY", voto: "9.5", commento: "85 punti e show." }]
  },
  2: {
    titolo: "CIOTTO BLOCCA L'URAGANO! PRAVE VINCE MA MASTANTUONO FA TRIPLETTA DALLA PANCHINA",
    sommario: "Crolla Vannachester City, vince Totoríino che lascia 17.5 in panca!",
    mvps: [{ nome: "Mastantuono (Totoríino)", punti: "17.5", motivazione: "Tripletta pazzesca da riserva." }],
    topScore: { squadra: "BORUSSIA PDORTMUND", punti: "74.5" },
    fantasfiga: { squadra: "JAGERBOMBERAS (70 pt)", descrizione: "70 punti ma ko di misura con Marra." },
    gufataPanchina: [{ mister: "TOTORÍINO", rimpianto: "Mastantuono (17.5) ed Esposito (10.5) fuori!" }],
    pagellone: [{ nome: "FC ETTANERA", voto: "8.5", commento: "Ciotto batte i campioni." }]
  },
  3: {
    titolo: "DRAMMA PRAVE: NON SCHIERA LA FORMAZIONE MA SEGNA MEZZA SERIE A! MANDAS DA 11.5 E RECORD BRUCIATO",
    sommario: "Giornata 3 surreale nella lega: il Totoríino dimentica la formazione e rimedia uno 0 a tavolino, mentre i suoi giocatori (Lautaro doppietta, Zaccagni, Conceicao, Calò, Jimenez e perfino Mandas con 11.5!) firmano una pioggia di bonus senza precedenti. Nico espugna il campo di Ste con un Konè mostruoso.",
    mvps: [
      {
        nome: "Konè M. (Jagerbomberas)",
        punti: "14.0",
        motivazione: "Doppietta spaziale e padrone assoluto del centrocampo: trascina Nico al trionfo sul campo del Vannachester!"
      },
      {
        nome: "Lautaro Martinez (Totoríino)",
        punti: "13.5",
        motivazione: "Doppietta da fuoriclasse all'Olimpico contro la Roma... peccato che il suo presidente stesse dormendo!"
      }
    ],
    topScore: { squadra: "JAGERBOMBERAS", punti: "74.0" },
    fantasfiga: {
      squadra: "TOTORÍINO (0 pt per dimenticanza)",
      descrizione: "La madre di tutte le fantasfighe della storia del Fantacalcio: Prave non invia la formazione (0 d'ufficio). Nel frattempo in Serie A segnano TUTTI i suoi uomini: Lautaro (doppietta), Zaccagni (gol), Conceicao (gol), Calò (gol), Jimenez (gol), assist per Pavlovic e Celik, con Mandas che para l'impossibile e prende 11.5! Avrebbe fatto oltre 88 fantapunti polverizzando ogni record, invece perde 2-0 a tavolino."
    },
    gufataPanchina: [
      {
        mister: "BORUSSIA PDORTMUND",
        rimpianto: "Varela fa 14 e Bernardeschi timbra il 10 in panchina! Punti buttati via che non costano però la vittoria."
      },
      {
        mister: "FC SCROTONE",
        rimpianto: "Maldini segna e prende 11 in panchina: con lui in campo Festa avrebbe vinto 1-0 il derby contro Ciotto."
      },
      {
        mister: "VANNACHESTER CITY",
        rimpianto: "Vicario (7.5) e Mina (7) lasciati fuori, mentre Muric affonda con un tragico 2.5."
      }
    ],
    pagellone: [
      { nome: "JAGERBOMBERAS", voto: "9", commento: "Konè illegale, Adzic implacabile e Caprile para tutto. Vittoria pesante a casa di Ste." },
      { nome: "YOUNG GIRLS", voto: "8", commento: "Pulisic da urlo (11.5) e 3 punti gratis colti al volo grazie al sonno del Totoríino." },
      { nome: "BORUSSIA PDORTMUND", voto: "7", commento: "Marra vince di misura con Moreira e vola in testa alla classifica." },
      { nome: "VANNACHESTER CITY", voto: "4.5", commento: "Seconda sconfitta di fila: da macchina da gol a crisi profonda." },
      { nome: "TOTORÍINO", voto: "DA MANICOMIO", commento: "Zero a referto per dimenticanza mentre i suoi segnavano ovunque (6 gol totali e Mandas 11.5). Da non dormirci la notte." }
    ]
  }
};

// 5. TABELLINI UFFICIALI DELLE GIORNATE
const MATCH_DATA = {
  1: [
    {
      home: "FC SCROTONE", away: "NDICKAZZATE", score: "2 - 1", homeFanta: "73", awayFanta: "69",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Meret", v: "7", fv: "4" }],
        dif: [{ name: "Zortea", v: "-", fv: "-" }, { name: "Tavares N.", v: "6.5", fv: "6.5" }, { name: "Ramon", v: "6", fv: "6" }, { name: "Bellanova", v: "5.5", fv: "5" }],
        cen: [{ name: "Zambo Anguissa", v: "5.5", fv: "5.5" }, { name: "Samardzic", v: "6", fv: "6" }, { name: "Cissè A.", v: "7", fv: "9.5 ⚽" }],
        att: [{ name: "Kean (C)", v: "6.5", fv: "7.5" }, { name: "Thuram", v: "7", fv: "10 ⚽" }, { name: "Douvikas", v: "5.5", fv: "5.5" }],
        bench: [
          { r: "P", name: "Provedel", v: "-", fv: "-" }, { r: "D", name: "Badiashile", v: "5", fv: "5" }, { r: "D", name: "Gabbia", v: "-", fv: "-" },
          { r: "C", name: "Caqueret", v: "6.5", fv: "6.5" }, { r: "C", name: "Gudmundsson A.", v: "7", fv: "10 ⚽" }, { r: "C", name: "Ricci S.", v: "SV", fv: "SV" },
          { r: "C", name: "Thorstvedt", v: "6", fv: "6" }, { r: "A", name: "De Ketelaere", v: "6", fv: "6" }, { r: "A", name: "Maldini", v: "7", fv: "10 ⚽" },
          { r: "A", name: "Pinamonti", v: "5", fv: "5" }, { r: "D", name: "Bernasconi", v: "-", fv: "-" }, { r: "D", name: "Miranda J.", v: "6.5", fv: "7.5" }
        ]
      },
      away11: {
        modulo: "4-3-3",
        por: [{ name: "Okoye", v: "6", fv: "4" }],
        dif: [{ name: "Spinazzola", v: "5.5", fv: "5.5" }, { name: "Ostigard", v: "4.5", fv: "4" }, { name: "Gila", v: "6.5", fv: "6.5" }, { name: "Vojvoda", v: "4.5", fv: "4.5" }],
        cen: [{ name: "Rabiot", v: "5", fv: "5" }, { name: "Da Cunha", v: "6.5", fv: "6.5" }, { name: "Colpani", v: "6", fv: "6" }],
        att: [{ name: "Piccoli", v: "6.5", fv: "9.5 ⚽" }, { name: "Malen (C)", v: "6", fv: "6" }, { name: "Cutrone", v: "SV", fv: "SV" }],
        bench: [
          { r: "P", name: "Bijlow", v: "5.5", fv: "1.5" }, { r: "D", name: "Stones", v: "-", fv: "-" }, { r: "D", name: "Halhal", v: "4.5", fv: "4" },
          { r: "D", name: "Cambiaso", v: "-", fv: "-" }, { r: "C", name: "Ederson D.S.", v: "7", fv: "10 ⚽" }, { r: "C", name: "Taylor K.", v: "6", fv: "6" },
          { r: "C", name: "Perrone", v: "6.5", fv: "6.5" }, { r: "C", name: "Vergara", v: "5.5", fv: "5" }, { r: "C", name: "Gonzalez N.", v: "6.5", fv: "6.5" },
          { r: "A", name: "Soulè", v: "7.5", fv: "11.5 ⚽ (Sub)" }, { r: "A", name: "Dovbyk", v: "7", fv: "9.5 ⚽" }, { r: "A", name: "Dia", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "JAGERBOMBERAS", away: "FC ETTANERA", score: "1 - 1", homeFanta: "67.5", awayFanta: "71",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Martinez Jo.", v: "6.5", fv: "4.5" }],
        dif: [{ name: "Obert", v: "6.5", fv: "6.5" }, { name: "Gallo", v: "5.5", fv: "5.5" }, { name: "Kalulu", v: "6.5", fv: "6.5" }, { name: "Dimarco (C)", v: "6.5", fv: "7.5" }],
        cen: [{ name: "Douglas Luiz", v: "5.5", fv: "5.5" }, { name: "Konè M.", v: "6", fv: "6" }, { name: "Calhanoglu", v: "6", fv: "6" }],
        att: [{ name: "Esposito F.P.", v: "6", fv: "6" }, { name: "Kolo Muani", v: "4.5", fv: "4.5" }, { name: "Adams A.", v: "5.5", fv: "5.5" }],
        bench: [
          { r: "P", name: "Falcone", v: "6.5", fv: "5" }, { r: "P", name: "Caprile", v: "6", fv: "7" }, { r: "D", name: "Valle", v: "7", fv: "8" },
          { r: "D", name: "Kelly L.", v: "-", fv: "-" }, { r: "D", name: "Kempf", v: "-", fv: "-" }, { r: "C", name: "Odgaard", v: "5.5", fv: "5.5" },
          { r: "C", name: "Adzic", v: "7", fv: "10 ⚽" }, { r: "C", name: "Loftus-Cheek", v: "5.5", fv: "5.5" }, { r: "C", name: "Mkhitaryan", v: "-", fv: "-" },
          { r: "A", name: "Vitinha O.", v: "5.5", fv: "5.5" }, { r: "A", name: "Zapata D.", v: "-", fv: "-" }, { r: "A", name: "Bonny", v: "SV", fv: "SV" }
        ]
      },
      away11: {
        modulo: "4-5-1",
        por: [{ name: "Skorupski", v: "6.5", fv: "4.5" }],
        dif: [{ name: "Dragusin", v: "5.5", fv: "6.5" }, { name: "Chalobah T.", v: "6", fv: "6" }, { name: "Valdepenas", v: "5", fv: "5" }, { name: "Wesley", v: "7", fv: "7" }],
        cen: [{ name: "Bernabè", v: "-", fv: "-" }, { name: "Baturina (C)", v: "7", fv: "9.5 ⚽" }, { name: "Atta", v: "6", fv: "6" }, { name: "Ekkelenkamp", v: "5.5", fv: "5.5" }, { name: "Alajbegovic", v: "5.5", fv: "5.5" }],
        att: [{ name: "Davis K.", v: "6.5", fv: "7.5" }],
        bench: [
          { r: "P", name: "Carnesecchi", v: "7", fv: "5" }, { r: "P", name: "Sportiello", v: "-", fv: "-" }, { r: "D", name: "Molina N.", v: "6", fv: "6" },
          { r: "D", name: "Holm", v: "6", fv: "5.5" }, { r: "A", name: "Bowie", v: "7", fv: "7" }, { r: "D", name: "Hien", v: "-", fv: "-" },
          { r: "D", name: "Scalvini", v: "5.5", fv: "5.5" }, { r: "C", name: "Isaksen", v: "5.5", fv: "5" }, { r: "C", name: "Orsolini", v: "-", fv: "-" },
          { r: "A", name: "Boga", v: "5.5", fv: "5.5" }, { r: "A", name: "Bobcek", v: "-", fv: "-" }, { r: "A", name: "Ghedjemis", v: "6", fv: "6" }
        ]
      }
    },
    {
      home: "VANNACHESTER CITY", away: "TOTORÍINO", score: "4 - 2", homeFanta: "85", awayFanta: "75",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Muric", v: "5.5", fv: "3.5" }],
        dif: [{ name: "Hermoso", v: "7", fv: "10 ⚽" }, { name: "Bremer", v: "6", fv: "6" }, { name: "Vasquez", v: "5", fv: "5" }, { name: "Di Lorenzo", v: "6", fv: "7" }],
        cen: [{ name: "Mora", v: "6", fv: "6" }, { name: "Paz N.", v: "7", fv: "10 ⚽" }, { name: "De Bruyne", v: "6", fv: "6" }],
        att: [{ name: "Tourè E.", v: "6", fv: "6" }, { name: "Hojlund", v: "7", fv: "10 ⚽" }, { name: "Diao", v: "7.5", fv: "13.5 ⚽⚽" }],
        bench: [
          { r: "P", name: "Vicario", v: "6", fv: "5" }, { r: "P", name: "De Gea", v: "6", fv: "4" }, { r: "D", name: "Lucumi", v: "6.5", fv: "6.5" },
          { r: "D", name: "Pavard", v: "-", fv: "-" }, { r: "D", name: "Buongiorno", v: "-", fv: "-" }, { r: "D", name: "Mina", v: "-", fv: "-" },
          { r: "C", name: "Chukwueze", v: "6.5", fv: "7.5" }, { r: "C", name: "Lobotka", v: "6.5", fv: "6.5" }, { r: "C", name: "Ferguson", v: "6", fv: "6" },
          { r: "A", name: "Raspadori", v: "-", fv: "-" }, { r: "A", name: "Santos A.", v: "6", fv: "6" }, { r: "C", name: "Fagioli", v: "5.5", fv: "5.5" }
        ]
      },
      away11: {
        modulo: "4-4-2",
        por: [{ name: "Maignan", v: "6", fv: "5" }],
        dif: [{ name: "Rrahmani", v: "5.5", fv: "5.5" }, { name: "Pavlovic", v: "6", fv: "6" }, { name: "Celik", v: "5.5", fv: "5.5" }, { name: "Dodò", v: "-", fv: "-" }],
        cen: [{ name: "Zaccagni", v: "6.5", fv: "7.5" }, { name: "Calò", v: "6.5", fv: "6.5" }, { name: "Diouf", v: "6", fv: "6" }, { name: "Barella", v: "5.5", fv: "5.5" }],
        att: [{ name: "Colombo", v: "6.5", fv: "7.5" }, { name: "Martinez L.(C)", v: "7.5", fv: "13 ⚽⚽" }],
        bench: [
          { r: "P", name: "Mandas", v: "6.5", fv: "5.5" }, { r: "D", name: "Zappacosta", v: "5.5", fv: "5.5" }, { r: "D", name: "Jimenez A.", v: "-", fv: "-" },
          { r: "D", name: "Gaspar K.", v: "5", fv: "4.5" }, { r: "C", name: "Conceicao", v: "6.5", fv: "6.5" }, { r: "C", name: "Saelemaekers", v: "5.5", fv: "5.5" },
          { r: "C", name: "Mastantuono", v: "5.5", fv: "5.5" }, { r: "C", name: "Liberali", v: "SV", fv: "SV" }, { r: "A", name: "Adams C.", v: "7", fv: "10 ⚽" },
          { r: "A", name: "Esposito Se.", v: "-", fv: "-" }, { r: "D", name: "Spence", v: "-", fv: "-" }, { r: "A", name: "Kevin Carlos", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "YOUNG GIRLS", away: "BORUSSIA PDORTMUND", score: "3 - 1", homeFanta: "80", awayFanta: "70.5",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Svilar", v: "6", fv: "5" }],
        dif: [{ name: "Valeri", v: "6.5", fv: "6.5" }, { name: "Mancini", v: "5", fv: "5" }, { name: "Bastoni", v: "5.5", fv: "5.5" }, { name: "Akanji", v: "6.5", fv: "7.5" }],
        cen: [{ name: "Frattesi", v: "7", fv: "10 ⚽" }, { name: "Modric", v: "6", fv: "6" }, { name: "Cristante", v: "6", fv: "6" }],
        att: [{ name: "Raimondo", v: "7.5", fv: "13.5 ⚽⚽" }, { name: "Krstovic", v: "5", fv: "5" }, { name: "Dybala (C)", v: "7", fv: "8" }],
        bench: [
          { r: "A", name: "Berardi", v: "6.5", fv: "6.5" }, { r: "C", name: "Baldanzi", v: "6", fv: "6" }, { r: "A", name: "Yeboah J.", v: "7", fv: "10 ⚽" },
          { r: "C", name: "Politano", v: "6.5", fv: "9.5 ⚽" }, { r: "C", name: "Rodriguez Je.", v: "-", fv: "-" }, { r: "C", name: "Pulisic", v: "-", fv: "-" },
          { r: "D", name: "Kossounou", v: "5.5", fv: "5.5" }, { r: "A", name: "Scamacca", v: "6", fv: "6" }, { r: "C", name: "Rowe", v: "-", fv: "-" },
          { r: "D", name: "Tiago Gabriel", v: "5", fv: "5" }, { r: "P", name: "Daffara", v: "-", fv: "-" }, { r: "D", name: "N'Dicka", v: "5.5", fv: "5.5" }
        ]
      },
      away11: {
        modulo: "3-4-3",
        por: [{ name: "Butez", v: "6", fv: "5" }],
        dif: [{ name: "Delprato", v: "6", fv: "6" }, { name: "Solet", v: "6", fv: "6" }, { name: "Couto", v: "7", fv: "8" }],
        cen: [{ name: "Jones C.", v: "6", fv: "6" }, { name: "Vlasic", v: "5.5", fv: "5.5" }, { name: "Zielinski (C)", v: "6.5", fv: "6.5" }, { name: "Bernardeschi", v: "6", fv: "6" }],
        att: [{ name: "Pellegrino M.", v: "6.5", fv: "9.5 ⚽" }, { name: "Ramos G.", v: "5", fv: "5" }, { name: "Castro S.", v: "6.5", fv: "6.5" }],
        bench: [
          { r: "D", name: "Bisseck", v: "6.5", fv: "6.5" }, { r: "D", name: "Bartesaghi", v: "-", fv: "-" }, { r: "D", name: "Carlos Augusto", v: "6.5", fv: "7.5" },
          { r: "D", name: "Kristensen T.", v: "-", fv: "-" }, { r: "C", name: "Casadei", v: "-", fv: "-" }, { r: "C", name: "Mandragora", v: "7.5", fv: "10.5 ⚽" },
          { r: "C", name: "McTominay", v: "-", fv: "-" }, { r: "D", name: "Martin", v: "-", fv: "-" }, { r: "A", name: "Laurienté", v: "6.5", fv: "6.5" },
          { r: "A", name: "Simeone", v: "6", fv: "6" }, { r: "P", name: "Stankovic F.", v: "6", fv: "3" }, { r: "C", name: "Moreira", v: "5", fv: "5" }
        ]
      }
    }
  ],
  2: [
    {
      home: "FC ETTANERA", away: "VANNACHESTER CITY", score: "1 - 0", homeFanta: "69.5", awayFanta: "65.5",
      home11: {
        modulo: "5-3-2",
        por: [{ name: "Carnesecchi", v: "6.5", fv: "4.5" }],
        dif: [
          { name: "Scalvini", v: "5.5", fv: "5.5" }, { name: "Valdepenas", v: "-", fv: "-" },
          { name: "Dragusin", v: "6.5", fv: "6.5" }, { name: "Chalobah T.", v: "-", fv: "-" },
          { name: "Wesley", v: "-", fv: "-" }
        ],
        cen: [{ name: "Atta", v: "6.5", fv: "6.5" }, { name: "Ekkelenkamp", v: "6.5", fv: "9.5 ⚽" }, { name: "Baturina (C)", v: "6", fv: "6" }],
        att: [{ name: "Davis K.", v: "6.5", fv: "7" }, { name: "Bowie", v: "7", fv: "10 ⚽" }],
        bench: [
          { r: "P", name: "Skorupski", v: "-", fv: "-" }, { r: "P", name: "Sportiello", v: "-", fv: "-" },
          { r: "C", name: "Isaksen", v: "5.5", fv: "5.5" }, { r: "C", name: "Alajbegovic", v: "6", fv: "6" },
          { r: "D", name: "Molina N.", v: "6", fv: "6 (Sub)" }, { r: "D", name: "Holm", v: "6", fv: "6 (Sub)" },
          { r: "D", name: "Hien", v: "-", fv: "-" }, { r: "C", name: "Bernabè", v: "6", fv: "6" },
          { r: "C", name: "Orsolini", v: "-", fv: "-" }, { r: "A", name: "Bobcek", v: "6", fv: "6" },
          { r: "A", name: "Boga", v: "-", fv: "-" }, { r: "A", name: "Ghedjemis", v: "6.5", fv: "6.5" }
        ]
      },
      away11: {
        modulo: "4-3-3",
        por: [{ name: "Vicario", v: "6", fv: "3" }],
        dif: [{ name: "Hermoso", v: "6", fv: "5.5" }, { name: "Lucumi", v: "6", fv: "5.5" }, { name: "Bremer", v: "5", fv: "5" }, { name: "Di Lorenzo", v: "6", fv: "6" }],
        cen: [{ name: "Mora", v: "6", fv: "6" }, { name: "Paz N.", v: "6.5", fv: "7.5" }, { name: "Fagioli", v: "7", fv: "8" }],
        att: [{ name: "Raspadori (C)", v: "6", fv: "6" }, { name: "Hojlund", v: "5.5", fv: "5.5" }, { name: "Diao", v: "6.5", fv: "5.5" }],
        bench: [
          { r: "P", name: "De Gea", v: "6", fv: "4" }, { r: "P", name: "Muric", v: "5.5", fv: "3.5" },
          { r: "D", name: "Vasquez", v: "6", fv: "8" }, { r: "D", name: "Pavard", v: "5.5", fv: "5.5" },
          { r: "D", name: "Mina", v: "-", fv: "-" }, { r: "D", name: "Buongiorno", v: "-", fv: "-" },
          { r: "C", name: "Chukwueze", v: "6", fv: "6" }, { r: "C", name: "De Bruyne", v: "6.5", fv: "6.5" },
          { r: "C", name: "Ferguson", v: "5.5", fv: "6.5" }, { r: "C", name: "Lobotka", v: "7.5", fv: "10.5 ⚽" },
          { r: "A", name: "Tourè E.", v: "5.5", fv: "5.5" }, { r: "A", name: "Santos A.", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "TOTORÍINO", away: "FC SCROTONE", score: "2 - 0", homeFanta: "73.5", awayFanta: "65.5",
      home11: {
        modulo: "4-4-2",
        por: [{ name: "Maignan", v: "6.5", fv: "4.5" }],
        dif: [{ name: "Rrahmani", v: "6.5", fv: "6.5" }, { name: "Pavlovic", v: "5.5", fv: "5" }, { name: "Celik", v: "5.5", fv: "5.5" }, { name: "Gaspar K.", v: "-", fv: "-" }],
        cen: [{ name: "Calò", v: "6.5", fv: "6.5" }, { name: "Conceicao", v: "5.5", fv: "5.5" }, { name: "Diouf", v: "6.5", fv: "7.5" }, { name: "Barella (C)", v: "7.5", fv: "10.5 ⚽" }],
        att: [{ name: "Adams C.", v: "-", fv: "-" }, { name: "Martinez L.", v: "-", fv: "-" }],
        bench: [
          { r: "P", name: "Mandas", v: "6.5", fv: "4.5" }, { r: "D", name: "Dodò", v: "-", fv: "-" },
          { r: "D", name: "Jimenez A.", v: "6.5", fv: "7.5 (Sub)" }, { r: "D", name: "Zappacosta", v: "-", fv: "-" },
          { r: "C", name: "Mastantuono", v: "8.5", fv: "17.5 ⚽⚽⚽" }, { r: "C", name: "Saelemaekers", v: "-", fv: "-" },
          { r: "C", name: "Zaccagni", v: "6.5", fv: "7" }, { r: "C", name: "Liberali", v: "-", fv: "-" },
          { r: "A", name: "Colombo", v: "5", fv: "2 (Sub)" }, { r: "A", name: "Esposito Se.", v: "7.5", fv: "10.5 ⚽" },
          { r: "D", name: "Spence", v: "-", fv: "-" }, { r: "A", name: "Kevin Carlos", v: "SV", fv: "SV" }
        ]
      },
      away11: {
        modulo: "4-3-3",
        por: [{ name: "Meret", v: "-", fv: "-" }],
        dif: [{ name: "Zortea", v: "-", fv: "-" }, { name: "Miranda J.", v: "5.5", fv: "5.5" }, { name: "Ramon", v: "7", fv: "10 ⚽" }, { name: "Bellanova", v: "5.5", fv: "5.5" }],
        cen: [{ name: "Zambo Anguissa", v: "-", fv: "-" }, { name: "Samardzic", v: "5", fv: "5" }, { name: "Cissè A.", v: "5.5", fv: "5.5" }],
        att: [{ name: "Kean (C)", v: "5.5", fv: "5.5" }, { name: "Thuram", v: "7.5", fv: "11.5 ⚽" }, { name: "Douvikas", v: "6", fv: "6" }],
        bench: [
          { r: "P", name: "Provedel", v: "-", fv: "-" }, { r: "D", name: "Badiashile", v: "-", fv: "-" },
          { r: "D", name: "Gabbia", v: "-", fv: "-" }, { r: "C", name: "Caqueret", v: "6", fv: "5.5 (Sub)" },
          { r: "C", name: "Gudmundsson A.", v: "6", fv: "6" }, { r: "C", name: "Ricci S.", v: "SV", fv: "SV" },
          { r: "C", name: "Thorstvedt", v: "5.5", fv: "5.5" }, { r: "A", name: "De Ketelaere", v: "5", fv: "5" },
          { r: "A", name: "Maldini", v: "7", fv: "10 ⚽" }, { r: "A", name: "Pinamonti", v: "5.5", fv: "5.5" },
          { r: "D", name: "Bernasconi", v: "6", fv: "6 (Sub)" }, { r: "D", name: "Tavares N.", v: "6", fv: "6" }
        ]
      }
    },
    {
      home: "NDICKAZZATE", away: "YOUNG GIRLS", score: "2 - 1", homeFanta: "73", awayFanta: "68",
      home11: {
        modulo: "4-4-2",
        por: [{ name: "Bijlow", v: "6.5", fv: "5.5" }],
        dif: [{ name: "Spinazzola", v: "6.5", fv: "6.5" }, { name: "Ostigard", v: "6", fv: "6" }, { name: "Gila", v: "5.5", fv: "5" }, { name: "Vojvoda", v: "5.5", fv: "5.5" }],
        cen: [{ name: "Gonzalez N.", v: "6.5", fv: "6.5" }, { name: "Da Cunha", v: "6.5", fv: "6.5" }, { name: "Vergara", v: "6", fv: "6" }, { name: "Rabiot", v: "6.5", fv: "7.5" }],
        att: [{ name: "Soulè", v: "6", fv: "6" }, { name: "Malen (C)", v: "7", fv: "10 ⚽" }],
        bench: [
          { r: "P", name: "Stolz", v: "-", fv: "-" }, { r: "D", name: "Stones", v: "5.5", fv: "5.5" },
          { r: "D", name: "Halhal", v: "-", fv: "-" }, { r: "D", name: "Cambiaso", v: "-", fv: "-" },
          { r: "C", name: "Perrone", v: "6.5", fv: "6.5" }, { r: "C", name: "Ederson D.S.", v: "5.5", fv: "5.5" },
          { r: "C", name: "Taylor K.", v: "6", fv: "6" }, { r: "C", name: "Colpani", v: "5.5", fv: "5.5" },
          { r: "A", name: "Piccoli", v: "5.5", fv: "5.5" }, { r: "A", name: "Dovbyk", v: "-", fv: "-" },
          { r: "A", name: "Cutrone", v: "6", fv: "6" }, { r: "A", name: "Dia", v: "-", fv: "-" }
        ]
      },
      away11: {
        modulo: "3-4-3",
        por: [{ name: "Svilar", v: "6.5", fv: "7.5 🧤" }],
        dif: [{ name: "Valeri", v: "6", fv: "6" }, { name: "Mancini", v: "7", fv: "7" }, { name: "Bastoni", v: "6.5", fv: "6.5" }],
        cen: [{ name: "Frattesi", v: "6", fv: "6" }, { name: "Modric", v: "5.5", fv: "5.5" }, { name: "Rowe", v: "5.5", fv: "5.5" }, { name: "Politano", v: "5.5", fv: "5.5" }],
        att: [{ name: "Raimondo", v: "6", fv: "6" }, { name: "Yeboah J.", v: "5.5", fv: "5.5" }, { name: "Dybala (C)", v: "6.5", fv: "6.5" }],
        bench: [
          { r: "A", name: "Berardi", v: "5.5", fv: "5.5" }, { r: "C", name: "Baldanzi", v: "6", fv: "6" },
          { r: "C", name: "Cristante", v: "6", fv: "6" }, { r: "D", name: "Akanji", v: "5.5", fv: "5.5" },
          { r: "C", name: "Rodriguez Je.", v: "6", fv: "6" }, { r: "C", name: "Pulisic", v: "6.5", fv: "7" },
          { r: "D", name: "Kossounou", v: "5", fv: "5" }, { r: "A", name: "Scamacca", v: "7", fv: "10 ⚽" },
          { r: "A", name: "Krstovic", v: "5.5", fv: "5.5" }, { r: "D", name: "Tiago Gabriel", v: "7", fv: "10 ⚽" },
          { r: "P", name: "Daffara", v: "-", fv: "-" }, { r: "D", name: "N'Dicka", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "BORUSSIA PDORTMUND", away: "JAGERBOMBERAS", score: "2 - 1", homeFanta: "74.5", awayFanta: "70",
      home11: {
        modulo: "3-4-3",
        por: [{ name: "Butez", v: "-", fv: "-" }],
        dif: [{ name: "Kristensen T.", v: "-", fv: "-" }, { name: "Bisseck", v: "-", fv: "-" }, { name: "Couto", v: "6", fv: "6" }],
        cen: [{ name: "Jones C.", v: "6.5", fv: "6.5" }, { name: "Vlasic", v: "5.5", fv: "5.5" }, { name: "Zielinski (C)", v: "7", fv: "8" }, { name: "Bernardeschi", v: "6", fv: "6" }],
        att: [{ name: "Pellegrino M.", v: "7", fv: "10 ⚽" }, { name: "Ramos G.", v: "5.5", fv: "5.5" }, { name: "Laurienté", v: "6.5", fv: "7.5" }],
        bench: [
          { r: "D", name: "Carlos Augusto", v: "7.5", fv: "10.5 ⚽ (Sub)" }, { r: "D", name: "Solet", v: "-", fv: "-" },
          { r: "D", name: "Bartesaghi", v: "-", fv: "-" }, { r: "D", name: "Delprato", v: "6", fv: "6 (Sub)" },
          { r: "D", name: "Martin", v: "-", fv: "-" }, { r: "C", name: "Mandragora", v: "6.5", fv: "6.5" },
          { r: "C", name: "Casadei", v: "-", fv: "-" }, { r: "C", name: "Moreira", v: "8", fv: "14 ⚽⚽" },
          { r: "A", name: "Castro S.", v: "5.5", fv: "5.5" }, { r: "A", name: "Simeone", v: "5.5", fv: "5.5" },
          { r: "C", name: "Varela G.", v: "6", fv: "6" }, { r: "P", name: "Stankovic F.", v: "6", fv: "2 (Sub)" }
        ]
      },
      away11: {
        modulo: "3-4-3",
        por: [{ name: "Martinez Jo.", v: "5", fv: "2" }],
        dif: [{ name: "Valle", v: "-", fv: "-" }, { name: "Kempf", v: "6", fv: "6" }, { name: "Kalulu", v: "5", fv: "5" }],
        cen: [{ name: "Adzic", v: "7", fv: "10 ⚽" }, { name: "Konè M.", v: "6", fv: "6" }, { name: "Calhanoglu", v: "-", fv: "-" }, { name: "Douglas Luiz", v: "4.5", fv: "4" }],
        att: [{ name: "Esposito F.P.", v: "7", fv: "10 ⚽" }, { name: "Kolo Muani", v: "5", fv: "6" }, { name: "Adams A.", v: "6.5", fv: "9.5" }],
        bench: [
          { r: "P", name: "Falcone", v: "5.5", fv: "3.5" }, { r: "P", name: "Caprile", v: "6.5", fv: "5.5" },
          { r: "D", name: "Obert", v: "6", fv: "6 (Sub)" }, { r: "D", name: "Gallo", v: "6.5", fv: "6.5" },
          { r: "D", name: "Kelly L.", v: "5", fv: "5" }, { r: "D", name: "Marusic", v: "-", fv: "-" },
          { r: "C", name: "Odgaard", v: "5.5", fv: "5.5 (Sub)" }, { r: "D", name: "Dimarco", v: "6", fv: "6" },
          { r: "C", name: "Loftus-Cheek", v: "5.5", fv: "5.5" }, { r: "A", name: "Bonny", v: "7", fv: "10 ⚽" },
          { r: "A", name: "Vitinha O.", v: "6", fv: "6" }, { r: "A", name: "Zapata D.", v: "5.5", fv: "5.5" }
        ]
      }
    }
  ],
  3: [
    {
      home: "NDICKAZZATE", away: "BORUSSIA PDORTMUND", score: "0 - 1", homeFanta: "61.5", awayFanta: "67.5",
      home11: {
        modulo: "4-4-2",
        por: [{ name: "Okoye", v: "6", fv: "5" }],
        dif: [
          { name: "Spinazzola", v: "-", fv: "-" },
          { name: "Ostigard", v: "5", fv: "5" },
          { name: "Gila", v: "6.5", fv: "6.5" },
          { name: "Vojvoda", v: "5.5", fv: "5.5" }
        ],
        cen: [
          { name: "Rabiot", v: "7", fv: "10 ⚽" },
          { name: "Da Cunha", v: "5.5", fv: "5.5" },
          { name: "Taylor K.", v: "6.5", fv: "6.5" },
          { name: "Perrone", v: "6", fv: "6" }
        ],
        att: [
          { name: "Piccoli", v: "5.5", fv: "5.5" },
          { name: "Malen (C)", v: "6", fv: "6" }
        ],
        bench: [
          { r: "P", name: "Bijlow", v: "6", fv: "4" }, { r: "D", name: "Stones", v: "-", fv: "-" },
          { r: "D", name: "Halhal", v: "-", fv: "-" }, { r: "D", name: "Cambiaso", v: "-", fv: "-" },
          { r: "C", name: "Ederson D.S.", v: "5.5", fv: "5.5" }, { r: "C", name: "Vergara", v: "-", fv: "-" },
          { r: "C", name: "Gonzalez N.", v: "6", fv: "6" }, { r: "C", name: "Colpani", v: "-", fv: "-" },
          { r: "A", name: "Soulè", v: "6.5", fv: "6.5" }, { r: "A", name: "Cutrone", v: "5.5", fv: "5.5" },
          { r: "A", name: "Dovbyk", v: "-", fv: "-" }, { r: "A", name: "Dia", v: "-", fv: "-" }
        ]
      },
      away11: {
        modulo: "3-4-3",
        por: [{ name: "Butez", v: "6", fv: "4" }],
        dif: [
          { name: "Carlos Augusto", v: "6.5", fv: "6.5" },
          { name: "Bisseck", v: "5", fv: "5" },
          { name: "Couto", v: "5.5", fv: "5 🟨" }
        ],
        cen: [
          { name: "Vlasic", v: "5.5", fv: "5.5" },
          { name: "Moreira", v: "7", fv: "10 ⚽" },
          { name: "Zielinski", v: "5.5", fv: "5.5" },
          { name: "Jones C.", v: "5.5", fv: "5.5" }
        ],
        att: [
          { name: "Pellegrino M.", v: "5.5", fv: "5.5" },
          { name: "Laurientè", v: "6", fv: "6" },
          { name: "Ramos G. (C)", v: "7", fv: "8" }
        ],
        bench: [
          { r: "D", name: "Solet", v: "-", fv: "-" }, { r: "D", name: "Bartesaghi", v: "SV", fv: "SV" },
          { r: "D", name: "Delprato", v: "6", fv: "5.5 🟨" }, { r: "C", name: "Bernardeschi", v: "7", fv: "10 ⚽" },
          { r: "C", name: "Mandragora", v: "6", fv: "7" }, { r: "C", name: "Casadei", v: "-", fv: "-" },
          { r: "A", name: "Simeone", v: "5.5", fv: "5.5" }, { r: "A", name: "Castro S.", v: "-", fv: "-" },
          { r: "C", name: "Varela G.", v: "7.5", fv: "14 ⚽" }, { r: "P", name: "Stankovic F.", v: "6", fv: "4" },
          { r: "D", name: "Kristensen T.", v: "5.5", fv: "5 🟨" }, { r: "D", name: "Martin", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "VANNACHESTER CITY", away: "JAGERBOMBERAS", score: "1 - 2", homeFanta: "68.5", awayFanta: "74",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Muric", v: "4.5", fv: "2.5" }],
        dif: [
          { name: "Di Lorenzo", v: "6", fv: "6" },
          { name: "Hermoso", v: "5.5", fv: "5.5" },
          { name: "Bremer", v: "7", fv: "11 ⚽" },
          { name: "Lucumì", v: "6.5", fv: "6.5" }
        ],
        cen: [
          { name: "Lobotka", v: "6", fv: "6" },
          { name: "Paz N.", v: "6", fv: "6" },
          { name: "Ferguson", v: "6", fv: "6" }
        ],
        att: [
          { name: "Diao", v: "5.5", fv: "5 🟨" },
          { name: "Hojlund", v: "5.5", fv: "5.5" },
          { name: "Tourè E.", v: "6.5", fv: "7.5" }
        ],
        bench: [
          { r: "P", name: "Vicario", v: "6.5", fv: "7.5 🧤" }, { r: "P", name: "De Gea", v: "7", fv: "5.5 🟨" },
          { r: "D", name: "Mina", v: "7", fv: "7" }, { r: "D", name: "Pavard", v: "-", fv: "-" },
          { r: "C", name: "Chukwueze", v: "6", fv: "6" }, { r: "C", name: "De Bruyne", v: "5.5", fv: "5.5" },
          { r: "C", name: "Fagioli", v: "6", fv: "6" }, { r: "C", name: "Mora", v: "-", fv: "-" },
          { r: "A", name: "Raspadori", v: "5.5", fv: "5.5" }, { r: "D", name: "Buongiorno", v: "-", fv: "-" },
          { r: "A", name: "Ekhator", v: "-", fv: "-" }, { r: "C", name: "Thuram K.", v: "-", fv: "-" }
        ]
      },
      away11: {
        modulo: "4-3-3",
        por: [{ name: "Caprile", v: "7", fv: "8 🧤" }],
        dif: [
          { name: "Obert", v: "6", fv: "6" },
          { name: "Gallo", v: "5.5", fv: "5.5" },
          { name: "Kalulu", v: "6", fv: "6" },
          { name: "Dimarco (C)", v: "5.5", fv: "5.5" }
        ],
        cen: [
          { name: "Konè M.", v: "8", fv: "14 ⚽⚽" },
          { name: "McKennie", v: "6.5", fv: "6.5" },
          { name: "Adzic", v: "7", fv: "10 ⚽" }
        ],
        att: [
          { name: "Esposito F.P.", v: "SV", fv: "SV" },
          { name: "Kolo Muani", v: "7", fv: "7" },
          { name: "Adams A.", v: "5", fv: "5" }
        ],
        bench: [
          { r: "P", name: "Martinez Jo.", v: "6.5", fv: "4.5" }, { r: "P", name: "Falcone", v: "6", fv: "3" },
          { r: "D", name: "Kelly L.", v: "SV", fv: "SV" }, { r: "D", name: "Kempf", v: "-", fv: "-" },
          { r: "D", name: "Valle", v: "5", fv: "5" }, { r: "D", name: "Marusic", v: "-", fv: "-" },
          { r: "C", name: "Douglas Luiz", v: "6", fv: "6" }, { r: "C", name: "Odgaard", v: "5.5", fv: "5.5" },
          { r: "C", name: "Loftus-Cheek", v: "5.5", fv: "5.5" }, { r: "A", name: "Bonny", v: "SV", fv: "SV" },
          { r: "A", name: "Vitinha O.", v: "SV", fv: "SV" }, { r: "A", name: "Zapata D.", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "FC SCROTONE", away: "FC ETTANERA", score: "0 - 0", homeFanta: "60.5", awayFanta: "65.5",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Paleari", v: "-", fv: "-" }],
        dif: [
          { name: "Zortea", v: "6", fv: "6" },
          { name: "Miranda J.", v: "6.5", fv: "6.5" },
          { name: "Ramon", v: "5.5", fv: "5.5" },
          { name: "Bellanova", v: "6", fv: "6" }
        ],
        cen: [
          { name: "Zambo Anguissa", v: "SV", fv: "SV" },
          { name: "Samardzic", v: "6", fv: "6" },
          { name: "Cissè A.", v: "-", fv: "-" }
        ],
        att: [
          { name: "Kean (C)", v: "6", fv: "6" },
          { name: "Thuram", v: "6.5", fv: "7.5" },
          { name: "Douvikas", v: "6", fv: "6" }
        ],
        bench: [
          { r: "P", name: "Provedel", v: "-", fv: "-" }, { r: "D", name: "Badiashile", v: "-", fv: "-" },
          { r: "D", name: "Gabbia", v: "-", fv: "-" }, { r: "C", name: "Caqueret", v: "-", fv: "-" },
          { r: "C", name: "Gudmundsson A.", v: "SV", fv: "SV" }, { r: "C", name: "Ricci S.", v: "5.5", fv: "5.5 (Sub)" },
          { r: "C", name: "Thorstvedt", v: "5.5", fv: "5.5 (Sub)" }, { r: "A", name: "De Ketelaere", v: "6", fv: "6" },
          { r: "A", name: "Maldini", v: "7", fv: "11 ⚽" }, { r: "A", name: "Pinamonti", v: "SV", fv: "SV" },
          { r: "D", name: "Bernasconi", v: "5.5", fv: "5.5" }, { r: "D", name: "Tavares N.", v: "6.5", fv: "7.5" }
        ]
      },
      away11: {
        modulo: "4-4-2",
        por: [{ name: "Carnesecchi", v: "6.5", fv: "4.5" }],
        dif: [
          { name: "Chalobah T.", v: "5.5", fv: "5.5" },
          { name: "Dragusin", v: "6.5", fv: "6.5" },
          { name: "Wesley", v: "6.5", fv: "6.5" },
          { name: "Scalvini", v: "5", fv: "5" }
        ],
        cen: [
          { name: "Atta", v: "5.5", fv: "5.5" },
          { name: "Ekkelenkamp", v: "6", fv: "6" },
          { name: "Baturina (C)", v: "5.5", fv: "5.5" },
          { name: "Bernabè", v: "-", fv: "-" }
        ],
        att: [
          { name: "Davis K.", v: "6", fv: "6" },
          { name: "Ghedjemis", v: "7", fv: "7" }
        ],
        bench: [
          { r: "P", name: "Skorupski", v: "5", fv: "4" }, { r: "P", name: "Sportiello", v: "-", fv: "-" },
          { r: "D", name: "Molina N.", v: "6.5", fv: "7.5" }, { r: "D", name: "Holm", v: "SV", fv: "SV" },
          { r: "C", name: "Orsolini", v: "6", fv: "6 (Sub)" }, { r: "C", name: "Zaniolo", v: "5.5", fv: "5 🟨" },
          { r: "C", name: "Alajbegovic", v: "5.5", fv: "5.5" }, { r: "C", name: "Isaksen", v: "SV", fv: "SV" },
          { r: "D", name: "Valdepenas", v: "6", fv: "6" }, { r: "A", name: "Bobcek", v: "-", fv: "-" },
          { r: "A", name: "Bowie", v: "6", fv: "6" }, { r: "A", name: "Boga", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "YOUNG GIRLS", away: "TOTORÍINO", score: "2 - 0", homeFanta: "73", awayFanta: "0",
      home11: {
        modulo: "3-4-3",
        por: [{ name: "Milinkovic-Savic", v: "7", fv: "6" }],
        dif: [
          { name: "Akanji", v: "6", fv: "5.5 🟨" },
          { name: "Mancini", v: "6", fv: "6" },
          { name: "Bastoni", v: "5.5", fv: "5 🟨" }
        ],
        cen: [
          { name: "Frattesi", v: "6", fv: "6" },
          { name: "Pulisic", v: "7.5", fv: "11.5 ⚽" },
          { name: "Baldanzi", v: "5.5", fv: "5.5" },
          { name: "Politano", v: "6.5", fv: "7.5" }
        ],
        att: [
          { name: "Scamacca", v: "5.5", fv: "5.5" },
          { name: "Berardi", v: "5.5", fv: "5.5" },
          { name: "Dybala (C)", v: "7", fv: "7" }
        ],
        bench: [
          { r: "A", name: "Raimondo", v: "6", fv: "5.5 🟨" }, { r: "D", name: "Valeri", v: "6.5", fv: "6.5" },
          { r: "C", name: "Rodriguez Je.", v: "6", fv: "6" }, { r: "A", name: "Yeboah J.", v: "4.5", fv: "1.5 🟥" },
          { r: "C", name: "Modric", v: "6.5", fv: "6.5" }, { r: "C", name: "Cristante", v: "6.5", fv: "6.5" },
          { r: "C", name: "Rowe", v: "5.5", fv: "5.5" }, { r: "A", name: "Krstovic", v: "5", fv: "5" },
          { r: "D", name: "Kossounou", v: "-", fv: "-" }, { r: "D", name: "Heggem", v: "5.5", fv: "5.5" },
          { r: "P", name: "Daffara", v: "-", fv: "-" }, { r: "D", name: "N'Dicka", v: "6", fv: "5.5 🟨" }
        ]
      },
      away11: null // Formazione non schierata (0 d'ufficio)
    }
  ]
};