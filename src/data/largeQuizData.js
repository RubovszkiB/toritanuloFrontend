const typeLabels = {
  single_choice: 'Egyválasztós',
  multi_choice: 'Többválasztós',
  true_false: 'Igaz-hamis',
  chronology_order: 'Sorrend',
  matching: 'Párosítás',
  year_input: 'Évszám beírása',
}

const q = (id, type, text, data = {}) => ({
  id,
  type,
  typeId: 90,
  typeLabel: data.typeLabel || typeLabels[type] || 'Kérdés',
  text,
  instruction: data.instruction || 'Válaszolj pontos érettségi tudással. A hibás opciók szándékosan közeli, könnyen összekeverhető elemek.',
  explanation: data.explanation || '',
  difficulty: data.difficulty || 4,
  points: data.points || 2,
  order: data.order || id,
  category: data.category || 'fogalmak',
  skill: data.skill || 'lexika és összefüggés',
  sourceHint: data.sourceHint || 'Saját tételek, emelt feladatlogika, részletes követelmény',
  options: data.options || [],
  acceptedAnswers: data.acceptedAnswers || [],
  pairs: data.pairs || [],
})

const option = (id, text, isCorrect = false, correctOrder = null) => ({ id, text, isCorrect, correctOrder, order: id })
const ans = (id, text, era = 'NONE') => ({ id, text, number: Number.parseInt(text, 10), era, normalized: text })
const pair = (id, left, right) => ({ id, left, right, order: id })

export const largeQuizTopics = [
  { id: 2001, code: 'okor-vallasok', title: 'Ókor, vallások és antik örökség', description: 'Kereszténység, iszlám, antik demokrácia, római állam és topográfiai alapok.', order: 1 },
  { id: 2002, code: 'kozepkor-gazdasag', title: 'Középkor: gazdaság, társadalom, egyház', description: 'Uradalom, jobbágyság, céhek, mezőgazdasági újítások, egyházi intézmények.', order: 2 },
  { id: 2003, code: 'magyar-kozepkor', title: 'Középkori magyar állam és gazdaság', description: 'Árpád-ház, Károly Róbert, bányavárosok, regálék, Mátyás és rendiség.', order: 3 },
  { id: 2004, code: 'kora-ujkor-egyetemes', title: 'Kora újkor egyetemes története', description: 'Felfedezések, reformáció, abszolutizmus, felvilágosodás, francia forradalom.', order: 4 },
  { id: 2005, code: 'magyar-kora-ujkor', title: 'Magyarország a kora újkorban', description: 'Mohács, három részre szakadás, Erdély, Habsburg-rendi konfliktusok, török háborúk.', order: 5 },
  { id: 2006, code: 'reformkor-1848', title: 'Reformkor és 1848-49', description: 'Széchenyi, Kossuth, áprilisi törvények, szabadságharc, nemzetiségi kérdés.', order: 6 },
  { id: 2007, code: 'dualizmus-iparosodas', title: 'Dualizmus és iparosodás', description: 'Kiegyezés, közös ügyek, pártrendszer, gazdasági modernizáció, társadalom.', order: 7 },
  { id: 2008, code: 'vilaghaboruk-trianon', title: 'Világháborúk, Trianon és diktatúrák', description: 'Első világháború, békerendszer, Horthy-korszak, második világháború, holokauszt.', order: 8 },
  { id: 2009, code: 'hideghaboru-kommunizmus', title: 'Hidegháború és kommunista Magyarország', description: 'Kétpólusú világrend, Rákosi-diktatúra, 1956, Kádár-korszak, rendszerváltozás.', order: 9 },
  { id: 2010, code: 'jelenkor-allampolgari', title: 'Jelenkor, EU és állampolgári ismeretek', description: 'Európai integráció, globális világ, magyar intézményrendszer, jogok, választások.', order: 10 },
]

