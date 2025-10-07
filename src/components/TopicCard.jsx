import PropTypes from 'prop-types';

const TopicCard = ({ topic, totalQuestions, isSelected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(topic.id)}
      className={`flex w-full flex-col gap-2 rounded-2xl border px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-nvidia-green/60 hover:shadow-lg hover:shadow-nvidia-green/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nvidia-green ${
        isSelected ? 'border-nvidia-green/70 bg-nvidia-green/10' : 'border-white/10 bg-slate-950/40'
      }`}
    >
      <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${topic.color} text-white/90`}>
        Topic {topic.id}
      </span>
      <div>
        <h3 className="text-lg font-semibold text-slate-100">{topic.name}</h3>
        <p className="mt-1 text-sm text-slate-300">Exam weight: {topic.weight}</p>
      </div>
      <p className="mt-auto text-xs text-slate-400">
        {totalQuestions} questions available
      </p>
    </button>
  );
};

TopicCard.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  totalQuestions: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

TopicCard.defaultProps = {
  isSelected: false,
};

export default TopicCard;
