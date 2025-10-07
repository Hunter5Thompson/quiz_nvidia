export const shuffleArray = (items) => {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const shuffleQuestionOptions = (question) => {
  const optionMapping = question.options.map((option, index) => ({ option, index }));
  const shuffled = shuffleArray(optionMapping);
  const correctIndex = shuffled.findIndex((item) => item.index === question.correct);
  return {
    ...question,
    options: shuffled.map((item) => item.option),
    correct: correctIndex,
  };
};
