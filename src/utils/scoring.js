export const calculatePercentage = (correct, total) => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

export const buildTopicSummary = (questions, answers) => {
  return questions.reduce((acc, question, index) => {
    const topicEntry = acc[question.topic] || { total: 0, correct: 0 };
    const isCorrect = answers[index]?.isCorrect ?? false;
    return {
      ...acc,
      [question.topic]: {
        total: topicEntry.total + 1,
        correct: topicEntry.correct + (isCorrect ? 1 : 0),
      },
    };
  }, {});
};

export const buildDifficultySummary = (questions, answers) => {
  return questions.reduce((acc, question, index) => {
    const difficultyEntry = acc[question.difficulty] || { total: 0, correct: 0 };
    const isCorrect = answers[index]?.isCorrect ?? false;
    return {
      ...acc,
      [question.difficulty]: {
        total: difficultyEntry.total + 1,
        correct: difficultyEntry.correct + (isCorrect ? 1 : 0),
      },
    };
  }, {});
};
