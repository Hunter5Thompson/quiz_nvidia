import PropTypes from 'prop-types';

const ProgressBar = ({ current, total }) => {
  const progress = total === 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
        <span>Progress</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="mt-2 h-2.5 w-full rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-nvidia-green transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressBar;
