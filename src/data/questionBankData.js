const S = {
  "single": "Egyválasztós",
  "multi": "Többválasztós",
  "tf": "Igaz-hamis",
  "order": "Sorrend",
  "matching": "Párosítás",
  "year": "Évszám beírása",
  "question": "Kérdés",
  "instr": "Emelt szintű mini kérdés: figyelj a pontos fogalomra, korszakra és összefüggésre.",
  "catConn": "összefüggések",
  "catTerms": "fogalmak",
  "catPeople": "személyek",
  "catYears": "évszámok",
  "catTopo": "topográfia",
  "catSource": "forrásértelmezés",
  "catMistakes": "tipikus hibák",
  "skill": "emelt mini kérdésbank",
  "source": "Kérdésbank-segéd JSON + tételek + emelt feladatlogika",
  "fallbackDef": "emelt szintű fogalom; a tétel összefüggésében kell pontosan használni.",
  "termQ": "Melyik fogalom meghatározása ez:",
  "termExp": "A segéd JSON ezt a témához tartozó emelt lexikaként jelöli.",
  "matchTerms": "Párosítsd a fogalmat a rövid, érettségin használható meghatározással!",
  "matchTermsExp": "A párosítás a pontos szaknyelvet gyakoroltatja, nem puszta felismerést.",
  "personQ": "Kihez köthető legerősebben ez a témabeli fókusz:",
  "personExp": "a segéd JSON szerint ehhez a témához tartozó kulcsszereplő. A rossz válaszok más témák szereplői, ezért könnyű őket összekeverni.",
  "matchPeople": "Párosítsd a személyt a témán belüli szerepével!",
  "matchPeopleExp": "A személyeket nem önmagukban kell felismerni, hanem a tétel megfelelő részéhez kötni.",
  "yearQ": "Add meg az évszámot ehhez a témabeli ponthoz:",
  "yearExp": "A kronológiát a segéd JSON külön kérendő elemként jelöli.",
  "orderQ": "Tedd időrendbe a témához tartozó kronológiai pontokat!",
  "orderExp": "A helyes sorrend a segéd JSON kronológiai listáját követi:",
  "placeQ": "Melyik helyszín kapcsolható ehhez a témabeli elemhez:",
  "placeExp": "a segéd JSON topográfiai fókuszlistájában szerepel ennél a témánál.",
  "matchPlaces": "Párosítsd a helyszínt a témához tartozó szerepével!",
  "matchPlacesExp": "Ez a topográfiát nem vaktérképként, hanem történelmi szerepként kéri számon.",
  "ruleQ": "Mely szempontok illenek ehhez a kérdésírási szabályhoz:",
  "ruleExp": "A helyes válaszok a tétel logikáját, a követelményt és a vizsgaszerű gondolkodást kapcsolják össze.",
  "bad1": "A téma teljes leválasztása a forrásokról és korszakokról.",
  "bad2": "Csak elszigetelt adat bemagolása magyarázat nélkül.",
  "mistakeQ": "Igaz vagy hamis? Ez jó megoldási logika:",
  "mistakeExp": "Hamis. Ez tipikus hiba ennél a témánál. Javítás: kapcsold hozzá a pontos fogalmat, időrendet és a tétel hangsúlyát.",
  "fixQ": "Melyik javítás kezeli legjobban ezt a tipikus hibát:",
  "fixExp": "A jó javítás konkrét fogalmat, korszakot vagy szereplőt köt a félreértéshez.",
  "fixGood": "A hasonló elemeket elválasztom:",
  "fixBad1": "Átugrom a fogalmakat, és csak a címeket tanulom meg.",
  "fixBad2": "Minden korszakot ugyanazzal a magyarázattal oldok meg.",
  "fixBad3": "A forrást nem kapcsolom saját tudáshoz.",
  "sourceQ": "Mini forráselemzés: egy forrás ezt a témát érinti:",
  "sourceAsk": "Melyik válasz lenne emelt szinten elvárható?",
  "sourceExp": "Emelt szinten a forrásból kiemelt információt saját tudással, pontos fogalommal és idő/tér kerettel kell értelmezni.",
  "sourceGood": "A forrás állítását összekötöm ezzel:",
  "sourceBad1": "Csak szó szerint megismétlem a forrást.",
  "sourceBad2": "Másik témakör szereplőit használom bizonyításként.",
  "sourceBad3": "Nem jelölök korszakot vagy helyszínt.",
  "m1": "Gyors 10 kérdés",
  "m1d": "Rövid, de emelt szintű kör fogalommal, személlyel, évszámmal és topográfiával.",
  "m2": "Tételfókusz 20 kérdés",
  "m2d": "A kapcsolódó tételek fontos pontjait több kérdéstípusban kéri számon.",
  "m3": "Emelt mix 25 kérdés",
  "m3d": "Vegyes, nehéz mini teszt a teljes témaköri kérdésbankból.",
  "m4": "Forrásfókusz 15 kérdés",
  "m4d": "Forrásértelmezésre, tipikus hibákra és összefüggésekre építő kör."
}

