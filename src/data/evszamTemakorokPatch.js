export const evszamTemakorokPatch = [
  {
    id: 1004,
    kod: 'egyetemes-kora-ujkor',
    nev: 'A kora újkor egyetemes története',
    leiras: 'Felfedezések, reformáció, abszolutizmus, felvilágosodás és 18. századi háborúk évszámai.',
    szin: 'warning',
    tesztek: [
      'egyetemes-kora-ujkor-alapok',
      'egyetemes-kora-ujkor-vegyes',
      'egyetemes-kora-ujkor-nagy'
    ]
  },
  {
    id: 1005,
    kod: 'magyar-kora-ujkor',
    nev: 'Magyarország a kora újkorban',
    leiras: 'Mohács, három részre szakadás, Erdély, török kiűzése, Rákóczi és a 18. századi reformok évszámai.',
    szin: 'danger',
    tesztek: [
      'magyar-kora-ujkor-alapok',
      'magyar-kora-ujkor-vegyes',
      'magyar-kora-ujkor-nagy'
    ]
  },
  {
    id: 1006,
    kod: 'polgari-atalakulas-vilag',
    nev: 'A polgári átalakulás, a nemzetállamok és az imperializmus kora',
    leiras: 'Francia forradalom, Napóleon, ipari forradalom, német egység, imperializmus és szövetségi rendszerek.',
    szin: 'primary',
    tesztek: [
      'polgari-atalakulas-vilag-alapok',
      'polgari-atalakulas-vilag-vegyes',
      'polgari-atalakulas-vilag-nagy'
    ]
  }
];

export const evszamTesztCimPatch = {
  'egyetemes-kora-ujkor-alapok': 'Kora újkor egyetemes - alap évszámteszt',
  'egyetemes-kora-ujkor-vegyes': 'Kora újkor egyetemes - vegyes teszt',
  'egyetemes-kora-ujkor-nagy': 'Kora újkor egyetemes - nagy teszt',
  'magyar-kora-ujkor-alapok': 'Magyar kora újkor - alap évszámteszt',
  'magyar-kora-ujkor-vegyes': 'Magyar kora újkor - vegyes teszt',
  'magyar-kora-ujkor-nagy': 'Magyar kora újkor - nagy teszt',
  'polgari-atalakulas-vilag-alapok': 'Polgári átalakulás - alap évszámteszt',
  'polgari-atalakulas-vilag-vegyes': 'Polgári átalakulás - vegyes teszt',
  'polgari-atalakulas-vilag-nagy': 'Polgári átalakulás - nagy teszt'
};
