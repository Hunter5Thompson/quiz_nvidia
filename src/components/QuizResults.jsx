import PropTypes from 'prop-types';
import { topics, difficulties } from '../data/topics.js';
import { buildDifficultySummary, buildTopicSummary, calculatePercentage } from '../utils/scoring.js';
import { difficultyColors, panelClassName } from '../constants/colors.js';

const QuizResults = ({ questions, answers, onRestart }) => {
  const totalCorrect = answers.filter((answer) => answer?.isCorrect).length;
  const topicSummary = buildTopicSummary(questions, answers);
  const difficultySummary = buildDifficultySummary(questions, answers);
  const percentage = calculatePercentage(totalCorrect, questions.length);

  return (
    <section className="flex flex-col gap-8 p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-slate-50">Results</h2>
          <p className="mt-1 text-sm text-slate-300">
            You answered {totalCorrect} of {questions.length} questions correctly.
          </p>
        </div>
        <div className={`flex flex-col items-center justify-center rounded-2xl px-6 py-4 text-center ${panelClassName}`}>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Score</p>
          <p className="text-4xl font-bold text-nvidia-green">{percentage}%</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className={`flex flex-col gap-4 p-6 ${panelClassName}`}>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Topic Breakdown</h3>
          <div className="grid gap-3">
            {topics.map((topic) => {
              const summary = topicSummary[topic.id] || { total: 0, correct: 0 };
              const topicPercentage = calculatePercentage(summary.correct, summary.total || 0);
              return (
                <div
                  key={topic.id}
                  className="rounded-xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">Topic {topic.id}</p>
                      <p className="text-base font-semibold text-slate-100">{topic.name}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${topic.color} text-white/90`}>
                      {topic.weight}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    {summary.correct} / {summary.total || 0} correct ({topicPercentage}% accuracy)
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`flex flex-col gap-4 p-6 ${panelClassName}`}>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Difficulty Performance</h3>
          <div className="grid gap-3">
            {difficulties.map((difficulty) => {
              const summary = difficultySummary[difficulty.id] || { total: 0, correct: 0 };
              const difficultyPercentage = calculatePercentage(summary.correct, summary.total || 0);
              return (
                <div
                  key={difficulty.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{difficulty.label}</p>
                    <p className="text-xs text-slate-400">{difficulty.description}</p>
                  </div>
                  <div className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${difficultyColors[difficulty.id]}`}>
                    {summary.correct} / {summary.total} · {difficultyPercentage}%
                  </div>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={onRestart}
            className="mt-auto inline-flex items-center justify-center rounded-full bg-nvidia-green px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-900 transition hover:bg-nvidia-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nvidia-green"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </section>
  );
};

QuizResults.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      selectedIndex: PropTypes.number,
      isCorrect: PropTypes.bool,
    })
  ).isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default QuizResults;
