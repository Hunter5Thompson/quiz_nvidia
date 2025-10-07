export const filterQuestions = (questions, { topic, difficulty }) => {
  return questions.filter((question) => {
    const topicMatch = topic ? question.topic === Number(topic) : true;
    const difficultyMatch = difficulty ? question.difficulty === difficulty : true;
    return topicMatch && difficultyMatch;
  });
};

export const countByDifficulty = (questions) =>
  questions.reduce(
    (acc, question) => ({
      ...acc,
      [question.difficulty]: (acc[question.difficulty] || 0) + 1,
    }),
    { easy: 0, medium: 0, hard: 0 }
  );

export const countByTopic = (questions) =>
  questions.reduce(
    (acc, question) => ({
      ...acc,
      [question.topic]: (acc[question.topic] || 0) + 1,
    }),
    {}
  );