const datasets = [
  {
    id: 2101,
    topicId: 2001,
    slug: 'nagy-okor-vallasok-antik-orokseg',
    title: 'Ókor, vallások és antik örökség - nagy teszt',
    description: 'Konkrét évszámok, személyek, helyszínek és vallási fogalmak az emelt szint logikájával.',
    sourceBasis: ['21. tétel: kereszténység', '22. tétel: iszlám', 'részletes követelmény: forrásból azonosítás'],
    questions: [
      q(210101, 'year_input', 'Melyik év a milánói rendelet éve?', { category: 'évszámok', explanation: '313-ban Constantinus és Licinius vallásszabadságot biztosított a keresztényeknek.', acceptedAnswers: [ans(1, '313', 'CE')] }),
      q(210102, 'year_input', 'Melyik év a hidzsra, az iszlám időszámítás kezdete?', { category: 'évszámok', explanation: '622: Mohamed Mekkából Medinába távozott.', acceptedAnswers: [ans(1, '622', 'CE')] }),
      q(210103, 'matching', 'Párosítsd a személyt vagy fogalmat a hozzá tartozó szereppel!', { category: 'személyek', explanation: 'Ezek az ókori-vallástörténeti alaplexika emelt szinten is elvárt elemei.', pairs: [pair(1, 'Pál apostol', 'a kereszténység terjesztése a nem zsidó közösségek felé'), pair(2, 'Mohamed', 'az iszlám prófétája és a medinai közösség vezetője'), pair(3, 'Constantinus', 'a kereszténység helyzetét javító császár'), pair(4, 'kalifa', 'Mohamed vallási-politikai utódja')] }),
      q(210104, 'single_choice', 'Melyik városhoz kötődik közvetlenül a keresztény egyház nyugati központjának kialakulása?', { category: 'topográfia', explanation: 'A nyugati kereszténység központja Róma lett, a pápaság miatt.', options: [option(1, 'Róma', true), option(2, 'Medina', false), option(3, 'Mekka', false), option(4, 'Alexandria', false)] }),
      q(210105, 'multi_choice', 'Mely állítások igazak az iszlám öt pillérére? Több helyes válasz van.', { category: 'fogalmak', explanation: 'Az öt pillér: hitvallás, ima, böjt, alamizsna, zarándoklat.', options: [option(1, 'A napi ima része.', true), option(2, 'A ramadáni böjt része.', true), option(3, 'A hadsereg kötelező fenntartása az öt pillér egyike.', false), option(4, 'A mekkai zarándoklat része.', true)] }),
      q(210106, 'chronology_order', 'Tedd időrendbe az eseményeket!', { category: 'évszámok', explanation: 'A helyes sorrend: kereszténység kialakulása, milánói rendelet, hidzsra, arab hódítások.', options: [option(1, 'A kereszténység kialakulása Palesztinában', false, 1), option(2, 'Milánói rendelet', false, 2), option(3, 'Hidzsra', false, 3), option(4, 'Arab hódítások a Közel-Keleten és Észak-Afrikában', false, 4)] }),
      q(210107, 'single_choice', 'Melyik fogalom jelenti az egyistenhitet?', { category: 'fogalmak', explanation: 'A monoteizmus egyistenhitet jelent.', options: [option(1, 'monoteizmus', true), option(2, 'politeizmus', false), option(3, 'dualizmus', false), option(4, 'szinkretizmus', false)] }),
      q(210108, 'true_false', 'Igaz vagy hamis? A hidzsra Medinához kötődik.', { category: 'topográfia', explanation: 'Igaz: Mohamed Mekkából Medinába távozott.', options: [option(1, 'Igaz', true), option(2, 'Hamis', false)] }),
      q(210109, 'single_choice', 'Melyik forrásrészlet utal leginkább a keresztény tanítás sajátos erkölcsi hangsúlyára?', { category: 'forrásértelmezés', explanation: 'A megbocsátás és szeretet parancsa a keresztény tanítás egyik kulcseleme.', options: [option(1, '„Szeressétek ellenségeiteket.”', true), option(2, '„A hadizsákmány a győztesé.”', false), option(3, '„A szpáhi katonai szolgálati birtokot kap.”', false), option(4, '„A rendi gyűlés adót szavaz meg.”', false)] }),
      q(210110, 'matching', 'Párosítsd a helyszínt a szerepével!', { category: 'topográfia', explanation: 'A topográfiai tudás itt valódi történelmi szerepeket jelent.', pairs: [pair(1, 'Jeruzsálem', 'a kereszténység korai központja'), pair(2, 'Mekka', 'az iszlám szent városa'), pair(3, 'Medina', 'Mohamed politikai közösségének központja'), pair(4, 'Konstantinápoly', 'a keleti kereszténység központja')] }),
    ],
  },
  {
    id: 2102,
    topicId: 2002,
    slug: 'nagy-kozepkor-gazdasag-tarsadalom',
    title: 'Középkori gazdaság, társadalom és egyház - nagy teszt',
    description: 'Uradalom, jobbágyság, mezőgazdasági technika, céhek és egyházi intézmények konkrét számonkérése.',
    sourceBasis: ['1. tétel: mezőgazdaság és ipar', 'feladatfájl: középkori jobbágyság'],
    questions: [
      q(210201, 'single_choice', 'Melyik eszköz tette lehetővé a kötöttebb északi talajok mélyebb megforgatását?', { category: 'fogalmak', explanation: 'A csoroszlyás, kormánylemezes nehézeke a középkori mezőgazdasági fejlődés kulcseleme.', options: [option(1, 'csoroszlyás, kormánylemezes nehézeke', true), option(2, 'vetélő', false), option(3, 'fonó Jenny', false), option(4, 'gőzgép', false)] }),
      q(210202, 'multi_choice', 'Melyek középkori jobbágyi szolgáltatások? Több helyes válasz van.', { category: 'fogalmak', explanation: 'A robot munkajáradék, a kilenced és tized terményjáradék jellegű szolgáltatás.', options: [option(1, 'robot', true), option(2, 'kilenced', true), option(3, 'tized', true), option(4, 'előszentesítés', false)] }),
      q(210203, 'matching', 'Párosítsd a fogalmat a jelentésével!', { category: 'fogalmak', explanation: 'Az uradalom működését ezekkel a fogalmakkal kell pontosan leírni.', pairs: [pair(1, 'majorság', 'földesúri kezelésben lévő birtokrész'), pair(2, 'jobbágytelek', 'a jobbágy használatában lévő föld'), pair(3, 'robot', 'munkajáradék'), pair(4, 'céh', 'azonos mesterségű iparosok szervezete')] }),
      q(210204, 'single_choice', 'Mi a háromnyomásos gazdálkodás lényege?', { category: 'fogalmak', explanation: 'A földet őszi vetésre, tavaszi vetésre és ugarra osztották, így kisebb lett az ugar aránya.', options: [option(1, 'őszi vetés, tavaszi vetés, ugar váltakozása', true), option(2, 'kizárólag legeltetésre használt föld', false), option(3, 'manufaktúra és gyáripar váltakozása', false), option(4, 'két király együttes uralma', false)] }),
      q(210205, 'chronology_order', 'Tedd logikai sorrendbe a középkori gazdasági fellendülés elemeit!', { category: 'összefüggés', explanation: 'Technikai fejlődés -> nagyobb termés -> népességnövekedés -> városiasodás.', options: [option(1, 'nehézeke és új fogatolás terjedése', false, 1), option(2, 'terméshozam növekedése', false, 2), option(3, 'népességnövekedés', false, 3), option(4, 'városok és céhes ipar erősödése', false, 4)] }),
      q(210206, 'true_false', 'Igaz vagy hamis? A céh egyszerre szakmai érdekvédelmi szervezet és versenykorlátozó intézmény volt.', { category: 'fogalmak', explanation: 'Igaz: szabályozta a termelést, minőséget, árakat, utánpótlást és a piacra lépést.', options: [option(1, 'Igaz', true), option(2, 'Hamis', false)] }),
      q(210207, 'single_choice', 'Melyik állítás jellemzi pontosan az uradalmat?', { category: 'fogalmak', explanation: 'Az uradalom gazdasági és igazgatási egység, földesúri és jobbágyi földekkel, szolgáltatásokkal.', options: [option(1, 'földesúri birtokközpont majorsággal, jobbágytelkekkel és szolgáltatásokkal', true), option(2, 'modern részvénytársaság', false), option(3, 'kizárólag királyi hadsereg', false), option(4, 'parlamenti választókerület', false)] }),
      q(210208, 'matching', 'Párosítsd az egyházi fogalmat a jelentésével!', { category: 'fogalmak', explanation: 'Az egyházi hierarchia és szerzetesség a középkori társadalom fontos része.', pairs: [pair(1, 'pápa', 'a nyugati egyház feje'), pair(2, 'szerzetesrend', 'szabályzat szerint élő vallási közösség'), pair(3, 'püspök', 'egyházmegye vezetője'), pair(4, 'tized', 'egyházi adó')] }),
      q(210209, 'year_input', 'Melyik évvel kezdődik a középkor hagyományos korszakolása a tételben?', { category: 'évszámok', explanation: 'A tétel a középkort 476 és 1492 közé teszi.', acceptedAnswers: [ans(1, '476', 'CE')] }),
      q(210210, 'single_choice', 'Melyik feladatmegoldás lenne érettségiszerű egy jobbágyi szolgáltatásokról szóló forrásnál?', { category: 'forrásértelmezés', explanation: 'Emelt szinten a forrás adatait saját ismerettel kell összekötni.', options: [option(1, 'Megnevezem a robotot, kilencedet, tizedet, és elhelyezem az uradalom rendszerében.', true), option(2, 'Csak kimásolom a forrás első mondatát.', false), option(3, 'A jobbágyot modern munkavállalóként kezelem.', false), option(4, 'Kihagyom a földesúri függést.', false)] }),
    ],
  },
]

