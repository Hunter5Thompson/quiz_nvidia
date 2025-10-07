import PropTypes from 'prop-types';
import { difficultyColors } from '../constants/colors.js';

const QuestionCard = ({
  question,
  index,
  total,
  selectedIndex,
  isAnswered,
  onAnswer,
}) => {
  const difficultyStyle = difficultyColors[question.difficulty];

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-6 shadow-lg shadow-black/30">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">Question {index + 1}</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-50">{question.question}</h2>
        </div>
        <span className={`text-xs font-semibold uppercase tracking-widest ${difficultyStyle}`}>
          {question.difficulty}
        </span>
      </div>

      <div className="grid gap-3">
        {question.options.map((option, optionIndex) => {
          const isCorrect = question.correct === optionIndex;
          const isSelected = selectedIndex === optionIndex;
          const showState = isAnswered && (isCorrect || isSelected);

          return (
            <button
              key={optionIndex}
              type="button"
              disabled={isAnswered}
              onClick={() => onAnswer(optionIndex)}
              className={`rounded-xl border px-4 py-3 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nvidia-green disabled:cursor-not-allowed disabled:opacity-90 ${
                showState && isCorrect
                  ? 'border-emerald-400/70 bg-emerald-500/20 text-emerald-100'
                  : showState && isSelected
                    ? 'border-rose-400/70 bg-rose-500/20 text-rose-100'
                    : isSelected
                      ? 'border-nvidia-green/60 bg-nvidia-green/10 text-nvidia-green'
                      : 'border-white/10 bg-slate-900/60 text-slate-200 hover:-translate-y-0.5 hover:border-nvidia-green/50'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
          <h3 className="font-semibold text-slate-100">Explanation</h3>
          <p className="mt-2 leading-relaxed text-slate-300">{question.explanation}</p>
        </div>
      )}

      <p className="text-right text-xs uppercase tracking-widest text-slate-500">
        {index + 1} of {total}
      </p>
    </article>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.shape({
    topic: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct: PropTypes.number.isRequired,
    explanation: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number,
  isAnswered: PropTypes.bool,
  onAnswer: PropTypes.func.isRequired,
};

QuestionCard.defaultProps = {
  selectedIndex: undefined,
  isAnswered: false,
};

export default QuestionCard;