const helperThemes = [
  {
    "id": "okor",
    "topicId": 3001,
    "code": "okor",
    "title": "Az ókor és kultúrája",
    "description": "athéni demokrácia; római köztársaság működése, Caesar és Augustus; Hun Birodalom",
    "order": 1,
    "linkedTetelek": [
      "21. A kereszténység története",
      "22. Az iszlám vallás és az arab hódítás (összevetéshez előzményként)",
      "ókori politika és vallástörténethez kapcsolódó saját jegyzetek"
    ],
    "requirements": [
      "athéni demokrácia",
      "római köztársaság működése, Caesar és Augustus",
      "Hun Birodalom",
      "ókori pénz és gazdaság",
      "ókori írások, görög filozófia, római jog",
      "zsidó monoteizmus",
      "kereszténység kialakulása, tanai, elterjedése",
      "emelt lexika: principátus, triumvirátus, államvallás, dogma, árupénz, betűírás"
    ],
    "terms": [
      "principátus",
      "triumvirátus",
      "dogma",
      "államvallás",
      "árupénz"
    ],
    "people": [
      "Caesar",
      "Augustus",
      "Pompeius",
      "Szókratész",
      "Nagy Theodosius"
    ],
    "dates": [
      "Kr. e. 31",
      "451"
    ],
    "places": [
      "Actium",
      "Gallia",
      "Hispania",
      "Olümposz",
      "Delphoi"
    ],
    "rules": [
      "Legyen különbség a köztársasági és az egyeduralmi római modell között.",
      "A kereszténységre ne csak tanokra, hanem helyzetváltozásra és elterjedésre is kérdezzen rá.",
      "A görög és római örökség témája ne csak művelődéstörténeti dísz legyen, hanem valódi visszakérdezett tudás."
    ],
    "mistakes": [
      "Augustus és Caesar szerepének összemosása",
      "a kereszténység korai helyzete és államvallássá válása közötti különbség hiánya",
      "az athéni demokrácia összekeverése a modern képviseleti demokráciával"
    ],
    "minimum": 120
  },
  {
    "id": "kozepkor_egyetemes",
    "topicId": 3002,
    "code": "kozepkor-egyetemes",
    "title": "A középkor",
    "description": "iszlám világ; uradalom, jobbágyság, hűbériség, rendiség; középkori városok, céhek, kereskedelem",
    "order": 2,
    "linkedTetelek": [
      "1. Mezőgazdasági és ipari termelés, kereskedelem a középkorban és a kora újkori Európában",
      "21. A kereszténység története",
      "22. Az iszlám vallás és az arab hódítás"
    ],
    "requirements": [
      "iszlám világ",
      "uradalom, jobbágyság, hűbériség, rendiség",
      "középkori városok, céhek, kereskedelem",
      "egyházi intézményrendszer, szerzetesség",
      "egyetemek, lovagi és egyházi kultúra",
      "román, gótikus és reneszánsz építészet",
      "nyugati és keleti kereszténység különbségei",
      "emelt lexika: dzsihád, vazallus, pátriárka, skolasztika, kolduló rend"
    ],
    "terms": [
      "dzsihád",
      "hűbérúr",
      "vazallus",
      "pátriárka",
      "skolasztika",
      "kolduló rend"
    ],
    "people": [
      "Mohamed",
      "III. Ince",
      "Michelangelo"
    ],
    "dates": [
      "955"
    ],
    "places": [
      "Arab Birodalom",
      "Konstantinápoly/Isztambul",
      "Bologna",
      "Oxford"
    ],
    "rules": [
      "A város és az uradalom világa kapjon egyensúlyt.",
      "Az iszlám kérdéseknél legyen vallási, politikai és terjeszkedési dimenzió is.",
      "A nyugati és keleti kereszténység összevetése legyen többféle típusban is visszakérdezve."
    ],
    "mistakes": [
      "az uradalom és a hűbéri rendszer összekeverése",
      "az ortodox és katolikus szervezeti különbségek felszínes ismerete",
      "a céhek és a kereskedővárosok szerepének leegyszerűsítése"
    ],
    "minimum": 140
  },
  {
    "id": "kozepkori_magyar_allam",
    "topicId": 3003,
    "code": "kozepkori-magyar-allam",
    "title": "A középkori magyar állam megteremtése és virágkora",
    "description": "honfoglalás és kalandozások; Géza és I. István államszervezése; László és Könyves Kálmán",
    "order": 3,
    "linkedTetelek": [
      "2. Magyarország gazdasága a 14-15. században",
      "27. Magyar–török küzdelmek a 15-17. században",
      "államalapítás, tatárjárás, Aranybulla, Anjouk, Hunyadiak témájú tételek"
    ],
    "requirements": [
      "honfoglalás és kalandozások",
      "Géza és I. István államszervezése",
      "László és Könyves Kálmán",
      "III. Béla",
      "Aranybulla",
      "tatárjárás és újjáépítés",
      "I. Károly és Nagy Lajos",
      "Zsigmond, Hunyadi János, Hunyadi Mátyás",
      "emelt lexika: szerviens, ellenállási záradék, ősiség, honorbirtok, familiaritás"
    ],
    "terms": [
      "szerviens",
      "ellenállási záradék",
      "ősiség",
      "honorbirtok",
      "familiaritás"
    ],
    "people": [
      "Vitéz János",
      "Anonymus",
      "Szilágyi Mihály",
      "Kapisztrán János",
      "II. Mehmed"
    ],
    "dates": [
      "972–997",
      "1077–1095",
      "1172–1196",
      "1235–1270",
      "1308–1342",
      "1342–1382",
      "1389",
      "1479",
      "1485"
    ],
    "places": [
      "Kalocsa",
      "Óbuda",
      "Moldva",
      "Havasalföld",
      "Bosznia",
      "Krakkó",
      "Nápoly"
    ],
    "rules": [
      "Az Árpád-kor, az Anjou-kor és a Hunyadi-kor különüljön el világosan.",
      "Legyen sok kronológiás és ok–következmény típusú kérdés.",
      "Mátyásnál a külpolitika, bevételek és hatalomtechnika is jelenjen meg."
    ],
    "mistakes": [
      "Aranybulla és 1351-es törvények összekeverése",
      "tatárjárás és török kori pusztítás összemosása",
      "Hunyadi János és Hunyadi Mátyás szerepének keverése"
    ],
    "minimum": 180
  },
  {
    "id": "kora_ujkor_egyetemes",
    "topicId": 3004,
    "code": "kora-ujkor-egyetemes",
    "title": "Szellemi, társadalmi és politikai változások a kora újkorban (1492–1789)",
    "description": "földrajzi felfedezések és világkereskedelem; reformáció és protestáns egyházak; ellenreformáció és katolikus megújulás",
    "order": 4,
    "linkedTetelek": [
      "15. A modern demokráciák 17-18. századi gyökerei",
      "23. A francia forradalom és következményei",
      "24. A XIX. század eszméi (előzményekhez)"
    ],
    "requirements": [
      "földrajzi felfedezések és világkereskedelem",
      "reformáció és protestáns egyházak",
      "ellenreformáció és katolikus megújulás",
      "brit alkotmányos monarchia",
      "amerikai köztársaság",
      "felvilágosodás államelméletei",
      "Emberi és polgári jogok nyilatkozata",
      "jakobinus diktatúra",
      "napóleoni háborúk és a bécsi kongresszus",
      "emelt lexika: merkantilizmus, presbiter, predesztináció, rekatolizáció, elektori rendszer"
    ],
    "terms": [
      "merkantilizmus",
      "predesztináció",
      "rekatolizáció",
      "elektori rendszer",
      "kontinentális zárlat"
    ],
    "people": [
      "Méliusz Juhász Péter",
      "Misztótfalusi Kis Miklós"
    ],
    "dates": [
      "1555",
      "1793–1794",
      "1805",
      "1813"
    ],
    "places": [
      "Genf",
      "Borogyino"
    ],
    "rules": [
      "Legyen sok összehasonlító feladat a reformáció irányzatai között.",
      "A felvilágosodás ne pusztán szerzőfelismerés legyen, hanem államelméleti tartalom is.",
      "A felfedezések gazdasági következményei legyenek nehezek és összefüggésesek."
    ],
    "mistakes": [
      "reformáció és ellenreformáció fogalmi összemosása",
      "brit alkotmányosság és francia forradalmi modell keverése",
      "napóleoni háborúk és a bécsi rendezés következményeinek hiánya"
    ],
    "minimum": 150
  },
  {
    "id": "magyarorszag_kora_ujkorban",
    "topicId": 3005,
    "code": "magyarorszag-kora-ujkorban",
    "title": "Magyarország a kora újkorban (1490–1790)",
    "description": "Mohács és kettős királyválasztás; ország három részre szakadása; várháborúk",
    "order": 5,
    "linkedTetelek": [
      "5. Az Erdélyi Fejedelemség a 16-17. században",
      "13. Rendi és abszolutista törekvések Magyarországon",
      "27. Magyar–török küzdelmek a 15-17. században"
    ],
    "requirements": [
      "Mohács és kettős királyválasztás",
      "ország három részre szakadása",
      "várháborúk",
      "Erdély sajátos etnikai és vallási helyzete",
      "Erdély államszervezete",
      "Bocskai, Bethlen, Zrínyi",
      "török kiűzése",
      "Rákóczi-szabadságharc",
      "újranépesítés",
      "Pragmatica Sanctio és kormányzat",
      "Mária Terézia és II. József reformjai"
    ],
    "terms": [
      "három rendi nemzet",
      "újszerzeményi jog",
      "Szent Liga",
      "görög katolikus",
      "Magyar Kancellária",
      "Helytartótanács"
    ],
    "people": [
      "Tomori Pál",
      "Fráter György",
      "Báthori István",
      "Lotharingiai Károly",
      "Károlyi Sándor",
      "III. Károly"
    ],
    "dates": [
      "1568",
      "1606",
      "1664",
      "1570",
      "1613–1629",
      "1687",
      "1697",
      "1705",
      "1707",
      "1723"
    ],
    "places": [
      "Nagyszombat",
      "Partium",
      "Bánság/Temesköz"
    ],
    "rules": [
      "A három részre szakadás, Erdély és a Habsburg-kormányzat külön egységekben is legyen visszakérdezve.",
      "A rendi–abszolutista konfliktusokból legyen sok ok–következmény kérdés.",
      "A törökellenes küzdelmek ne csak csatákra, hanem politikai következményekre is kérdezzenek rá."
    ],
    "mistakes": [
      "Mohács, 1541 és a speyeri szerződés sorrendjének keverése",
      "Bocskai, Bethlen és Rákóczi mozgalmainak összemosása",
      "Erdély jogi helyzetének és etnikai-vallási sajátosságainak szétválasztatlansága"
    ],
    "minimum": 180
  },
  {
    "id": "ujkor_es_polgari_atalakulas",
    "topicId": 3006,
    "code": "ujkor-es-polgari-atalakulas",
    "title": "A polgári átalakulás, a nemzetállamok és az imperializmus kora (1789–1914)",
    "description": "liberalizmus, nacionalizmus, konzervativizmus; első és második ipari forradalom; urbanizáció és társadalmi hatások",
    "order": 6,
    "linkedTetelek": [
      "7. Az ipari forradalmak társadalmi háttere és hatásai",
      "14. Az emberi jogok és a jogegyenlőség elve",
      "23. A francia forradalom és következményei",
      "24. A XIX. század eszméi"
    ],
    "requirements": [
      "liberalizmus, nacionalizmus, konzervativizmus",
      "első és második ipari forradalom",
      "urbanizáció és társadalmi hatások",
      "munkásmozgalom irányzatai",
      "polgári állam és jogegyenlőség",
      "imperializmus és gyarmatosítás",
      "nemzetállamok"
    ],
    "terms": [
      "kartell",
      "T-modell",
      "Kommunista kiáltvány",
      "Internacionálé",
      "anarchizmus",
      "Rerum Novarum",
      "pánszlávizmus"
    ],
    "people": [
      "Burke",
      "Mill"
    ],
    "dates": [
      "1863",
      "1866",
      "1878"
    ],
    "places": [
      "Elzász-Lotaringia",
      "Szuezi-csatorna",
      "Balkán",
      "Fashoda"
    ],
    "rules": [
      "A politikai eszméket mindig konkrét történeti helyzethez kötve kérdezze vissza.",
      "Az ipari forradalmaknál legyen társadalmi és környezeti következményeket vizsgáló kérdés is.",
      "A gyarmatosítást ne csak térképesen, hanem érdek- és konfliktusalapon is mérje."
    ],
    "mistakes": [
      "liberalizmus, nacionalizmus és konzervativizmus felületes keverése",
      "első és második ipari forradalom összemosása",
      "imperializmus és egyszerű gyarmatosítás azonos kezelése"
    ],
    "minimum": 140
  },
  {
    "id": "polgarosodas_magyarorszagon",
    "topicId": 3007,
    "code": "polgarosodas-magyarorszagon",
    "title": "A polgárosodás kezdetei és kibontakozása Magyarországon (1790–1914)",
    "description": "reformkor; Széchenyi és Kossuth; rendi országgyűlés és megyerendszer",
    "order": 7,
    "linkedTetelek": [
      "4. Magyarország gazdasága 1867-től napjainkig",
      "16. A reformkor, a forradalom és a szabadságharc",
      "25. Politikai eszmék és pártrendszer a dualizmus kori Magyarországon"
    ],
    "requirements": [
      "reformkor",
      "Széchenyi és Kossuth",
      "rendi országgyűlés és megyerendszer",
      "1848–49 forradalom és szabadságharc",
      "nemzetiségek a szabadságharcban",
      "gazdasági kiegyezés",
      "dualizmus kori államszervezet",
      "Budapest fejlődése",
      "pártrendszer és nemzetiségi politika",
      "zsidóság és németség szerepe a polgárosodásban"
    ],
    "terms": [
      "követutasítás",
      "Védegylet",
      "főispán",
      "alispán",
      "közgyűlés",
      "OHB",
      "olmützi alkotmány",
      "delegáció",
      "obstrukció",
      "koalíció"
    ],
    "people": [
      "I. Ferenc",
      "Jellasics",
      "Windisch-Grätz",
      "Gábor Áron",
      "Damjanich János",
      "Puskás Tivadar",
      "Kandó Kálmán",
      "Ybl Miklós",
      "Podmaniczky Frigyes",
      "Herzl Tivadar"
    ],
    "dates": [
      "1849. április isaszegi csata",
      "1875–1890",
      "1905"
    ],
    "places": [
      "Vaskapu"
    ],
    "rules": [
      "A reformkor és a dualizmus ne olvadjon össze egyetlen blokkba.",
      "Legyenek nehéz összevetések Széchenyi és Kossuth között.",
      "A dualizmusnál a politika, gazdaság, társadalom és nemzetiségi kérdés egyszerre is jelenjen meg."
    ],
    "mistakes": [
      "1848-as forradalom és szabadságharc egyetlen tömbként, belső tagolás nélkül",
      "a kiegyezés és a dualista politikai rendszer felszínes ismerete",
      "Budapest fejlődése csak tényként, nem folyamatként való kezelése"
    ],
    "minimum": 190
  },
  {
    "id": "vilaghaboruk_egyetemes",
    "topicId": 3008,
    "code": "vilaghaboruk-egyetemes",
    "title": "A világháborúk kora (1914–1945)",
    "description": "első világháború kirobbanása és frontjai; bolsevik hatalomátvétel; párizs környéki békék",
    "order": 8,
    "linkedTetelek": [
      "28. Az első világháború és következményei",
      "29. A második világháború (egyetemes, magyar)",
      "30. A kétpólusú világrend (előzményként és következményként)"
    ],
    "requirements": [
      "első világháború kirobbanása és frontjai",
      "bolsevik hatalomátvétel",
      "párizs környéki békék",
      "nemzetiszocializmus, kommunizmus, fasizmus",
      "világgazdasági válság és kezelése",
      "második világháború frontjai és fordulópontjai",
      "holokauszt Európában"
    ],
    "terms": [
      "Schlieffen-terv",
      "jegyrendszer",
      "pacifizmus",
      "Harmadik Birodalom",
      "CSEKA/NKVD",
      "duce",
      "kolhoz",
      "Atlanti Charta",
      "genocídium",
      "nürnbergi törvények"
    ],
    "people": [
      "Hindenburg",
      "Trockij",
      "Goebbels",
      "Berija",
      "Keynes",
      "Rommel",
      "Zsukov",
      "Eisenhower"
    ],
    "dates": [
      "1914. július 28.",
      "1917 USA belépése",
      "1919 Versailles",
      "1936 Berlin–Róma tengely",
      "1940 angliai csata",
      "1942 wannseei konferencia",
      "1942 El-Alamein",
      "1942 Midway",
      "1945. szeptember 2."
    ],
    "places": [
      "Przemyśl",
      "Otrantó",
      "Danzig",
      "Szudéta-vidék",
      "Vichy",
      "Kurszk",
      "Varsó",
      "Mauthausen",
      "Jasenovac"
    ],
    "rules": [
      "Az első és a második világháború között legyen világos átmeneti logika.",
      "A rezsimek összehasonlítása több kérdéstípusban is jelenjen meg.",
      "A második világháború ne csak hadtörténeti, hanem társadalmi és emberi következményeket is visszakérdezzen."
    ],
    "mistakes": [
      "fasiszta, nemzetiszocialista és kommunista rendszerek egybemosása",
      "a két világháború frontjainak és fordulópontjainak keverése",
      "holokauszt időrendjének és folyamatának hiányos ismerete"
    ],
    "minimum": 220
  },
  {
    "id": "magyarorszag_vilaghaboruk_koraban",
    "topicId": 3009,
    "code": "magyarorszag-vilaghaboruk-koraban",
    "title": "Magyarország a világháborúk korában (1914–1945)",
    "description": "forradalmi átalakulás és ellenforradalom 1918–1920; trianoni béke; magyar konszolidáció az 1920-as években",
    "order": 9,
    "linkedTetelek": [
      "4. Magyarország gazdasága 1867-től napjainkig",
      "8. Életmód és mindennapok Magyarországon a 20. században",
      "28. Az első világháború és következményei",
      "29. A második világháború (egyetemes, magyar)"
    ],
    "requirements": [
      "forradalmi átalakulás és ellenforradalom 1918–1920",
      "trianoni béke",
      "magyar konszolidáció az 1920-as években",
      "válságkezelés az 1930-as években",
      "életmód, társadalom, kultúrpolitika",
      "területi revízió és hadba sodródás",
      "magyar háborús részvétel 1944 márciusáig",
      "magyarországi holokauszt",
      "német megszállás, nyilas diktatúra"
    ],
    "terms": [
      "Magyar Nemzeti Tanács",
      "demarkációs vonal",
      "legitimizmus",
      "Collegium Hungaricum",
      "dzsentri",
      "vitézi rend",
      "porrajmos",
      "kollektív bűnösség"
    ],
    "people": [
      "Szamuely Tibor",
      "Prónay Pál",
      "Beneš",
      "Piłsudski",
      "Szombathelyi Ferenc",
      "Sztójay Döme",
      "Eichmann"
    ],
    "dates": [
      "1918. november 3.",
      "1920",
      "1921 soproni népszavazás",
      "1944. május",
      "1944. július",
      "1944. augusztus",
      "1944. december–1945. február"
    ],
    "places": [
      "Balassagyarmat"
    ],
    "rules": [
      "A két világháború közötti magyar belpolitikai és társadalmi folyamatok kapjanak nagy súlyt.",
      "A revíziós politika ne csak területlistákból álljon, hanem folyamatként jelenjen meg.",
      "1944 kérdésköre legyen különösen részletes és nehéz."
    ],
    "mistakes": [
      "Trianon csak következményként, nem előzmény–következmény rendszerben való ismerete",
      "a magyar holokauszt és a német megszállás időrendjének keverése",
      "a Horthy-korszak társadalmi és gazdasági rétegének elhanyagolása"
    ],
    "minimum": 210
  },
  {
    "id": "jelenkor",
    "topicId": 3010,
    "code": "jelenkor",
    "title": "A jelenkor (1945-től napjainkig)",
    "description": "Európai Unió szervei és működése; integráció mélyítése és bővítése; globális gazdaság és centrumok",
    "order": 10,
    "linkedTetelek": [
      "9. A határon túli magyarok, a magyarországi nemzetiségek és a cigányság helyzete napjainkban",
      "19. A mai Magyarország politikai intézményrendszere és választási rendszere",
      "30. A kétpólusú világrend"
    ],
    "requirements": [
      "Európai Unió szervei és működése",
      "integráció mélyítése és bővítése",
      "globális gazdaság és centrumok",
      "demográfiai változások",
      "globalizáció kulturális hatásai",
      "Magyarország a NATO-ban és az EU-ban",
      "Alaptörvény, hatalmi ágak, választási rendszer",
      "határon túli magyarok és nemzetiségek helyzete"
    ],
    "terms": [
      "Alapjogi Charta",
      "négy szabadság",
      "lisszaboni szerződés",
      "Európai Központi Bank",
      "kohéziós alap",
      "ombudsman",
      "interpelláció",
      "parlamenti frakció"
    ],
    "people": [
      "Robert Schuman",
      "Sütő András"
    ],
    "dates": [
      "1991 visegrádi megállapodás",
      "2010 törvény a nemzeti összetartozásról"
    ],
    "places": [
      "Strasbourg",
      "Hongkong",
      "Brazília",
      "Dél-Afrika"
    ],
    "rules": [
      "Az EU-t ne csak intézményfelismerésként, hanem működési logikával együtt kérdezze.",
      "A jelenkori demográfiai és globális témáknál legyen értelmező jellegű kérdés is.",
      "A magyar politikai intézményrendszert többféle mikrotípusban kérdezze vissza."
    ],
    "mistakes": [
      "EU-intézmények szerepének keverése",
      "a jelenkori magyar politikai intézmények felületes ismerete",
      "nemzetiségi és határon túli magyar kérdések összemosása"
    ],
    "minimum": 130
  },
  {
    "id": "magyarorszag_1945_rendszervaltozasig",
    "topicId": 3011,
    "code": "magyarorszag-1945-rendszervaltozasig",
    "title": "Magyarország 1945-től a rendszerváltozásig",
    "description": "szovjetizálás Magyarországon; Rákosi-diktatúra; államosítás, kollektivizálás, terror",
    "order": 11,
    "linkedTetelek": [
      "4. Magyarország gazdasága 1867-től napjainkig",
      "8. Életmód és mindennapok Magyarországon a 20. században",
      "19. A mai Magyarország politikai intézményrendszere és választási rendszere",
      "30. A kétpólusú világrend"
    ],
    "requirements": [
      "szovjetizálás Magyarországon",
      "Rákosi-diktatúra",
      "államosítás, kollektivizálás, terror",
      "1956 és nemzetközi háttere",
      "Kádár-rendszer",
      "ellenzék megszerveződése",
      "rendszerváltoztatás",
      "piacgazdaságra való áttérés"
    ],
    "terms": [
      "SZEB",
      "B-listázás",
      "népfront",
      "munkaverseny",
      "forradalmi bizottság",
      "második gazdaság",
      "szamizdat",
      "Ellenzéki Kerekasztal",
      "spontán privatizáció"
    ],
    "people": [
      "Nagy Ferenc",
      "Péter Gábor",
      "Szabó János",
      "Mansfeld Péter",
      "Aczél György",
      "Pozsgai Imre",
      "Szűrös Mátyás"
    ],
    "dates": [
      "1946",
      "1953–55",
      "1956. október 28.",
      "1985",
      "1989. június 16.",
      "1989. augusztus",
      "1989. október 23."
    ],
    "places": [],
    "rules": [
      "1956 különösen részletesen legyen lefedve.",
      "A Rákosi- és Kádár-rendszer közti különbségek több formában jelenjenek meg.",
      "A rendszerváltást gazdasági és politikai szempontból is kérdezze vissza."
    ],
    "mistakes": [
      "szovjetizálás és kész diktatúra közti átmenet hiánya",
      "1956 forradalmi szakaszainak keverése",
      "Kádár-rendszer és rendszerváltás közti átmenet felszínes kezelése"
    ],
    "minimum": 170
  },
  {
    "id": "tarsadalmi_allampolgari_penzugyi_munkavallaloi",
    "topicId": 3012,
    "code": "tarsadalmi-allampolgari-penzugyi-munkavallaloi",
    "title": "Társadalmi, állampolgári, pénzügyi és munkavállalói ismeretek",
    "description": "emberi jogok, jogegyenlőség; állampolgári jogok és kötelességek; intézményrendszer és állami működés",
    "order": 12,
    "linkedTetelek": [
      "14. Az emberi jogok és a jogegyenlőség elve, az állampolgári jogok, kötelességek",
      "19. A mai Magyarország politikai intézményrendszere és választási rendszere"
    ],
    "requirements": [
      "emberi jogok, jogegyenlőség",
      "állampolgári jogok és kötelességek",
      "intézményrendszer és állami működés",
      "alap pénzügyi és gazdasági logika",
      "munkavállalói alapok, társadalmi tájékozottság"
    ],
    "terms": [
      "Alaptörvény",
      "hatalmi ágak",
      "ombudsman",
      "Állami Számvevőszék",
      "Kúria",
      "mentelmi jog",
      "interpelláció"
    ],
    "people": [],
    "dates": [],
    "places": [],
    "rules": [
      "Ne legyen túl jogszabályszagú, de legyen pontos.",
      "A működési logikát is kérdezze, ne csak a definíciókat.",
      "A gyakorlati állampolgári helyzetekre is épülhet néhány kérdés."
    ],
    "mistakes": [
      "intézmények összekeverése",
      "jogok és kötelességek egyoldalú ismerete",
      "pénzügyi és gazdasági alapok túlzott leegyszerűsítése"
    ],
    "minimum": 90
  }
]

