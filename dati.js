// 1. ANAGRAFICA E ROSE DELLE 8 SQUADRE (CON PRESIDENTI, MOTTI E CREDITI)
// 1. ANAGRAFICA, PRESIDENTI, CREDITI E ROSE UFFICIALI
const SQUADRE_INFO = {
  "FC SCROTONE": {
    presidente: "Festa",
    motto: "George Floyd",
    crediti: 0,
    por: ["Meret", "Provedel"],
    dif: ["Zortea", "Tavares N.", "Ramon", "Bellanova", "Badiashile", "Gabbia", "Bernasconi", "Miranda J."],
    cen: ["Zambo Anguissa", "Samardzic", "Cissè A.", "Caqueret", "Gudmundsson A.", "Ricci S.", "Thorstvedt"],
    att: ["Kean", "Thuram", "Douvikas", "De Ketelaere", "Maldini", "Pinamonti"]
  },
  "NDICKAZZATE": {
    presidente: "Campa",
    motto: "don lyfans",
    crediti: 21,
    por: ["Okoye", "Bijlow"],
    dif: ["Spinazzola", "Ostigard", "Gila", "Vojvoda", "Stones", "Halhal", "Cambiaso"],
    cen: ["Rabiot", "Orsolini", "Isaksen", "Ederson D.S.", "Taylor K.", "Perrone", "Vergara", "Gonzalez N."],
    att: ["Adams C.", "Bowie", "Malen", "Cutrone", "Soulè", "Dia"]
  },
  "JAGERBOMBERAS": {
    presidente: "Nico",
    motto: "MR ALCOLS",
    crediti: 41,
    por: ["Martinez Jo.", "Falcone", "Caprile"],
    dif: ["Obert", "Gallo", "Kalulu", "Dimarco", "Valle", "Kelly L.", "Kempf"],
    cen: ["Douglas Luiz", "Konè M.", "Calhanoglu", "Odgaard", "Adzic", "Loftus-Cheek", "Mkhitaryan"],
    att: ["Esposito F.P.", "Kolo Muani", "Adams A.", "Vitinha O.", "Zapata D.", "Bonny"]
  },
  "FC ETTANERA": {
    presidente: "Ciotto",
    motto: "Zio Benito",
    crediti: 11,
    por: ["Skorupski", "Carnesecchi", "Sportiello"],
    dif: ["Dragusin", "Chalobah T.", "Valdepenas", "Wesley", "Molina N.", "Holm", "Hien", "Scalvini"],
    cen: ["Bernabè", "Baturina", "Atta", "Ekkelenkamp", "Alajbegovic", "Da Cunha", "Colpani"],
    att: ["Davis K.", "Dovbyk", "Boga", "Bobcek", "Ghedjemis"]
  },
  "VANNACHESTER CITY": {
    presidente: "Ste",
    motto: "Toxico",
    crediti: 26,
    por: ["Muric", "Vicario", "De Gea"],
    dif: ["Hermoso", "Bremer", "Vasquez", "Di Lorenzo", "Lucumi", "Pavard", "Buongiorno", "Mina"],
    cen: ["Mora", "Paz N.", "De Bruyne", "Chukwueze", "Lobotka", "Ferguson", "Fagioli"],
    att: ["Tourè E.", "Hojlund", "Diao", "Raspadori", "Santos A."]
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
    por: ["Svilar", "Daffara"],
    dif: ["Valeri", "Mancini", "Bastoni", "Akanji", "Kossounou", "Tiago Gabriel", "N'Dicka"],
    cen: ["Frattesi", "Modric", "Cristante", "Baldanzi", "Politano", "Rodriguez Je.", "Pulisic", "Rowe"],
    att: ["Raimondo", "Krstovic", "Dybala", "Berardi", "Yeboah J.", "Scamacca"]
  },
  "BORUSSIA PDORTMUND": {
    presidente: "Marra",
    motto: "pdor figlio di kmher",
    crediti: 14,
    por: ["Butez", "Stankovic F."],
    dif: ["Delprato", "Solet", "Couto", "Bisseck", "Bartesaghi", "Carlos Augusto", "Kristensen T.", "Martin"],
    cen: ["Jones C.", "Vlasic", "Zielinski", "Bernardeschi", "Casadei", "Mandragora", "McTominay", "Moreira"],
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
  }
};

