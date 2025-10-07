import { useMemo, useState } from 'react';
import QuizMenu from './components/QuizMenu.jsx';
import QuizGame from './components/QuizGame.jsx';
import QuizResults from './components/QuizResults.jsx';
import { topics, difficulties } from './data/topics.js';
import { allQuestions } from './data/questions/index.js';
import { filterQuestions, countByTopic } from './utils/filters.js';
import { shuffleArray, shuffleQuestionOptions } from './utils/shuffle.js';
import { DEFAULT_QUESTION_COUNT, MAX_QUESTION_COUNT } from './constants/config.js';
import { panelClassName } from './constants/colors.js';

const initialFilters = { topic: '', difficulty: '' };

const App = () => {
  const [view, setView] = useState('menu');
  const [filters, setFilters] = useState(initialFilters);
  const [questionCount, setQuestionCount] = useState(DEFAULT_QUESTION_COUNT);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');

  const topicCounts = useMemo(() => countByTopic(allQuestions), []);

  const availableQuestions = useMemo(
    () => filterQuestions(allQuestions, filters),
    [filters]
  );

  const handleFiltersChange = (nextFilters) => {
    setFilters(nextFilters);
    setError('');
  };

  const handleQuestionCountChange = (value) => {
    const parsed = Number(value);
    if (Number.isNaN(parsed)) return;
    setQuestionCount(Math.min(Math.max(parsed, 1), MAX_QUESTION_COUNT));
  };

  const handleStart = () => {
    if (availableQuestions.length === 0) {
      setError('No questions match the selected filters.');
      return;
    }

    const selection = shuffleArray(availableQuestions)
      .slice(0, Math.min(questionCount, availableQuestions.length))
      .map((question) => shuffleQuestionOptions(question));

    setQuestions(selection);
    setAnswers([]);
    setView('game');
  };

  const handleGameComplete = (gameAnswers) => {
    setAnswers(gameAnswers);
    setView('results');
  };

  const handleRestart = () => {
    setView('menu');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <header className="text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.35em] text-nvidia-green/80">NVIDIA Agentic AI</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Agentic AI Certification Quiz</h1>
          <p className="mt-2 text-base text-slate-300">
            Practice exam covering 10 core topics with adaptive difficulty and detailed explanations.
          </p>
        </header>

        <main className={`mx-auto w-full ${panelClassName}`}>
          {view === 'menu' && (
            <QuizMenu
              topics={topics}
              difficulties={difficulties}
              filters={filters}
              topicCounts={topicCounts}
              availableCount={availableQuestions.length}
              questionCount={questionCount}
              error={error}
              onChange={handleFiltersChange}
              onQuestionCountChange={handleQuestionCountChange}
              onStart={handleStart}
            />
          )}

          {view === 'game' && (
            <QuizGame
              questions={questions}
              onComplete={handleGameComplete}
              onExit={handleRestart}
            />
          )}

          {view === 'results' && (
            <QuizResults questions={questions} answers={answers} onRestart={handleRestart} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