const typeLabels = { single_choice: S.single, multi_choice: S.multi, true_false: S.tf, chronology_order: S.order, matching: S.matching, year_input: S.year }
const definitionMap = {}

function q(id, type, text, data = {}) { return { id, type, typeId: 77, typeLabel: data.typeLabel || typeLabels[type] || S.question, text, instruction: data.instruction || S.instr, explanation: data.explanation || '', difficulty: data.difficulty || 4, points: data.points || 1, order: data.order || id, category: data.category || S.catConn, skill: data.skill || S.skill, sourceHint: data.sourceHint || S.source, options: data.options || [], acceptedAnswers: data.acceptedAnswers || [], pairs: data.pairs || [] } }
const option = (id, text, isCorrect = false, correctOrder = null) => ({ id, text, isCorrect, correctOrder, order: id })
const answer = (id, text, era = 'NONE') => ({ id, text, number: Number.parseInt(text, 10), era, normalized: String(text).replace(/[^0-9]/g, '') || text })
const pair = (id, left, right) => ({ id, left, right, order: id })
const cleanYear = (value) => String(value || '').match(/[0-9]{3,4}/)?.[0] || String(value || '')
const pick = (items, index, fallback) => items[index % Math.max(items.length, 1)] || fallback
const definitionOf = (term, theme) => definitionMap[term] || `${theme.title}: ${term} ${S.fallbackDef}`