// 4. GAZZETTA DELLO JUENFANTA
const GAZZETTA_DATA = {
  1: {
    titolo: "URAGANO VANNACHESTER: 85 PUNTI! FANTACULO ILLUSORIO PER NDICKAZZATE, SCROTONE GODE",
    sommario: "Parte col botto la stagione: Vannachester a valanga, Young Girls cinico e Scrotone di misura. Clamoroso nel finale: entra Soulè dalla panca ma non basta!",
    mvps: [
      {
        nome: "Diao (Vannachester City)",
        punti: "13.5",
        motivazione: "Doppietta micidiale alla prima di campionato: travolge il Totoríino e guida i suoi al record di 85 punti!"
      },
      {
        nome: "Raimondo (Young Girls)",
        punti: "13.5",
        motivazione: "Spettacolo puro: due gol pesantissimi che stendono il Borussia Pdortmund regalando il primo posto a YG!"
      }
    ],
    topScore: { squadra: "VANNACHESTER CITY", punti: "85.0" },
    fantasfiga: {
      squadra: "TOTORÍINO (75 pt)",
      descrizione: "Segna 75 punti facendo una prestazione sontuosa (che contro 6 squadre su 7 sarebbe valsa i 3 punti), ma incrocia un Vannachester illegale e rimane incredibilmente a quota 0."
    },
    gufataPanchina: [
      {
        mister: "NDICKAZZATE (FANTACULO BEFFATO)",
        rimpianto: "Cutrone rimedia un S.V. ed entra il primo attaccante di ruolo disponibile in panchina: Matias Soulè con un clamoroso 11.5! La rapina sembrava compiuta, ma lo Scrotone regge per un soffio e vince 2-1. Fantaculo sprecato!"
      },
      {
        mister: "BORUSSIA PDORTMUND",
        rimpianto: "Mandragora piazza un sontuoso 10.5 in panchina, ma a centrocampo sono andati tutti a voto: bonus sprecato e ko amaro contro Young Girls."
      },
      {
        mister: "JAGERBOMBERAS",
        rimpianto: "Adzic timbra il 10 da riserva; centrocampo titolare al completo e pareggio amarissimo nel derby contro FC Ettanera."
      }
    ],
    pagellone: [
      { nome: "VANNACHESTER CITY", voto: "9.5", commento: "Paz, Hermoso, Hojlund e Diao: 85 punti e messaggio intimidatorio inviato a tutta la lega." },
      { nome: "YOUNG GIRLS", voto: "8", commento: "Raimondo fa il fuoriclasse (13.5) e Frattesi non sbaglia. Partenza con i fiocchi." },
      { nome: "FC SCROTONE", voto: "7", commento: "Sopravvive all'ingresso miracoloso di Soulè per NDICKAZZATE e strappa 3 punti pesantissimi." },
      { nome: "NDICKAZZATE", voto: "5.5", commento: "Gli dei del fanta gli regalano un 11.5 dalla panchina e riesce a perdere lo stesso. Poi si rifà sul mercato!" },
      { nome: "BORUSSIA PDORTMUND", voto: "5", commento: "Attacco con le polveri bagnate e troppi punti lasciati a prender polvere tra le riserve." }
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
        dif: [
          { name: "Zortea", v: "-", fv: "-" },
          { name: "Tavares N.", v: "6.5", fv: "6.5" },
          { name: "Ramon", v: "6", fv: "6" },
          { name: "Bellanova", v: "5.5", fv: "5" }
        ],
        cen: [
          { name: "Zambo Anguissa", v: "5.5", fv: "5.5" },
          { name: "Samardzic", v: "6", fv: "6" },
          { name: "Cissè A.", v: "7", fv: "9.5 ⚽" }
        ],
        att: [
          { name: "Kean (C)", v: "6.5", fv: "7.5" },
          { name: "Thuram", v: "7", fv: "10 ⚽" },
          { name: "Douvikas", v: "5.5", fv: "5.5" }
        ],
        bench: [
          { r: "P", name: "Provedel", v: "-", fv: "-" },
          { r: "D", name: "Badiashile", v: "5", fv: "5" },
          { r: "D", name: "Gabbia", v: "-", fv: "-" },
          { r: "C", name: "Caqueret", v: "6.5", fv: "6.5" },
          { r: "C", name: "Gudmundsson A.", v: "7", fv: "10 ⚽" },
          { r: "C", name: "Ricci S.", v: "SV", fv: "SV" },
          { r: "C", name: "Thorstvedt", v: "6", fv: "6" },
          { r: "A", name: "De Ketelaere", v: "6", fv: "6" },
          { r: "A", name: "Maldini", v: "7", fv: "10 ⚽" },
          { r: "A", name: "Pinamonti", v: "5", fv: "5" },
          { r: "D", name: "Bernasconi", v: "-", fv: "-" },
          { r: "D", name: "Miranda J.", v: "6.5", fv: "7.5" }
        ]
      },
      away11: {
        modulo: "4-3-3",
        por: [{ name: "Okoye", v: "6", fv: "4" }],
        dif: [
          { name: "Spinazzola", v: "5.5", fv: "5.5" },
          { name: "Ostigard", v: "4.5", fv: "4" },
          { name: "Gila", v: "6.5", fv: "6.5" },
          { name: "Vojvoda", v: "4.5", fv: "4.5" }
        ],
        cen: [
          { name: "Rabiot", v: "5", fv: "5" },
          { name: "Da Cunha", v: "6.5", fv: "6.5" },
          { name: "Colpani", v: "6", fv: "6" }
        ],
        att: [
          { name: "Piccoli", v: "6.5", fv: "9.5 ⚽" },
          { name: "Malen (C)", v: "6", fv: "6" },
          { name: "Cutrone", v: "SV", fv: "SV" }
        ],
        bench: [
          { r: "P", name: "Bijlow", v: "5.5", fv: "1.5" },
          { r: "D", name: "Stones", v: "-", fv: "-" },
          { r: "D", name: "Halhal", v: "4.5", fv: "4" },
          { r: "D", name: "Cambiaso", v: "-", fv: "-" },
          { r: "C", name: "Ederson D.S.", v: "7", fv: "10 ⚽" },
          { r: "C", name: "Taylor K.", v: "6", fv: "6" },
          { r: "C", name: "Perrone", v: "6.5", fv: "6.5" },
          { r: "C", name: "Vergara", v: "5.5", fv: "5" },
          { r: "C", name: "Gonzalez N.", v: "6.5", fv: "6.5" },
          { r: "A", name: "Soulè", v: "7.5", fv: "11.5 ⚽ (Sub)" },
          { r: "A", name: "Dovbyk", v: "7", fv: "9.5 ⚽" },
          { r: "A", name: "Dia", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "JAGERBOMBERAS", away: "FC ETTANERA", score: "1 - 1", homeFanta: "67.5", awayFanta: "71",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Martinez Jo.", v: "6.5", fv: "4.5" }],
        dif: [
          { name: "Obert", v: "6.5", fv: "6.5" },
          { name: "Gallo", v: "5.5", fv: "5.5" },
          { name: "Kalulu", v: "6.5", fv: "6.5" },
          { name: "Dimarco (C)", v: "6.5", fv: "7.5" }
        ],
        cen: [
          { name: "Douglas Luiz", v: "5.5", fv: "5.5" },
          { name: "Konè M.", v: "6", fv: "6" },
          { name: "Calhanoglu", v: "6", fv: "6" }
        ],
        att: [
          { name: "Esposito F.P.", v: "6", fv: "6" },
          { name: "Kolo Muani", v: "4.5", fv: "4.5" },
          { name: "Adams A.", v: "5.5", fv: "5.5" }
        ],
        bench: [
          { r: "P", name: "Falcone", v: "6.5", fv: "5" },
          { r: "P", name: "Caprile", v: "6", fv: "7" },
          { r: "D", name: "Valle", v: "7", fv: "8" },
          { r: "D", name: "Kelly L.", v: "-", fv: "-" },
          { r: "D", name: "Kempf", v: "-", fv: "-" },
          { r: "C", name: "Odgaard", v: "5.5", fv: "5.5" },
          { r: "C", name: "Adzic", v: "7", fv: "10 ⚽" },
          { r: "C", name: "Loftus-Cheek", v: "5.5", fv: "5.5" },
          { r: "C", name: "Mkhitaryan", v: "-", fv: "-" },
          { r: "A", name: "Vitinha O.", v: "5.5", fv: "5.5" },
          { r: "A", name: "Zapata D.", v: "-", fv: "-" },
          { r: "A", name: "Bonny", v: "SV", fv: "SV" }
        ]
      },
      away11: {
        modulo: "4-5-1",
        por: [{ name: "Skorupski", v: "6.5", fv: "4.5" }],
        dif: [
          { name: "Dragusin", v: "5.5", fv: "6.5" },
          { name: "Chalobah T.", v: "6", fv: "6" },
          { name: "Valdepenas", v: "5", fv: "5" },
          { name: "Wesley", v: "7", fv: "7" }
        ],
        cen: [
          { name: "Bernabè", v: "-", fv: "-" },
          { name: "Baturina (C)", v: "7", fv: "9.5 ⚽" },
          { name: "Atta", v: "6", fv: "6" },
          { name: "Ekkelenkamp", v: "5.5", fv: "5.5" },
          { name: "Alajbegovic", v: "5.5", fv: "5.5" }
        ],
        att: [
          { name: "Davis K.", v: "6.5", fv: "7.5" }
        ],
        bench: [
          { r: "P", name: "Carnesecchi", v: "7", fv: "5" },
          { r: "P", name: "Sportiello", v: "-", fv: "-" },
          { r: "D", name: "Molina N.", v: "6", fv: "6" },
          { r: "D", name: "Holm", v: "6", fv: "5.5" },
          { r: "A", name: "Bowie", v: "7", fv: "7" },
          { r: "D", name: "Hien", v: "-", fv: "-" },
          { r: "D", name: "Scalvini", v: "5.5", fv: "5.5" },
          { r: "C", name: "Isaksen", v: "5.5", fv: "5" },
          { r: "C", name: "Orsolini", v: "-", fv: "-" },
          { r: "A", name: "Boga", v: "5.5", fv: "5.5" },
          { r: "A", name: "Bobcek", v: "-", fv: "-" },
          { r: "A", name: "Ghedjemis", v: "6", fv: "6" }
        ]
      }
    },
    {
      home: "VANNACHESTER CITY", away: "TOTORÍINO", score: "4 - 2", homeFanta: "85", awayFanta: "75",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Muric", v: "5.5", fv: "3.5" }],
        dif: [
          { name: "Hermoso", v: "7", fv: "10 ⚽" },
          { name: "Bremer", v: "6", fv: "6" },
          { name: "Vasquez", v: "5", fv: "5" },
          { name: "Di Lorenzo", v: "6", fv: "7" }
        ],
        cen: [
          { name: "Mora", v: "6", fv: "6" },
          { name: "Paz N.", v: "7", fv: "10 ⚽" },
          { name: "De Bruyne", v: "6", fv: "6" }
        ],
        att: [
          { name: "Tourè E.", v: "6", fv: "6" },
          { name: "Hojlund", v: "7", fv: "10 ⚽" },
          { name: "Diao", v: "7.5", fv: "13.5 ⚽⚽" }
        ],
        bench: [
          { r: "P", name: "Vicario", v: "6", fv: "5" },
          { r: "P", name: "De Gea", v: "6", fv: "4" },
          { r: "D", name: "Lucumi", v: "6.5", fv: "6.5" },
          { r: "D", name: "Pavard", v: "-", fv: "-" },
          { r: "D", name: "Buongiorno", v: "-", fv: "-" },
          { r: "D", name: "Mina", v: "-", fv: "-" },
          { r: "C", name: "Chukwueze", v: "6.5", fv: "7.5" },
          { r: "C", name: "Lobotka", v: "6.5", fv: "6.5" },
          { r: "C", name: "Ferguson", v: "6", fv: "6" },
          { r: "A", name: "Raspadori", v: "-", fv: "-" },
          { r: "A", name: "Santos A.", v: "6", fv: "6" },
          { r: "C", name: "Fagioli", v: "5.5", fv: "5.5" }
        ]
      },
      away11: {
        modulo: "4-4-2",
        por: [{ name: "Maignan", v: "6", fv: "5" }],
        dif: [
          { name: "Rrahmani", v: "5.5", fv: "5.5" },
          { name: "Pavlovic", v: "6", fv: "6" },
          { name: "Celik", v: "5.5", fv: "5.5" },
          { name: "Dodò", v: "-", fv: "-" }
        ],
        cen: [
          { name: "Zaccagni", v: "6.5", fv: "7.5" },
          { name: "Calò", v: "6.5", fv: "6.5" },
          { name: "Diouf", v: "6", fv: "6" },
          { name: "Barella", v: "5.5", fv: "5.5" }
        ],
        att: [
          { name: "Colombo", v: "6.5", fv: "7.5" },
          { name: "Martinez L.(C)", v: "7.5", fv: "13 ⚽⚽" }
        ],
        bench: [
          { r: "P", name: "Mandas", v: "6.5", fv: "5.5" },
          { r: "D", name: "Zappacosta", v: "5.5", fv: "5.5" },
          { r: "D", name: "Jimenez A.", v: "-", fv: "-" },
          { r: "D", name: "Gaspar K.", v: "5", fv: "4.5" },
          { r: "C", name: "Conceicao", v: "6.5", fv: "6.5" },
          { r: "C", name: "Saelemaekers", v: "5.5", fv: "5.5" },
          { r: "C", name: "Mastantuono", v: "5.5", fv: "5.5" },
          { r: "C", name: "Liberali", v: "SV", fv: "SV" },
          { r: "A", name: "Adams C.", v: "7", fv: "10 ⚽" },
          { r: "A", name: "Esposito Se.", v: "-", fv: "-" },
          { r: "D", name: "Spence", v: "-", fv: "-" },
          { r: "A", name: "Kevin Carlos", v: "-", fv: "-" }
        ]
      }
    },
    {
      home: "YOUNG GIRLS", away: "BORUSSIA PDORTMUND", score: "3 - 1", homeFanta: "80", awayFanta: "70.5",
      home11: {
        modulo: "4-3-3",
        por: [{ name: "Svilar", v: "6", fv: "5" }],
        dif: [
          { name: "Valeri", v: "6.5", fv: "6.5" },
          { name: "Mancini", v: "5", fv: "5" },
          { name: "Bastoni", v: "5.5", fv: "5.5" },
          { name: "Akanji", v: "6.5", fv: "7.5" }
        ],
        cen: [
          { name: "Frattesi", v: "7", fv: "10 ⚽" },
          { name: "Modric", v: "6", fv: "6" },
          { name: "Cristante", v: "6", fv: "6" }
        ],
        att: [
          { name: "Raimondo", v: "7.5", fv: "13.5 ⚽⚽" },
          { name: "Krstovic", v: "5", fv: "5" },
          { name: "Dybala (C)", v: "7", fv: "8" }
        ],
        bench: [
          { r: "A", name: "Berardi", v: "6.5", fv: "6.5" },
          { r: "C", name: "Baldanzi", v: "6", fv: "6" },
          { r: "A", name: "Yeboah J.", v: "7", fv: "10 ⚽" },
          { r: "C", name: "Politano", v: "6.5", fv: "9.5 ⚽" },
          { r: "C", name: "Rodriguez Je.", v: "-", fv: "-" },
          { r: "C", name: "Pulisic", v: "-", fv: "-" },
          { r: "D", name: "Kossounou", v: "5.5", fv: "5.5" },
          { r: "A", name: "Scamacca", v: "6", fv: "6" },
          { r: "C", name: "Rowe", v: "-", fv: "-" },
          { r: "D", name: "Tiago Gabriel", v: "5", fv: "5" },
          { r: "P", name: "Daffara", v: "-", fv: "-" },
          { r: "D", name: "N'Dicka", v: "5.5", fv: "5.5" }
        ]
      },
      away11: {
        modulo: "3-4-3",
        por: [{ name: "Butez", v: "6", fv: "5" }],
        dif: [
          { name: "Delprato", v: "6", fv: "6" },
          { name: "Solet", v: "6", fv: "6" },
          { name: "Couto", v: "7", fv: "8" }
        ],
        cen: [
          { name: "Jones C.", v: "6", fv: "6" },
          { name: "Vlasic", v: "5.5", fv: "5.5" },
          { name: "Zielinski (C)", v: "6.5", fv: "6.5" },
          { name: "Bernardeschi", v: "6", fv: "6" }
        ],
        att: [
          { name: "Pellegrino M.", v: "6.5", fv: "9.5 ⚽" },
          { name: "Ramos G.", v: "5", fv: "5" },
          { name: "Castro S.", v: "6.5", fv: "6.5" }
        ],
        bench: [
          { r: "D", name: "Bisseck", v: "6.5", fv: "6.5" },
          { r: "D", name: "Bartesaghi", v: "-", fv: "-" },
          { r: "D", name: "Carlos Augusto", v: "6.5", fv: "7.5" },
          { r: "D", name: "Kristensen T.", v: "-", fv: "-" },
          { r: "C", name: "Casadei", v: "-", fv: "-" },
          { r: "C", name: "Mandragora", v: "7.5", fv: "10.5 ⚽" },
          { r: "C", name: "McTominay", v: "-", fv: "-" },
          { r: "D", name: "Martin", v: "-", fv: "-" },
          { r: "A", name: "Laurienté", v: "6.5", fv: "6.5" },
          { r: "A", name: "Simeone", v: "6", fv: "6" },
          { r: "P", name: "Stankovic F.", v: "6", fv: "3" },
          { r: "C", name: "Moreira", v: "5", fv: "5" }
        ]
      }
    }
  ]
};