const plans = [
  { id: 2111, topicId: 2001, slug: 'nagy-okor-gorog-alapok', title: 'Ókor - görög alapok és Athén - nagy teszt', description: 'Polisz, arisztokrácia, türannisz, athéni demokrácia, görög-perzsa háborúk, hellénizmus.', sourceBasis: ['Évszámteszt: Ókor - görög alapok', 'részletes követelmény: Athén és antik kultúra'], years: [['621', 'Drakón törvényei'], ['594', 'Szolón reformjai'], ['508', 'Kleiszthenész reformjai'], ['490', 'marathóni csata']], persons: [['Drakón', 'írásba foglalt szigorú athéni törvények'], ['Szolón', 'adósságrabszolgaság eltörlése és vagyoni felosztás'], ['Kleiszthenész', 'területi alapú reformok és cserépszavazás'], ['Periklész', 'az athéni demokrácia fénykora']], terms: [['polisz', 'görög városállam'], ['arisztokrácia', 'előkelők uralma'], ['cserépszavazás', 'a türannisz megelőzésére szolgáló eljárás'], ['sztratégosz', 'athéni hadvezér és politikai tisztségviselő']] },
  { id: 2112, topicId: 2001, slug: 'nagy-okor-roma-koztarsasag-principatus', title: 'Ókor - Róma, köztársaság és principátus - nagy teszt', description: 'Római államfejlődés, patrícius-plebejus küzdelem, Caesar, Augustus, principátus, birodalmi válság.', sourceBasis: ['Évszámteszt: Ókor - Róma és a principátus', 'emelt követelmény: római állam és birodalom'], years: [['510', 'a római királyság vége, köztársaság kezdete'], ['367', 'Licinius-Sextius-féle törvények'], ['44', 'Caesar meggyilkolása'], ['27', 'Augustus principátusának kezdete']], persons: [['Julius Caesar', 'dictatori hatalom, polgárháborús győztes'], ['Augustus', 'a principátus rendszerének megteremtője'], ['Tiberius Gracchus', 'földreformkísérlet a válság idején'], ['Diocletianus', 'dominatust és tetrarchiát kialakító császár']], terms: [['patrícius', 'római előkelő, teljes jogú réteg'], ['plebejus', 'közrendű római polgár'], ['principátus', 'köztársasági formák mögé rejtett császári egyeduralom'], ['limes', 'a Római Birodalom határvédelmi rendszere']] },
  { id: 2113, topicId: 2001, slug: 'nagy-okor-keresztenyseg-kesoi-csaszarkor', title: 'Ókor - kereszténység és késő császárkor - nagy teszt', description: 'Kereszténység kialakulása, üldözés, milánói rendelet, niceai zsinat, államvallássá válás, birodalom kettéválása.', sourceBasis: ['Rövid esszé: kereszténység helyzete a 4. században', '21. tétel'], years: [['313', 'milánói ediktum'], ['325', 'niceai zsinat'], ['380', 'thesszalonikai ediktum'], ['395', 'a Római Birodalom kettéválása']], persons: [['Nagy Konstantin', 'a kereszténység helyzetét javító császár'], ['Theodosius', 'a kereszténységet államvallássá tevő császár'], ['Pál apostol', 'a kereszténység terjesztője a pogányok között'], ['Jézus', 'a kereszténység központi alakja']], terms: [['milánói ediktum', 'vallásszabadság a keresztényeknek'], ['niceai zsinat', 'a keresztény tanítás egységesítésének fontos állomása'], ['államvallás', 'az állam által hivatalosan támogatott vallás'], ['püspök', 'keresztény egyházi vezető']] },
  { id: 2114, topicId: 2002, slug: 'nagy-egyetemes-kozepkor-kora-es-egyhaz', title: 'Egyetemes középkor - kora középkor és egyház - nagy teszt', description: 'Frank Birodalom, hűbériség, egyházszakadás, szerzetesség, keresztes hadjáratok.', sourceBasis: ['Évszámteszt: Egyetemes középkor - kora középkor és egyház', '2. emelt esszéfeladat-csomag'], years: [['732', 'poitiers-i csata'], ['800', 'Nagy Károly császárrá koronázása'], ['1054', 'nagy egyházszakadás'], ['1095', 'clermont-i zsinat, első keresztes hadjárat meghirdetése']], persons: [['Nagy Károly', 'Frank Birodalom császára'], ['Cluny', 'bencés reformmozgalom központja'], ['VII. Gergely', 'invesztitúraharc pápája'], ['II. Orbán', 'az első keresztes hadjárat meghirdetője']], terms: [['hűbériség', 'személyes függésen alapuló rendszer'], ['invesztitúra', 'egyházi tisztségbe iktatás joga'], ['egyházszakadás', 'nyugati és keleti kereszténység szétválása'], ['keresztes hadjárat', 'vallási célú fegyveres vállalkozás']] },
  { id: 2115, topicId: 2003, slug: 'nagy-magyar-kozepkor-tatarjaras-ujjaepites', title: 'Magyar középkor - tatárjárás és IV. Béla újjáépítése - nagy teszt', description: 'Muhi, Batu kán, IV. Béla, kővárépítés, hospesek, második honalapító.', sourceBasis: ['Hosszú esszé: tatárjárás és újjáépítés', 'részletes követelmény 3.2'], years: [['1222', 'Aranybulla kiadása'], ['1241', 'muhi csata'], ['1242', 'tatár kivonulás'], ['1301', 'Árpád-ház kihalása']], persons: [['II. András', 'az Aranybulla kiadója'], ['IV. Béla', 'a tatárjárás utáni újjáépítés királya'], ['Batu kán', 'a mongol támadás vezetője'], ['Kunok', 'befogadásuk belső feszültséget okozott']], terms: [['Aranybulla', 'nemesi jogokat rögzítő oklevél'], ['tatárjárás', '1241-42-es mongol invázió'], ['hospes', 'betelepített vendégtelepes'], ['kővárépítés', 'IV. Béla védelmi politikájának eleme']] },
  { id: 2116, topicId: 2005, slug: 'nagy-magyar-torok-kuzdelmek-komplex', title: 'Magyar-török küzdelmek 1456-1541 - nagy teszt', description: 'Nándorfehérvár, Mátyás védelmi politikája, Jagelló-kori gyengülés, Mohács, Buda elfoglalása.', sourceBasis: ['Komplex esszé: magyar-török küzdelmek 1456-1541', '27. tétel'], years: [['1456', 'nándorfehérvári diadal'], ['1490', 'Mátyás halála'], ['1526', 'mohácsi csata'], ['1541', 'Buda török elfoglalása']], persons: [['Hunyadi János', 'nándorfehérvári védelem vezetője'], ['Kapisztrán János', 'keresztes toborzó Nándorfehérvárnál'], ['II. Lajos', 'Mohácsnál eleső magyar király'], ['I. Szulejmán', 'oszmán szultán Mohács és Buda elfoglalása idején']], terms: [['végvárrendszer', 'déli határvédelmi vonal'], ['fekete sereg', 'Mátyás zsoldoshadserege'], ['kettős királyválasztás', 'Szapolyai és Ferdinánd párhuzamos megválasztása'], ['Hódoltság', 'az oszmán megszállás alatti középső országrész']] },
  { id: 2117, topicId: 2007, slug: 'nagy-nemzetisegi-politika-reformkor-dualizmus', title: 'Nemzetiségi politika a reformkortól a dualizmusig - nagy teszt', description: 'Politikai nemzet, 1848-49 konfliktusai, 1868-as nemzetiségi törvény, horvát-magyar kiegyezés.', sourceBasis: ['Komplex esszé: magyar nemzetiségi politika reformkortól dualizmusig'], years: [['1848', 'forradalom és nemzetiségi konfliktusok kezdete'], ['1849', 'nemzetiségi törvény a szabadságharc végén'], ['1868', 'nemzetiségi törvény és horvát-magyar kiegyezés'], ['1875', 'Szabadelvű Párt kormányra kerülése']], persons: [['Kossuth Lajos', 'politikai nemzet elvének képviselője'], ['Deák Ferenc', 'kiegyezés politikusa'], ['Eötvös József', 'liberális nemzetiségi politika képviselője'], ['Jelačić', 'horvát bán, 1848 ellenfele']], terms: [['politikai nemzet', 'a magyar állam polgárainak jogi-politikai közössége'], ['nemzetiség', 'nyelvi-etnikai közösség'], ['asszimiláció', 'beolvadási folyamat'], ['horvát-magyar kiegyezés', 'Horvátország külön jogállását rendező megállapodás']] },
  { id: 2103, topicId: 2003, slug: 'nagy-karoly-robert-magyar-kozepkor', title: 'Károly Róbert, bányavárosok és magyar középkor - nagy teszt', description: 'Regálék, urbura, kapuadó, harmincad, aranyforint, honorbirtok, Rozgony, Mátyás.', sourceBasis: ['2. tétel: Magyarország gazdasága a 14-15. században'], years: [['1301', 'Árpád-ház kihalása'], ['1308', 'Károly Róbert uralkodásának kezdete'], ['1312', 'rozgonyi csata'], ['1325', 'aranyforint verése']], persons: [['Károly Róbert', 'regáléjövedelmekre építő gazdasági reformok'], ['Nekcsei Demeter', 'tárnokmester, a reformok irányítója'], ['Csák Máté', 'tartományúr'], ['Hunyadi Mátyás', 'fekete sereg és rendkívüli hadiadó']], terms: [['urbura', 'bányaregálé'], ['harmincad', 'külkereskedelmi vám'], ['kapuadó', 'jobbágyportákhoz kötött állami adó'], ['honorbirtok', 'tisztséghez kötött birtokhasználat']] },
  { id: 2104, topicId: 2004, slug: 'nagy-kora-ujkor-felvilagosodas', title: 'Kora újkor, reformáció és felvilágosodás - nagy teszt', description: 'Felfedezések, reformáció, abszolutizmus, hatalommegosztás, népszuverenitás, jogegyenlőség.', sourceBasis: ['14-15. tétel', '23. tétel'], years: [['1492', 'Amerika felfedezése'], ['1517', 'Luther fellépése'], ['1640', 'angol polgári forradalom kezdete'], ['1789', 'francia forradalom kezdete']], persons: [['Luther Márton', 'reformáció elindítója'], ['Kálvin János', 'predesztináció tana'], ['Montesquieu', 'hatalommegosztás elve'], ['Rousseau', 'népszuverenitás gondolata']], terms: [['abszolutizmus', 'rendi korlátokat visszaszorító királyi hatalom'], ['merkantilizmus', 'állami gazdaságpolitika aktív külkereskedelmi mérleggel'], ['hatalommegosztás', 'törvényhozó, végrehajtó, bírói hatalom elválasztása'], ['jogegyenlőség', 'születési előjogok elvetése']] },
  { id: 2105, topicId: 2005, slug: 'nagy-erdely-habsburg-torok', title: 'Erdély, Habsburgok és török küzdelmek - nagy teszt', description: 'Mohács, Buda elfoglalása, Erdély államszervezete, bevett vallások, végvárak, Rákóczi.', sourceBasis: ['5., 13., 27. tétel'], years: [['1526', 'mohácsi csata'], ['1541', 'Buda török elfoglalása'], ['1570', 'speyeri egyezmény'], ['1703', 'Rákóczi-szabadságharc kezdete']], persons: [['Szapolyai János', 'keleti király Mohács után'], ['Fráter György', 'Erdély megszervezésében fontos politikus'], ['Báthory István', 'erdélyi fejedelem, lengyel király'], ['II. Rákóczi Ferenc', 'szabadságharc vezetője']], terms: [['három nemzet', 'magyar nemesség, székelyek, szászok rendi közössége'], ['négy bevett vallás', 'katolikus, református, evangélikus, unitárius'], ['végvárrendszer', 'török elleni déli védelmi vonal'], ['rendi dualizmus', 'uralkodó és rendek hatalmi együttműködése-konfliktusa']] },
  { id: 2106, topicId: 2006, slug: 'nagy-reformkor-1848', title: 'Reformkor és 1848-49 - nagy teszt', description: 'Reformországgyűlések, Széchenyi, Kossuth, áprilisi törvények, szabadságharc.', sourceBasis: ['16. tétel', '23-24. tétel'], years: [['1825', 'reformkor kezdete, országgyűlés'], ['1832', '1832-36-os reformországgyűlés kezdete'], ['1848', 'márciusi forradalom és áprilisi törvények'], ['1849', 'világosi fegyverletétel']], persons: [['Széchenyi István', 'óvatos, arisztokrata reformprogram'], ['Kossuth Lajos', 'érdekegyesítés és politikai nyilvánosság'], ['Deák Ferenc', 'jogi ellenzék és későbbi kiegyezés'], ['Batthyány Lajos', 'első felelős magyar kormány feje']], terms: [['közteherviselés', 'nemesi adómentesség felszámolása'], ['jobbágyfelszabadítás', 'feudális kötöttségek megszüntetése'], ['népképviselet', 'rendi képviselet helyett választott képviselet'], ['felelős kormány', 'az országgyűlésnek felelős végrehajtó hatalom']] },
  { id: 2107, topicId: 2007, slug: 'nagy-dualizmus-gazdasag-tarsadalom', title: 'Dualizmus, iparosodás és társadalom - nagy teszt', description: 'Kiegyezés, közös ügyek, delegációk, vámunió, iparosodás, pártrendszer.', sourceBasis: ['4., 7., 25. tétel'], years: [['1867', 'kiegyezés'], ['1868', 'nemzetiségi törvény'], ['1873', 'Budapest egyesítése'], ['1896', 'millennium']], persons: [['Ferenc József', 'az Osztrák-Magyar Monarchia uralkodója'], ['Andrássy Gyula', 'első miniszterelnök a kiegyezés után'], ['Tisza Kálmán', 'Szabadelvű Párt hosszú kormányzása'], ['Baross Gábor', 'vasút- és közlekedéspolitika']], terms: [['közös ügyek', 'külügy, hadügy és ezek pénzügye'], ['delegációk', 'a közös ügyek parlamenti ellenőrzése'], ['vámunió', 'közös vámterület gazdasági kiegyezéssel'], ['torlódó társadalom', 'eltérő fejlettségű társadalmi rétegek együttélése']] },
  { id: 2108, topicId: 2008, slug: 'nagy-vilaghaboruk-trianon', title: 'Világháborúk és Trianon - nagy teszt', description: 'Szövetségi rendszerek, frontok, forradalmak, béke, revízió, második világháború.', sourceBasis: ['28-29. tétel', '9. tétel'], years: [['1914', 'első világháború kezdete'], ['1918', 'első világháború vége, őszirózsás forradalom'], ['1920', 'trianoni béke'], ['1939', 'második világháború kezdete']], persons: [['Tisza István', 'magyar miniszterelnök az első világháború előtt'], ['Apponyi Albert', 'magyar békedelegáció vezetője'], ['Teleki Pál', 'vörös térkép készítője'], ['Horthy Miklós', 'kormányzó a két világháború között']], terms: [['antant', 'Nagy-Britannia, Franciaország, Oroszország szövetségi rendszere'], ['központi hatalmak', 'Németország és az Osztrák-Magyar Monarchia blokkja'], ['revízió', 'trianoni határok felülvizsgálatának igénye'], ['holokauszt', 'zsidóság államilag szervezett népirtása']] },
  { id: 2109, topicId: 2009, slug: 'nagy-hideghaboru-kommunista-magyarorszag', title: 'Hidegháború és kommunista Magyarország - nagy teszt', description: 'Blokkok, NATO, Varsói Szerződés, Rákosi, 1956, Kádár, rendszerváltozás.', sourceBasis: ['30. tétel', '4. és 8. tétel'], years: [['1947', 'Truman-elv'], ['1949', 'NATO és magyar sztálinista alkotmány'], ['1956', 'magyar forradalom'], ['1989', 'rendszerváltozás fordulópontja']], persons: [['Rákosi Mátyás', 'sztálinista diktatúra vezetője'], ['Nagy Imre', '1956 miniszterelnöke'], ['Kádár János', '1956 utáni pártvezető'], ['Gorbacsov', 'peresztrojka és glasznoszty']], terms: [['szalámitaktika', 'politikai ellenfelek fokozatos felszámolása'], ['ÁVH', 'kommunista politikai rendőrség'], ['gulyáskommunizmus', 'Kádár-korszak fogyasztásra építő legitimációja'], ['kétpólusú világrend', 'USA és Szovjetunió vezette blokkok szembenállása']] },
  { id: 2110, topicId: 2010, slug: 'nagy-jelenkor-eu-allampolgari', title: 'Jelenkor, EU és állampolgári ismeretek - nagy teszt', description: 'EU, globalizáció, jogállamiság, hatalommegosztás, választási rendszer, állampolgári jogok.', sourceBasis: ['19. tétel', '14. tétel', 'EU feladatfájlok'], years: [['1957', 'római szerződések'], ['1992', 'maastrichti szerződés'], ['2004', 'Magyarország EU-csatlakozása'], ['2012', 'Alaptörvény hatálybalépése']], persons: [['Robert Schuman', 'európai integráció egyik kezdeményezője'], ['Montesquieu', 'hatalommegosztás elve'], ['köztársasági elnök', 'államfői funkció Magyarországon'], ['miniszterelnök', 'a kormány vezetője']], terms: [['jogállamiság', 'a közhatalom joghoz kötött működése'], ['hatalommegosztás', 'törvényhozás, végrehajtás, bíráskodás elválasztása'], ['általános választójog', 'a választásból kizárás csak kivételes lehet'], ['közös piac', 'áruk, személyek, szolgáltatások és tőke szabad mozgása']] },
]