function buildQuestionPool(theme) {
  const pool = []
  let id = theme.topicId * 1000
  const terms = theme.terms.length ? theme.terms : theme.requirements.slice(0, 6)
  const people = theme.people.length ? theme.people : theme.linkedTetelek.slice(0, 4)
  const dates = theme.dates.length ? theme.dates : theme.requirements.filter((item) => /[0-9]/.test(item)).slice(0, 4)
  const places = theme.places.length ? theme.places : theme.requirements.slice(-4)
  const allTerms = [...new Set(helperThemes.flatMap((item) => item.terms))]
  const allPeople = [...new Set(helperThemes.flatMap((item) => item.people))]
  const allPlaces = [...new Set(helperThemes.flatMap((item) => item.places))]
  terms.forEach((term, index) => { const distractors = allTerms.filter((item) => item !== term).slice(index, index + 3); pool.push(q(++id, 'single_choice', `${S.termQ} "${definitionOf(term, theme)}"`, { category: S.catTerms, explanation: `${term}: ${definitionOf(term, theme)} ${S.termExp}`, options: [option(1, term, true), ...distractors.map((item, idx) => option(idx + 2, item, false))] })) })
  for (let i = 0; i < Math.max(1, Math.ceil(terms.length / 4)); i += 1) { const chunk = terms.slice(i * 4, i * 4 + 4); if (chunk.length >= 3) pool.push(q(++id, 'matching', S.matchTerms, { category: S.catTerms, explanation: S.matchTermsExp, pairs: chunk.map((term, idx) => pair(idx + 1, term, definitionOf(term, theme))) })) }
  people.forEach((person, index) => { const distractors = allPeople.filter((item) => item !== person).slice(index, index + 3); const focus = pick(theme.requirements, index, theme.title); pool.push(q(++id, 'single_choice', `${S.personQ} "${focus}"?`, { category: S.catPeople, explanation: `${person} ${S.personExp}`, options: [option(1, person, true), ...distractors.map((item, idx) => option(idx + 2, item, false))] })) })
  if (people.length >= 3) pool.push(q(++id, 'matching', S.matchPeople, { category: S.catPeople, explanation: S.matchPeopleExp, pairs: people.slice(0, 4).map((person, idx) => pair(idx + 1, person, pick(theme.requirements, idx, theme.title))) }))
  dates.forEach((date) => { const year = cleanYear(date); if (/^[0-9]{3,4}$/.test(year)) pool.push(q(++id, 'year_input', `${S.yearQ} ${date}`, { category: S.catYears, explanation: `A helyes évszám: ${year}. ${S.yearExp}`, acceptedAnswers: [answer(1, year, Number(year) < 500 ? 'BCE' : 'CE')] })) })
  if (dates.length >= 3) pool.push(q(++id, 'chronology_order', S.orderQ, { category: S.catYears, explanation: `${S.orderExp} ${dates.slice(0, 4).join(', ')}.`, options: dates.slice(0, 4).map((date, idx) => option(idx + 1, date, false, idx + 1)) }))
  places.forEach((place, index) => { const focus = pick(theme.requirements, index, theme.title); pool.push(q(++id, 'single_choice', `${S.placeQ} "${focus}"?`, { category: S.catTopo, explanation: `${place} ${S.placeExp}`, options: [option(1, place, true), ...allPlaces.filter((item) => item !== place).slice(index, index + 3).map((item, idx) => option(idx + 2, item, false))] })) })
  if (places.length >= 3) pool.push(q(++id, 'matching', S.matchPlaces, { category: S.catTopo, explanation: S.matchPlacesExp, pairs: places.slice(0, 4).map((place, idx) => pair(idx + 1, place, pick(theme.requirements, idx, theme.title))) }))
  theme.rules.forEach((rule, index) => pool.push(q(++id, 'multi_choice', `${S.ruleQ} "${rule}"?`, { category: S.catConn, explanation: S.ruleExp, options: [option(1, pick(theme.requirements, index, theme.title), true), option(2, pick(terms, index, theme.title), true), option(3, S.bad1, false), option(4, S.bad2, false)] })))
  theme.mistakes.forEach((mistake, index) => { pool.push(q(++id, 'true_false', `${S.mistakeQ} "${mistake}".`, { category: S.catMistakes, explanation: S.mistakeExp, options: [option(1, 'Igaz', false), option(2, 'Hamis', true)] })); pool.push(q(++id, 'single_choice', `${S.fixQ} "${mistake}"?`, { category: S.catMistakes, explanation: S.fixExp, options: [option(1, `${S.fixGood} ${pick(terms, index, theme.title)} / ${pick(people, index, theme.title)} / ${pick(dates, index, theme.title)}.`, true), option(2, S.fixBad1, false), option(3, S.fixBad2, false), option(4, S.fixBad3, false)] })) })
  theme.requirements.slice(0, 6).forEach((req, index) => pool.push(q(++id, 'single_choice', `${S.sourceQ} "${req}". ${S.sourceAsk}`, { category: S.catSource, explanation: S.sourceExp, options: [option(1, `${S.sourceGood} ${pick(terms, index, theme.title)}, ${pick(people, index, theme.title)}, ${pick(dates, index, 'a korszak kronológiája')}.`, true), option(2, S.sourceBad1, false), option(3, S.sourceBad2, false), option(4, S.sourceBad3, false)] })))
  return pool
}

