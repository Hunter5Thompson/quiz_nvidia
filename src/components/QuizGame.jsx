import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard.jsx';
import ProgressBar from './ProgressBar.jsx';
import { panelClassName } from '../constants/colors.js';

const QuizGame = ({ questions, onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    setCurrentIndex(0);
    setResponses(Array.from({ length: questions.length }, () => null));
  }, [questions]);

  const currentQuestion = questions[currentIndex];
  const answeredCount = useMemo(
    () => responses.filter((response) => response !== null).length,
    [responses]
  );

  const handleAnswer = (selectedIndex) => {
    const isCorrect = currentQuestion.correct === selectedIndex;
    setResponses((prev) =>
      prev.map((response, index) => (index === currentIndex ? { selectedIndex, isCorrect } : response))
    );
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    if (responses.some((response) => response === null)) {
      return;
    }
    onComplete(responses);
  };

  const canAdvance = responses[currentIndex] !== null;
  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <section className="flex flex-col gap-6 p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-50">Question {currentIndex + 1}</h2>
          <p className="mt-1 text-sm text-slate-300">Answer all questions to see your topic-by-topic results.</p>
        </div>
        <div className={`w-full max-w-xs ${panelClassName} p-4`}>
          <ProgressBar current={answeredCount} total={questions.length} />
        </div>
      </div>

      <QuestionCard
        key={currentQuestion.question}
        question={currentQuestion}
        index={currentIndex}
        total={questions.length}
        selectedIndex={responses[currentIndex]?.selectedIndex}
        isAnswered={responses[currentIndex] !== null}
        onAnswer={handleAnswer}
      />

      <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-nvidia-green/60 hover:text-nvidia-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nvidia-green disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={onExit}
            className="inline-flex items-center justify-center rounded-full border border-rose-500/40 px-4 py-2 text-sm font-semibold text-rose-200 transition hover:border-rose-400 hover:bg-rose-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
          >
            Exit
          </button>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleNext}
            disabled={!canAdvance || isLastQuestion}
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-nvidia-green/60 hover:text-nvidia-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nvidia-green disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
          <button
            type="button"
            onClick={isLastQuestion ? handleSubmit : handleNext}
            disabled={!canAdvance}
            className="inline-flex items-center justify-center rounded-full bg-nvidia-green px-6 py-2 text-sm font-semibold uppercase tracking-widest text-slate-900 transition hover:bg-nvidia-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nvidia-green disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLastQuestion ? 'Submit' : 'Skip'}
          </button>
        </div>
      </div>
    </section>
  );
};

QuizGame.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onComplete: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
};

export default QuizGame;
