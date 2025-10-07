# NVIDIA Agentic AI Certification Quiz

Ein modulares, erweiterbares Quiz-System für die NVIDIA Agentic AI Zertifizierung. Die App ist mit [Vite](https://vitejs.dev/), React und Tailwind CSS aufgebaut und liefert 10 Topics mit jeweils abgestuften Schwierigkeitsgraden.

## 🚀 Quick Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Build testen
npm run preview
```

## 📁 Projektstruktur

```
├── index.html
├── package.json
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── components/
│   │   ├── ProgressBar.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── QuizGame.jsx
│   │   ├── QuizMenu.jsx
│   │   ├── QuizResults.jsx
│   │   └── TopicCard.jsx
│   ├── constants/
│   │   ├── colors.js
│   │   └── config.js
│   ├── data/
│   │   ├── topics.js
│   │   └── questions/
│   │       ├── index.js
│   │       ├── topic1.js … topic10.js
│   └── utils/
│       ├── filters.js
│       ├── scoring.js
│       └── shuffle.js
├── tailwind.config.js
└── vite.config.js
```

## 🧩 Kernfunktionen

- **QuizMenu**: Filter nach Topic und Schwierigkeitsgrad, konfigurierbare Fragenanzahl, visuelles Topic-Grid.
- **QuizGame**: Fortschrittsanzeige, direkte Antwortbewertung mit Erklärungen, Navigation zwischen Fragen.
- **QuizResults**: Score-Zusammenfassung nach Topics & Schwierigkeitsgrad inklusive Prozentwerten und Restart-Option.
- **Datenlayer**: 30 kuratierte Fragen (3 je Topic) mit ausführlichen Erklärungen.
- **Utilities**: Shuffle, Filter und Scoring-Funktionen für reproduzierbare Quizläufe.

## 🛠️ Tailwind Setup

Tailwind ist bereits konfiguriert. Eigene Klassen können in `tailwind.config.js` ergänzt werden. Globale Styles befinden sich in `src/styles.css`.

## ➕ Fragen & Topics erweitern

1. Neue Fragen in den jeweiligen `src/data/questions/topic[X].js` Dateien ergänzen (Format siehe bestehende Einträge).
2. Für neue Topics `src/data/topics.js` erweitern, eine passende Fragen-Datei erstellen und in `src/data/questions/index.js` importieren.

## 🧪 Testing

Aktuell liegen keine automatisierten Tests bei. Manuelle Checks:

1. Start der App (`npm run dev`).
2. Filter-Kombinationen prüfen (Topic, Difficulty, Fragenanzahl).
3. Quiz komplett durchspielen und Resultate gegenprüfen.
4. Responsiveness im Browser checken.

## 📄 Lizenz

MIT License – siehe `LICENSE` (bei Bedarf ergänzen).