function makeTest(theme, pool, mode, index, count, filterCategories = null) { const selected = filterCategories ? pool.filter((item) => filterCategories.includes(item.category)) : pool; const source = selected.length >= count ? selected : pool; const questions = source.slice(index, index + count).concat(source.slice(0, Math.max(0, index + count - source.length))).slice(0, count); return { id: theme.topicId * 100 + index + count, topicId: theme.topicId, slug: `kerdesbank-${theme.code}-${mode.slug}`, title: `${theme.title} - ${mode.title}`, description: mode.description, type: 'kerdesbank', difficulty: 'nehez', timeLimitSec: mode.timeLimitSec, questionCount: questions.length, knowledgeAreas: [...new Set(questions.map((question) => question.category))], mode: mode.slug, linkedTetelek: theme.linkedTetelek, sourceBasis: ['emelt_tori_kerdesbank_seged_v1.json', ...theme.linkedTetelek.slice(0, 2)], questions: questions.map((question, questionIndex) => ({ ...question, id: theme.topicId * 10000 + index * 100 + questionIndex + 1, order: questionIndex + 1 })) } }
const modes = [ { slug: 'gyors-10', title: S.m1, description: S.m1d, count: 10, timeLimitSec: 900 }, { slug: 'tetelfokusz-20', title: S.m2, description: S.m2d, count: 20, timeLimitSec: 1800 }, { slug: 'emelt-mix-25', title: S.m3, description: S.m3d, count: 25, timeLimitSec: 2400 }, { slug: 'forrasfokusz-15', title: S.m4, description: S.m4d, count: 15, timeLimitSec: 1500, categories: [S.catSource, S.catMistakes, S.catConn] } ]
const pools = new Map(helperThemes.map((theme) => [theme.id, buildQuestionPool(theme)]))
export const questionBankTopics = helperThemes.map((theme) => { const pool = pools.get(theme.id) || []; return { id: theme.topicId, code: theme.code, title: theme.title, description: theme.description, order: theme.order, testCount: modes.length, questionCount: pool.length, recommendedQuestionCount: theme.minimum, linkedTetelek: theme.linkedTetelek } })
export const questionBankTests = helperThemes.flatMap((theme) => { const pool = pools.get(theme.id) || []; return modes.map((mode, modeIndex) => makeTest(theme, pool, mode, modeIndex * 7, mode.count, mode.categories)) })
export const questionBankData = { topics: questionBankTopics, tests: questionBankTests, pools: Object.fromEntries([...pools.entries()].map(([key, value]) => [key, value.length])) }
