Frontend progress patch

Új / módosított fájlok:
- src/pages/TetelReaderPage.jsx
- src/services/tetelProgressService.js
- src/styles.css -> csak a styles_patch_append.txt blokkot kell a végére bemásolni

Működés:
- Betölti az API-ból a mentett haladást.
- A csúszka húzásakor helyben rögtön frissül a sárga jelölés.
- 900 ms késleltetéssel ment a backendbe, így nem küld feleslegesen túl sok kérést.
- Ha a backend nem érhető el, a böngészős mentés megmarad tartaléknak.
