import PropTypes from 'prop-types';
import TopicCard from './TopicCard.jsx';
import { difficultyColors, panelClassName } from '../constants/colors.js';
import { MAX_QUESTION_COUNT } from '../constants/config.js';

const QuizMenu = ({
  topics,
  difficulties,
  filters,
  topicCounts,
  availableCount,
  questionCount,
  error,
  onChange,
  onQuestionCountChange,
  onStart,
}) => {
  const handleTopicSelect = (topicId) => {
    const nextTopic = filters.topic === String(topicId) ? '' : String(topicId);
    onChange({ ...filters, topic: nextTopic });
  };

  const handleDifficultyChange = (difficulty) => {
    const nextDifficulty = filters.difficulty === difficulty ? '' : difficulty;
    onChange({ ...filters, difficulty: nextDifficulty });
  };

  return (
    <section className="flex flex-col gap-8 p-8">
      <div className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">Customize your practice session</h2>
            <p className="mt-1 text-sm text-slate-300">
              Choose a topic, difficulty, and number of questions. We will shuffle questions and answers automatically.
            </p>
          </div>
          <div className="rounded-2xl border border-nvidia-green/30 bg-nvidia-green/10 px-4 py-3 text-right text-sm text-nvidia-green">
            <p className="font-semibold uppercase tracking-wide">Ready</p>
            <p className="text-xs text-nvidia-green/80">{availableCount} questions available</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="grid gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Topics</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  totalQuestions={topicCounts[topic.id] || 0}
                  isSelected={filters.topic === String(topic.id)}
                  onSelect={handleTopicSelect}
                />
              ))}
            </div>
          </div>

          <div className={`flex h-fit flex-col gap-4 p-5 ${panelClassName}`}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Difficulty</h3>
              <div className="mt-3 grid gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.id}
                    type="button"
                    onClick={() => handleDifficultyChange(difficulty.id)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nvidia-green ${
                      filters.difficulty === difficulty.id
                        ? 'border-nvidia-green/70 bg-nvidia-green/10 text-nvidia-green'
                        : 'border-white/10 bg-slate-900/60 text-slate-200 hover:border-nvidia-green/50'
                    }`}
                  >
                    <span className="font-semibold">{difficulty.label}</span>
                    <p className="text-xs text-slate-400">{difficulty.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Question Count</h3>
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max={MAX_QUESTION_COUNT}
                  value={questionCount}
                  onChange={(event) => onQuestionCountChange(event.target.value)}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-nvidia-green"
                />
                <input
                  type="number"
                  min="1"
                  max={MAX_QUESTION_COUNT}
                  value={questionCount}
                  onChange={(event) => onQuestionCountChange(event.target.value)}
                  className="w-16 rounded-lg border border-white/10 bg-slate-900/70 px-2 py-1 text-center text-sm"
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">
                We will serve up to {Math.min(questionCount, MAX_QUESTION_COUNT)} questions from the filtered pool of {availableCount}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {error && <p className="text-sm font-medium text-rose-400">{error}</p>}

      <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2 text-xs text-slate-400">
          {Object.entries(difficultyColors).map(([id, className]) => (
            <span key={id} className={`inline-flex items-center gap-2 rounded-full px-3 py-1 capitalize ${className}`}>
              {id}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={onStart}
          disabled={availableCount === 0}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-nvidia-green px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-900 transition hover:bg-nvidia-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nvidia-green disabled:cursor-not-allowed disabled:opacity-50"
        >
          Start Quiz
        </button>
      </div>
    </section>
  );
};

QuizMenu.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  difficulties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  filters: PropTypes.shape({
    topic: PropTypes.string,
    difficulty: PropTypes.string,
  }).isRequired,
  topicCounts: PropTypes.objectOf(PropTypes.number).isRequired,
  availableCount: PropTypes.number.isRequired,
  questionCount: PropTypes.number.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onQuestionCountChange: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
};

QuizMenu.defaultProps = {
  error: '',
};

export default QuizMenu;