function buildQuestions(plan) {
  const [y1, y2, y3, y4] = plan.years
  const [p1, p2, p3, p4] = plan.persons
  const [t1, t2, t3, t4] = plan.terms
  const base = plan.id * 100

  return [
    q(base + 1, 'year_input', `Add meg az évszámot: ${y1[1]}!`, { category: 'évszámok', explanation: `${y1[1]}: ${y1[0]}.`, acceptedAnswers: [ans(1, y1[0], 'CE')] }),
    q(base + 2, 'year_input', `Add meg az évszámot: ${y3[1]}!`, { category: 'évszámok', explanation: `${y3[1]}: ${y3[0]}.`, acceptedAnswers: [ans(1, y3[0], 'CE')] }),
    q(base + 3, 'matching', 'Párosítsd a személyt vagy intézményt a szerepével!', { category: 'személyek', explanation: 'A személyekhez kötött szerepek alapvető emelt szintű lexikai elemek.', pairs: [pair(1, p1[0], p1[1]), pair(2, p2[0], p2[1]), pair(3, p3[0], p3[1]), pair(4, p4[0], p4[1])] }),
    q(base + 4, 'matching', 'Párosítsd a fogalmat a meghatározásával!', { category: 'fogalmak', explanation: 'A pontos fogalomhasználat az emelt esszéknél is pontozási szempont.', pairs: [pair(1, t1[0], t1[1]), pair(2, t2[0], t2[1]), pair(3, t3[0], t3[1]), pair(4, t4[0], t4[1])] }),
    q(base + 5, 'chronology_order', 'Tedd időrendbe az eseményeket!', { category: 'évszámok', explanation: `Helyes időrend: ${plan.years.map((item) => `${item[0]} (${item[1]})`).join(', ')}.`, options: [option(1, y1[1], false, 1), option(2, y2[1], false, 2), option(3, y3[1], false, 3), option(4, y4[1], false, 4)] }),
    q(base + 6, 'single_choice', `Melyik személyhez/intézményhez köthető: ${p2[1]}?`, { category: 'személyek', explanation: `${p2[0]}: ${p2[1]}.`, options: [option(1, p1[0], false), option(2, p2[0], true), option(3, p3[0], false), option(4, p4[0], false)] }),
    q(base + 7, 'single_choice', `Melyik fogalom meghatározása: ${t3[1]}?`, { category: 'fogalmak', explanation: `${t3[0]} jelentése: ${t3[1]}.`, options: [option(1, t1[0], false), option(2, t2[0], false), option(3, t3[0], true), option(4, t4[0], false)] }),
    q(base + 8, 'multi_choice', 'Válaszd ki a témához biztosan kapcsolódó elemeket! Több helyes válasz van.', { category: 'összefüggés', explanation: `A helyes elemek a teszt témájának alaplexikájából jönnek: ${p1[0]}, ${t1[0]}, ${y3[1]}.`, options: [option(1, p1[0], true), option(2, t1[0], true), option(3, y3[1], true), option(4, 'Kleiszthenész cserépszavazása', false)] }),
    q(base + 9, 'true_false', `Igaz vagy hamis? ${t4[0]} jelentése: ${t4[1]}.`, { category: 'fogalmak', explanation: `Igaz: ${t4[0]} - ${t4[1]}.`, options: [option(1, 'Igaz', true), option(2, 'Hamis', false)] }),
    q(base + 10, 'single_choice', 'Melyik válasz lenne a legjobb emelt szintű forrásfeladatban?', { category: 'forrásértelmezés', explanation: 'Emelt szinten a forrás állítását konkrét évszámmal, fogalommal és szereplővel kell összekötni.', options: [option(1, `Megnevezem a releváns fogalmat (${t1[0]}), a szereplőt (${p1[0]}) és a korszak fordulópontját (${y1[0]}).`, true), option(2, 'Csak átmásolom a forrás szavait.', false), option(3, 'Nem használok évszámot vagy fogalmat.', false), option(4, 'Más korszak szereplőivel keverem össze.', false)] }),
  ]
}

export const generatedLargeQuizTests = plans.map((plan) => ({
  ...plan,
  type: 'nagy',
  difficulty: 'nehez',
  timeLimitSec: 2400,
  questionCount: 10,
  knowledgeAreas: ['évszámok', 'fogalmak', 'személyek', 'forrásértelmezés'],
  questions: buildQuestions(plan),
}))

export const largeQuizData = {
  topics: largeQuizTopics.map((topic) => {
    const tests = [...datasets, ...generatedLargeQuizTests].filter((test) => test.topicId === topic.id)
    return {
      ...topic,
      testCount: tests.length,
      questionCount: tests.reduce((sum, test) => sum + test.questions.length, 0),
    }
  }),
  tests: [...datasets, ...generatedLargeQuizTests],
}
